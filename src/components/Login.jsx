import React from 'react'
import Header from './Header'
import { LOGO, backImg } from '../utils/Constants'
import { useSelector } from 'react-redux'
const Login = () => {
  const{showSearchbtn}=useSelector(state=>state.button)
  return (
    <div>
        <Header/>
        <div >
            <img 
            className='fixed w-screen -z-10 h-screen object-cover '
            src={backImg}
            alt=''/>
        </div>
    </div>
  )
}

export default Login