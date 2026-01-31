// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
     const onSubmit = (data) => console.log(data)

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <form action="" className="action" onSubmit={handleSubmit(onSubmit)}>
          <input type="text"name='username' id='' />
          <br />
          <input type="password" name='password' />
          <br />
          <input type="submit" value="submit" id="" />
          </form>
      </div>
    </>
  )
}

export default App
