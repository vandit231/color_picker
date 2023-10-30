

import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor]=useState("olive")
  return (
    <>
      <div className="w-screen h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"><button onClick={()=>setColor("red")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button></div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"><button onClick={()=>setColor("green")} className="outline-none px-5 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>green</button></div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"><button onClick={()=>setColor("blue")}className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button></div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"><button onClick={()=>setColor("yellow")}className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow", color:"black"}}>yellow</button></div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"><button onClick={()=>setColor("black")}className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button></div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"><button onClick={()=>setColor("white")}className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"white", color:"black"}}>white</button></div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"><button onClick={()=>setColor("orange")}className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>orange</button></div>
          </div>
      </div>
    </>
  )
}

export default App
