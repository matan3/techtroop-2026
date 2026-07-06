import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
    </nav>
  );
}

export default Navbar;
