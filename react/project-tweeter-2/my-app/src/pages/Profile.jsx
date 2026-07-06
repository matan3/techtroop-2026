import { useState } from 'react';

function Profile({ username, setUsername }) {

    const [newInput, setNewInput] = useState(username);

    const handleSave = (e) => {
        e.preventDefault();
        setUsername(newInput)
        localStorage.setItem("tweeter-username", newInput);
        alert("Username updated successfully!");
    };

    return (
        <div className="home-container">
            <h2>Profile</h2>
            <p>User Name</p>

            <form onSubmit={handleSave} className="tweet-form-container">
                <input
                    type="text"
                    value={newInput}
                    onChange={(e) => setNewInput(e.target.value)}
                    className="tweet-textarea"
                />
                <div className="form-footer" >
                    <button type="submit" className="tweet-btn">Save</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
