import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Prabhjot",
    age: 18
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='text-center font-mono text-4xl bg-red-300'>Tailwind test</h1>
      <Card username="Chai aur code" someObj={myObj} btnTxt="Learn More" />
      <br/>
      <Card username="Prabhjot" someObj={myArr} btnTxt="View More" />
      <br/>
      <Card username="User" someObj={["Batman","Superman"]} />
    </>
  )
}

export default App
