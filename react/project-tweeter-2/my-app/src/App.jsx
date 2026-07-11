import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import { TweetProvider, useTweetContext } from './lib/TweetContext';

function AppContent() {

  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem("tweeter-username");
    return saved ? saved : "userName";
  });

  const { user, authLoading } = useTweetContext();

  if (authLoading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading auth session...</div>;
  }

  const currentDisplayName = user?.user_metadata?.username || user?.email?.split('@')[0] || "User";

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/" element={user ? <Home username={currentDisplayName} /> : <Navigate to="/login" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
          </Routes>
        </Router>
    </>
  )
}

export default function App() {
    return (
        <TweetProvider>
            <AppContent />
        </TweetProvider>
    );
}
