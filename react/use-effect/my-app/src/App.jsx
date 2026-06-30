import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Time from './Time'
import Post from './Post'
import axios from 'axios';

function App() {
  //Exercise 1
  // const [time, setTime] = useState(new Date())

  // const updateTime = () => {
  //   setTime(new Date())
  // }

  // useEffect(() => {
  //   const timerId = setInterval(() => { updateTime() }, 1000)
  //   return () => { clearInterval(timerId) }
  // }, [])

  // return (
  //   <>
  //     <Time time={time} />
  //   </>
  // )

  //Exercise 2
  const [posts, setPosts] = useState()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 10
        }
      })
      setPosts(response.data)
    }
    fetchData();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])

  return (
    <>
      <h2>Top Posts</h2>
      <div className={isMobile ? "posts-container-mobile" : "posts-container"}>
        {posts && posts.map(post => {
          return <Post key={post.id} data={post} />
        })}
      </div>
    </>
  )
}

export default App
