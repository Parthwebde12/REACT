import React from 'react'
import Header from '../others/Header'
import Tasknumber from '../others/Tasknumber'
import Tasklist from '../tasklist/tasklist'

const Employeedashboard = () => {
  return (
    <div>
      <div className='p-10 bg-black-500'>
        <Header/>
        <Tasknumber/>
        <Tasklist/>
        
          
      </div>
    </div>
  )
}

export default Employeedashboard
