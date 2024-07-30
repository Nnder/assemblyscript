import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'
import { fib } from './assembly/build/release';
import { fib as fib_JS } from './assembly/src/fib';

interface IFibonacci {
  time: number;
  result: number;
}

const initialValue: IFibonacci = {time: 0, result: 0}

function App() {
  const [value, setValue] = useState(0)
  const [fibASCValue, setFibASCValue] = useState<IFibonacci>(initialValue)
  const [fibJSValue, setFibJSValue] = useState<IFibonacci>(initialValue)

  const fibASC = (value: number)=>{
    const startTime = performance.now();
    let result = fib(value);
    for(let i=0; i<=99; i++){
      fib(value)
    }
    const endTime = performance.now();
    setFibASCValue({time: endTime - startTime, result});
  }

  const fibJS = (value: number)=>{
    const startTime = performance.now();
    let result = fib_JS(value);
    for(let i=0; i<=99; i++){
      fib_JS(value)
    }
    const endTime = performance.now();
    setFibJSValue({time: endTime - startTime, result});
  }
  

  useEffect(()=>{
    fibASC(value);
    fibJS(value);
  }, [value])
  
  return (
    <>
      <input type="text" value={value} 
        onChange={(e: ChangeEvent<HTMLInputElement>)=>setValue(+e.target.value)}
      />
      <div>
        <h1>WebAssembly</h1>
        <div>result: {fibASCValue.result}</div>
        <div style={{background: fibJSValue.time >= fibASCValue.time ? 'green' : 'red'}}>
          time: {fibASCValue.time} ms
        </div>
      </div>
      
      <div>
        <h1>JavaScript</h1>
        <div>result: {fibJSValue.result}</div>
        <div style={{background: fibJSValue.time <= fibASCValue.time ? 'green' : 'red'}}>
          time: {fibJSValue.time} ms
        </div>
      </div>
      
    </>
  )
}

export default App
