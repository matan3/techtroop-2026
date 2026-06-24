import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from 'react';
import Hudini from './components/Hudini';
import Home from './components/Home';
import Landing from './components/Landing';

//Exercise 1
// function App() {

//   const [show, setShow] = useState(false);

//   const toggleShow = () => {
//     setShow(!show);
//   }

//   return (
//     <>
//       <Hudini show={show} />
//       <button onClick={toggleShow}>toggle</button>
//     </>
//   )
// }

// export default App

//Exercise 2
// function App() {


//   const [state, setState] = useState({
//     user: "Robyn",
//     store: [
//       { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
//       { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
//       { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
//     ],
//     shouldDiscount: false,
//     currentPage: "Landing"
//   });


//   return (
//     <>
//       <Landing user={state.user} />
//       <Home store={state.store} />
//     </>
//   )
// }

// export default App

//Exercise 3
// function App() {

//   const [state, setState] = useState({
//     user: "Robyn",
//     store: [
//       { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
//       { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
//       { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
//     ],
//     shouldDiscount: false,
//     currentPage: "Landing"
//   });

//   const togglePage = () => {
//     setState({
//       ...state,
//       currentPage: state.currentPage === "Landing" ? "" : "Landing"
//     });
//   };


//   return (
//     <>
//       <button onClick={togglePage}>
//         {state.currentPage === "Landing" ? "Home" : "Landing"}
//       </button>
//       {state.currentPage === "Landing" ?
//         <Landing user={state.user} store={state.store} /> :
//         <Home store={state.store} />
//       }
//     </>
//   )
// }

// export default App

//Exercise 4
function App() {

  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  });

  const togglePage = () => {
    setState({
      ...state,
      currentPage: state.currentPage === "Landing" ? "" : "Landing"
    });
  };


  return (
    <>
      <button onClick={togglePage}>
        {state.currentPage === "Landing" ? "Home" : "Landing"}
      </button>
      {state.currentPage === "Landing" ?
        <Landing user={state.user} store={state.store} /> :
        <Home store={state.store} shouldDiscount={state.shouldDiscount} />
      }
    </>
  )
}

export default App