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
            className='fixed -z-10'
            src={backImg}
            alt=''/>
        </div>
    </div>
  )
}

export default Login