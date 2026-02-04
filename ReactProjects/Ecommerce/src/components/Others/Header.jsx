import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Parth👋</span></h1>
      <button className='bg-red-400 text-shadow-white px-3 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
