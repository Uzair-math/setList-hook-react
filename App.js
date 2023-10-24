import logo from './logo.svg';
import './App.css';
import React, {useState, useLayoutEffect} from 'react'

function App() {
  const [count, setCount] = useState(0)

  useLEffect(()=>{
    console.log(count);
  }, [count])

  return (
    <>
    <button onClick={()=>setCount(c => c+1)}>Increment</button>
    <div>{count}</div>
    </>
  );
}

export default App;
