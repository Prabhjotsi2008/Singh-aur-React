import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // Here 5 is default value, counter is a variable and setCounter is a method (function) corresponding to counter 
  // the names can be anything, its just a convention
  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // counter += 1
    // counter = counter + 1
    // console.log("Value added", counter)
    if(counter<20){
      console.log(counter) // gives the value of counter // e.g 5
      // THIS IS THE NORMAL COUNTER APPROACH
      setCounter(counter + 1)

      // THIS APPROACH IS USED IF WE WANT TO USE THE setCounter multiple times
      // setCounter((prevCounter) => prevCounter + 1)
      // console.log(counter) // It remains the same 5 // because useState doesnot update immediately
      // setCounter((prevCounter) => prevCounter + 1)
      // console.log(counter) // It remains the same 5 // because useState doesnot update immediately
      // setCounter((prevCounter) => prevCounter + 1)
      console.log(counter) // It remains the same 5 // because useState doesnot update immediately
    }
    else{
      alert("Cannot increase further")
    }
  }

  const removeValue = () =>{
    if(counter>0){
      console.log(counter) // gives the value of counter // e.g 5
      setCounter(counter - 1) // decrementing values
      console.log(counter) // It remains the same 5 // because useState doesnot update immediately
    }
    else{
      alert("Cannot decrease further")
    }
  }


  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
