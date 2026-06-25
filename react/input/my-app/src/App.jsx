import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Exercise1 />
      <Exercise2 />
    </>
  )
}

export default App
