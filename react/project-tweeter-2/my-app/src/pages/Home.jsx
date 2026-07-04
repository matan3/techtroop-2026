import { useState, useEffect } from 'react';
import CreateTweet from '../components/CreateTweet';
import TweetList from '../components/TweetList';
import { API_URL, getHeaders } from '../lib/api';

function Home() {

    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchTweets = async () => {
            setIsLoading(true);
            setErrorMessage('');
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
            } finally {
                setIsLoading(false);
            }
        };

        fetchTweets();
    }, []);


    const handleAddTweet = async (tweetContent) => {
        if (isLoading) return;

        setIsLoading(true);
        setErrorMessage('');

        const newTweet = {
            content: tweetContent,
            userName: "username",
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
        <div className="home-container">
            {errorMessage && <div className="server-error">{errorMessage}</div>}
            <CreateTweet onAddTweet={handleAddTweet} isSending={isLoading} />
            {isLoading && tweets.length === 0 ? (
                <p>Loading tweets...</p>
            ) : (
                <TweetList tweets={tweets} />
            )}
        </div>
    );
}

export default Home;
