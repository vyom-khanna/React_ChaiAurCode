import { useState } from 'react'
import './App.css'

function App() {
  const addvalue = ()=>{
    if(counter<20){
      Hiteshcounter(counter+1)
      Hiteshcounter(prevcounter => prevcounter+1)
      Hiteshcounter(prevcounter => prevcounter+1)
      Hiteshcounter(prevcounter => prevcounter+1)
    }
  }
  const removeValue = ()=>{
    if(counter>0) Hiteshcounter(counter-1)
  }

  let [counter,Hiteshcounter] = useState(10) //input counter value in useState

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
