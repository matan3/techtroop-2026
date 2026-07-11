import { useContext, createContext, useState, useEffect } from 'react';
import { supabase } from './api';

export const TweetContext = createContext();

export function TweetProvider({ children }) {

    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
            setAuthLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setAuthLoading(false);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);


    const fetchTweets = async () => {
        try {
            const { data, error } = await supabase
                .from('tweets')
                .select('*')
                .order('date', { ascending: false });

            if (error) throw error;
            setTweets(data);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {

        if (!user) {
            setTweets([]);
            return;
        }
        setIsLoading(true);
        fetchTweets().finally(() => setIsLoading(false));

        const channel = supabase
            .channel('schema-db-changes')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'tweets' },
                (payload) => {
                    setTweets((prevTweets) => [payload.new, ...prevTweets]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [user]);

    const handleAddTweet = async (tweetContent, currentUsername) => {
        if (isLoading) return;
        setIsLoading(true);
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('tweets')
                .insert([
                    {
                        content: tweetContent,
                        username: currentUsername || "username"
                    }
                ]);
            if (error) throw error;
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (email, password) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
    };


    return (
        <TweetContext value={{ 
            tweets, 
            isLoading, 
            errorMessage, 
            handleAddTweet,
            user,          
            authLoading,   
            login,         
            logout     
        }}>
            {children}
        </TweetContext>
    );
}

export const useTweetContext = () => useContext(TweetContext);
