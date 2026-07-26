import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'



function App() {
  const [length,setLength] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow,setCharAllow] = useState(false)
  const [password,setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length) // just for optimization // will even work without it 
    window.navigator.clipboard.writeText(password)
  }, [password])


  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow) str += "1234567890"
    if (charAllow) str += "!@#$%^&*()_+~`=[]{}"

    for (let i = 1; i <= length; i++) {
      let charIdx = Math.floor((Math.random() * str.length))
      pass += str[charIdx]
      
    }

    setPassword(pass)

  }, [length,numAllow,charAllow, setPassword])



  useEffect(() => {
    passwordGen()
  }, [length,numAllow,charAllow,passwordGen])
  


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-amber-600 bg-gray-800'>

      <h1 className="text-2xl text-center text-white font-bold">Password Generator</h1>

        <div className='flex rounded-lg overflow-hidden my-3'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3 bg-white' 
          placeholder='Password' 
          readOnly
          ref={passwordRef} />
          <button
          onClick={copyPassword}
          className="bg-amber-600 text-white px-4 py-2 outline-none hover:bg-amber-500 active:bg-amber-600">Copy</button>
        </div>

        <div className='flex text-sm gap-x-4'>
          <div className="flex items-center gap-x-1">
            <input
            type="range" 
            min={6}
            max={50}
            value={length}
            className="cursor-pointer accent-amber-600"
            onChange={(e) => {setLength(e.target.value)}} />

            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
             id="numInput"
             defaultChecked={numAllow}
             className='cursor-pointer accent-amber-600'
             onChange={() => {
              setNumAllow((prev) => !(prev))
             }} />
             <label htmlFor='numInput' className='cursor-pointer'>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
             id="charInput"
             defaultChecked={charAllow}
             className='cursor-pointer accent-amber-600'
             onChange={() => {
              setCharAllow((prev) => !(prev))
             }} />
             <label htmlFor='charInput' className='cursor-pointer'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
