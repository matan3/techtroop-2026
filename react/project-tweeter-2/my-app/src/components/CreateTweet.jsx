import { useState } from 'react';

function CreateTweet({ onAddTweet }) {
    const [text, setText] = useState('');
    const username = 'userName';

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTweet = {
            text: text,
            username: username,
            timestamp: Date.now()
        };
        onAddTweet(newTweet);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="tweet-form-container">
            <textarea
                placeholder="What you have in mind..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="tweet-textarea"
            />

            <div className="form-footer">
                <p className="char-counter">{text.length} / 140</p>
                {text.length > 140 && (
                    <div className="error-message">
                        The tweet can't contain more then 140 chars.
                    </div>
                )}
                <button type="submit" disabled={text.length > 140} className="tweet-btn">
                    Tweet
                </button>
            </div>
        </form>
    );
}

export default CreateTweet;
