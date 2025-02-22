/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice () {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json()
    setAdvice(data.slip.advice);
    setCount((count => count + 1))
  }

  useEffect(() => {
    getAdvice()
  }, [])
  
  return <div className='display'>
    <Title/>
    <h2>{advice}</h2>
    <button onClick={getAdvice}>Get Advice</button>
    <p>You have read <strong>{count}</strong> pieces of advice.</p>
  </div>
} 

 function Title() {
  return <h1>Advice App</h1>
}