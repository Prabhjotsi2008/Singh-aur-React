import { useState } from 'react'
import './App.css'

function App({name="User",role="N/A",age="N/A"}) {

  return (
    <>
     <div className='flex bg-slate-950 flex-col text-white p-4 rounded-2xl items-center gap-6 font-mono min-w-70'>
        <h1 className="text-2xl font-bold text-red-500">{name}</h1>
        <h3 className='text-red-300'>Role: {role}</h3>
        <h3 className='text-red-300'>Age: {age}</h3>
     </div>
    </>
  )
}

export default App
