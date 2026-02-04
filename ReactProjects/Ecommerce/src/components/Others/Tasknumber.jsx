import React from 'react'

const Tasknumber = () => {
  return (
    <div className='flex justify-between mt-10 gap-5 screen'>
        <div  className='  px-9 rounded-xl w-[45%] bg-blue-500 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div  className='  px-9 rounded-xl w-[45%] bg-red-500 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div  className='  px-9 rounded-xl w-[45%] bg-green-500 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div  className='  px-9 rounded-xl w-[45%] bg-amber-400 py-6'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
      
    </div>
  )
}

export default Tasknumber
