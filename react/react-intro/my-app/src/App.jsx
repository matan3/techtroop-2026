import './App.css'

// Exercise 1
// function App() {

//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ]

//   const showCompany = (name, revenue) => {
//     return (
//       <div id={name} key={name}>
//         {name} makes {revenue} every year
//       </div>
//     );
//   };

//   const answer = companies.map(item => {
//     return showCompany(item.name, item.revenue);
//   });


//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {answer}
//       </div>
//     </div>
//   )
// }

// export default App


// Exercise 2
function App() {

  const getDiv = (temperature) => {
    return (
      <div id="weatherBox" className={temperature}>
        {temperature}
      </div>
    );
  };

  const getClassName = (temperature) => {
    if (temperature < 15) {
      return getDiv("freezing");
    }
    if (temperature > 30) {
      return getDiv("hell-scape");
    }
    return getDiv("fair");
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {getClassName(10)}
        {getClassName(40)}
        {getClassName(20)}
      </div>
    </div>
  )
}


export default App