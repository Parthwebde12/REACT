import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
           <NavLink href='/'  className={(e)=>{return e.isActive?"red":""}}><li>Home</li></NavLink>
            <NavLink href="/about" className={(e)=>{return e.isActive?"red":""}} ><li>About</li></NavLink>
            <NavLink href='login' className={(e)=>{return e.isActive?"red":""}}><li>Contact me</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar