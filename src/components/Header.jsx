import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Validation, Validation1 } from '../utils/Validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,onAuthStateChanged} from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import LogoHeader from './LogoHeader';
import { useDispatch } from 'react-redux';
import { adduser,removeUser } from '../utils/UserSlice';
const Header = () => {
    const dispatch=useDispatch()
    const [formdata, setFormData] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const changeFormName = () => {
        setFormData(true)
    }
    
    
    const formDataSubmited = (e) => {
        //console.log(email.current.value)
        e.preventDefault()
        if (formdata) {
            const message = Validation(name.current.value, email.current.value, password.current.value)
            setMessage(message)
        }
        else {

            const message = Validation1(email.current.value, password.current.value)
            setMessage(message)
        }

        if (message) return;
        if (formdata) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;
                    //console.log(user)
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const {uid,email,displayName} = auth.currentUser;
                        dispatch(adduser({uid:uid,email:email,displayName:displayName}))
                     
                    }).catch((error) => {
                        setMessage(error.message)
                    });


                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage)
                });
        }
        else {

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    const user = userCredential.user;
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setMessage(errorMessage)
                });
        }

    }

    return (
        <div>
            <LogoHeader />
            <form onSubmit={formDataSubmited}
                className='fixed my-20 mx-auto right-0 left-0 bg-black p-6 md:w-3/12 text-white bg-opacity-80 w-[80%]'>
                {formdata ?
                    <h2 className='font-bold text-3xl mb-2'>Sign Up</h2>
                    : <h2 className='font-bold text-3xl mb-2'>Sign In</h2>
                }
                {formdata ?
                    <input ref={name}
                        type="text"
                        placeholder='Full Name'
                        className='w-full my-3 p-2 bg-gray-800  ml-1 mr-2'
                        autoFocus />
                    : ''}
                <input ref={email}
                    type="text"
                    placeholder='Email Address'
                    className='w-full my-3 p-2 bg-gray-800  ml-1 mr-2'
                    autoFocus />

                <input ref={password}
                    type="password"
                    placeholder='Password'
                    className='w-full my-3 p-2 bg-gray-800 ml-1 mr-2'
                />
                <span className='text-red-600 realtive text-lg'>{message}</span>
                {formdata ?
                    <button
                        className='w-full bg-orange-500 my-6 ml-1 p-2 rounded-lg text-lg'>Sign Up
                    </button>

                    : <button
                        className='w-full bg-red-700 my-6 ml-1 p-2 rounded-lg text-lg'>Sign In
                    </button>
                }
                <div className='text-gray-400'>
                    <input type="checkbox" className='ml-3'></input>
                    <span className='ml-1'>Remember me</span>
                    <span className='ml-10 hover:underline'><a href='#'>Need help?</a></span>
                </div>
                {formdata ? '' :
                    <div className='mt-6'>
                        <span className='text-gray-400 ml-3'>New to Netflix?</span>

                        <span className='text-white' onClick={changeFormName}><a href='#' className='hover:underline'> Sign Up Now.</a></span>

                    </div>
                }
                <div className='ml-3 mt-3 mb-2 text-gray-400 hidden md:inline-block'>
                    <span >This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="#" className='text-white hover:underline'> Learn more.</a></span>
                </div>

            </form>


        </div>
    )
}

export default Header