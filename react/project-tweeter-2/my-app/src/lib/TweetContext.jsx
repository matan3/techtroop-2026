import { createContext, useState, useEffect } from 'react';
import { API_URL, getHeaders } from './api';

export const TweetContext = createContext();

export function TweetProvider({ children }) {

    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchTweets = async () => {
        try {
            const response = await fetch(`${API_URL}?order=date.desc`, {
                method: 'GET',
                headers: getHeaders()
            });
            if (!response.ok) throw new Error('Failed to fetch tweets');
            const data = await response.json();
            setTweets(data);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    useEffect(() => {

        setIsLoading(true);
        fetchTweets().finally(() => setIsLoading(false));

        const intervalId = setInterval(() => {
            fetchTweets()
        }, 7000);

        return () => {
            clearInterval(intervalId)
        };
    }, []);

    const handleAddTweet = async (tweetContent, currentUsername) => {
        if (isLoading) return;
        setIsLoading(true);
        setErrorMessage('');

        const newTweet = {
            content: tweetContent,
            userName: currentUsername || "userName",
            date: new Date().toISOString()
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify(newTweet)
            });

            if (!response.ok) throw new Error('Could not save your tweet to the server.');
            setTweets((prevTweets) => [newTweet, ...prevTweets]);
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
