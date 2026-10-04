import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen px-40 flex flex-col text-center bg-slate-600'>
      <h1>Hello, Chai</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App