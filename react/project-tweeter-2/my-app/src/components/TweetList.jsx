function TweetList({ tweets }) {
    return (
        <div>
            {tweets.length === 0 ? (
                <p>No tweets yet. Be the first!</p>
            ) : (
                tweets.map((tweet) => (
                    <div key={tweet.timestamp} className="tweet-card">
                        <div className="tweet-header">
                            <span className="tweet-username">{tweet.username}</span>
                            <span className="tweet-date">{new Date(tweet.timestamp).toISOString()}</span>
                        </div>
                        <p className="tweet-text">{tweet.text}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default TweetList;
