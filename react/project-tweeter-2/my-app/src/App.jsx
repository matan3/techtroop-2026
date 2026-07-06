import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {

  const [username, setUsername] = useState(() => {
    const saved = localStorage.getItem("tweeter-username");
    return saved ? saved : "userName";
  });


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/profile" element={<Profile username={username} setUsername={setUsername} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
