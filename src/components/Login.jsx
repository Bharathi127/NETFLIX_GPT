import React from 'react'
import Header from './Header'
import { LOGO, backImg } from '../utils/Constants'

const Login = () => {
  return (
    <div>
        <Header/>
        <div >
            <img
            className='' 
            src={backImg}
            alt=''/>
        </div>
    </div>
  )
}

export default Login