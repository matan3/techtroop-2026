import { Link, useNavigate } from 'react-router-dom';
import { useTweetContext } from '../lib/TweetContext';

function Navbar() {
  const { user, logout } = useTweetContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <h2 className="navbar-brand">TweetApp</h2>
      </div>

      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/profile" className="navbar-link">Profile</Link>
            <span className="navbar-user-email">({user.email})</span>
            <button onClick={handleLogout} className="navbar-logout-btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="navbar-link">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
