import { useState } from 'react'
import { createBrowserRouter  , RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Login from './Components/login'
import About from './Components/About'
import User from './Components/user'

function App() {
     const router = createBrowserRouter([
      {
        path :"/",
        element :<><Navbar/><Home/></>
      }
      ,{
        path :"/login",
        element: <><Navbar/><Login/></>
      }
      , {
        path:"/about",
        element:<><Navbar/><About/></>
      },{
        path:"/user/:username",
        element:<><Navbar/><user/></>
      }
     ])
  return (
    <>
      
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
