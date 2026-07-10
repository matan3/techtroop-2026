import { createContext, useState, useEffect } from 'react';
import { supabase } from './api'; 

export const TweetContext = createContext();

export function TweetProvider({ children }) {

    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

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
    }, []);

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

    return (
        <TweetContext value={{ tweets, isLoading, errorMessage, handleAddTweet }}>
            {children}
        </TweetContext>
    );
}
