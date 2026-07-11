import { useState, useEffect } from 'react';
import { useTweetContext } from '../lib/TweetContext';
import { supabase } from '../lib/api';

function Profile() {

    const { user } = useTweetContext();
    const [newInput, setNewInput] = useState(user?.user_metadata?.username || '');

    useEffect(() => {
        if (user?.user_metadata?.username) {
            setNewInput(user.user_metadata.username);
        }
    }, [user]);

    const handleSave = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase.auth.updateUser({
                data: { username: newInput }
            });

            if (error) throw error;

            alert("Username updated successfully in Supabase!");
            window.location.reload();
        } catch (error) {
            alert("Error updating username: " + error.message);
        }
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
