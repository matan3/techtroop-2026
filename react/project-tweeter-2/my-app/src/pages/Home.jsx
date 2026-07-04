import { useState, useEffect } from 'react';
import CreateTweet from '../components/CreateTweet';
import TweetList from '../components/TweetList';

function Home() {

    const [tweets, setTweets] = useState(() =>{
        const saved = localStorage.getItem("my-tweets");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("my-tweets", JSON.stringify(tweets));
    }, [tweets]);

    const handleAddTweet = (newTweet) => {
        setTweets((prevTweets) => [newTweet, ...prevTweets]);
    };

    return (
        <div className="home-container">
            <CreateTweet onAddTweet={handleAddTweet} />
            <TweetList tweets={tweets} />
        </div>
    );
}

export default Home;
