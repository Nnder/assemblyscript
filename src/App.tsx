import { ChangeEvent, useState } from 'react'
import './App.css'
import { fib } from './assembly/build/release';

function App() {
  const [value, setValue] = useState(0)
  const [fibValue, setFibValue] = useState(0)
  
  const mathFib = (e: ChangeEvent<HTMLInputElement>)=>{
    const value = +e.target.value;
    setValue(value);
    const result = fib(value);
    setFibValue(result);
  }

  return (
    <>
      <input type="text" value={value} onChange={(e: ChangeEvent<HTMLInputElement>)=>mathFib(e)}/>
      <div>{fibValue}</div>
    </>
  )
}

export default App
