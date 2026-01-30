import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [First, setFirst] = useState(0);
  const [color, setColor] = useState(0)


  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
  }, [count])

  

  return (
    <>
      <Navbar color={"cyan"} />
      <h1>The count is {count}</h1>
      <button onClick={() => (setCount(count + 1))}>count me </button>
    </>
  )
}

export default App
