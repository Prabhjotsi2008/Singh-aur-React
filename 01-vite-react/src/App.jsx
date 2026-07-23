import Chai from "./Chai.jsx" // keep component file names as capital also (CONVENTION)

function App() {
  const username = "Prabhjot Singh !!!" // using variables 
  return (
    // <Chai/> // it should be Chai, and not chai // only then it will work
    // <h1>Hello</h1> // there can not be multiple elements returned

    // Solution

    // these container tags (<> </>) are called fragments used in place of unnecessary divs
    <> 
    <Chai/>
    <h1>Hello</h1>
    <p>{username}</p>
    </>
  )
}

export default App
