import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('')

  const add=()=>{
setCount(count+'+')
  }
  const sub=()=>{
setCount(count+'-')
  }
  const mul=()=>{
setCount(count+'*')
  }
  const div=()=>{
setCount(count+'/')
  }
  const equal=()=>{
   let ans= eval(count)
setCount(ans)
  }

  const one=()=>{
 setCount(count+'1')
  }
  const two=()=>{
    setCount(count+'2')
  }
  const three=()=>{
    setCount(count+'3')
  }
  const four=()=>{
    setCount(count+'4')
  }
  const five=()=>{
    setCount(count+'5')
  }
  const six=()=>{
    setCount(count+'6')
  }
  const seven=()=>{
    setCount(count+'7')
  }
  const eight=()=>{
    setCount(count+'8')
  }
  const nine=()=>{
    setCount(count+'9')
  }
  const zero=()=>{
    setCount(count+'0')
  }
  const clear=()=>{
    setCount('')
  }
  
  return (
    <>
    <div className="disp">
    <p>{count}</p>
    </div>
    <div className="buttons">
    <div className="onetothree">
    <button onClick={seven}>7</button>
    <button onClick={eight}>8</button>
    <button onClick={nine}>9</button>
    
    <button className="yellow" onClick={add}>+</button>
    </div>
    
   <div className="fourtosix">
   <button onClick={four}>4</button>
    <button onClick={five}>5</button>
    <button onClick={six}>6</button>
    <button className="yellow" onClick={sub}>-</button>
   </div>
    
    <div className="seventonine">
    <button onClick={one}> 1</button>
    <button onClick={two}>2</button>
    <button onClick={three}>3</button>
    <button className="yellow" onClick={div}>/</button>
    </div>
    
    
    
    <div className="zero">
    <button onClick={clear}>cl</button>
    <button onClick={zero}>0</button>
    <button onClick={equal}>=</button>
    <button className="yellow" onClick={mul}>x</button>
    </div>
   
    </div>
    
    
  
    
    </>
  )
}

export default App
