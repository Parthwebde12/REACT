import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-violet-900 text-white py-3'>
        <div className='logo'>
            <span className="font-bold text-xl mx-9 my-2">iTASK</span>
        </div>
        <ul className="flex gap-9 mx-9">
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Task</li>
        </ul>
    </div>
  )
}

export default Navbar