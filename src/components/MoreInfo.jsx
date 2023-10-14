import React from 'react'
import { backImg } from '../utils/Constants'

const MoreInfo = () => {
  return (
   <div>
    <img 
    className='fixed'
    src={backImg} alt=''/>
    <div className='text-white flex justify-center align-middle my-[10%] font-bold text-2xl absolute mx-auto right-0 left-0'>
        Sorry right now data is not avaialble!!......
    </div>
    
    </div>
  )
}

export default MoreInfo