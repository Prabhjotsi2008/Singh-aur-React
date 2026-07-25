import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 font-serif" style={{backgroundColor: color}}>
      <div className="flex flex-wrap px-2 justify-center items-center flex-col gap-5">
        <div className="bg-white px-4 py-2 flex justify-center items-center rounded-full text-2xl mt-10 shadow-lg">Interact with the buttons</div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-full">
          <button className="px-4 py-2 outline-none rounded-full text-white text-xl" style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}>Red</button>
          <button className="px-4 py-2 outline-none rounded-full text-white text-xl" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
          <button className="px-4 py-2 outline-none rounded-full text-white text-xl" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
          <button className="px-4 py-2 outline-none rounded-full text-white text-xl" style={{backgroundColor: "grey"}} onClick={() => setColor("grey")}>Grey</button>
          <button className="px-4 py-2 outline-none rounded-full text-white text-xl" style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
          <button className="px-4 py-2 outline-none rounded-full text-white text-xl" style={{backgroundColor: "olive"}} onClick={() => setColor("olive")}>Olive</button>
        </div>
      </div>
    </div>

  )
}

export default App
