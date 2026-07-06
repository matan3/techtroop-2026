import { useState, useEffect } from 'react';
import CreateTweet from '../components/CreateTweet';
import TweetList from '../components/TweetList';
import { TweetContext } from '../lib/TweetContext';
import { useContext } from 'react';

function Home({ username }) {

    const { tweets, isLoading, errorMessage, handleAddTweet } = useContext(TweetContext);

    return (
        <div className="home-container">
            {errorMessage && <div className="server-error">{errorMessage}</div>}
            <CreateTweet onAddTweet={(text) => handleAddTweet(text, username)} isSending={isLoading} />
            {isLoading && tweets.length === 0 ? (
                <p>Loading tweets...</p>
            ) : (
                <TweetList tweets={tweets} />
            )}
        </div>
    );
}

export default Home;
