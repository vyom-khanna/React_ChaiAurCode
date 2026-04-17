import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const addvalue = ()=>{
    if(counter<20) setcounter(counter+1)
  }
  const removeValue = ()=>{
    if(counter>0) setcounter(counter-1)
  }

  let [counter,setcounter] = useState(15);

  return (
    <>
    <h1>Chai aur React {counter}</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addvalue} >Add value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}


export default App
