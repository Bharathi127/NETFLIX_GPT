import React from 'react'
import { useState } from 'react'
const Header = () => {
    const [formdata, setFormData] = useState(false)
    const changeFormName = () => {
        setFormData(true)
    }
    const formDataSubmited = (e) => {
        e.preventDefault()
    }

    return (
        <div>

            <img
                className='absolute w-44 bg-gradient-to-b from-black my'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo' />
            <form onSubmit={formDataSubmited}
                className='absolute my-24 mx-auto right-0 left-0 bg-black p-8 w-3/12 text-white bg-opacity-80 '>
                {formdata ?
                    <h2 className='font-bold text-3xl mb-2'>Sign Up</h2>
                    : <h2 className='font-bold text-3xl mb-2'>Sign In</h2>
                }
                {formdata ?
                    <input
                        type="text"
                        placeholder='Full Name'
                        className='w-full my-3 p-2 bg-gray-800  ml-1 mr-2' />
                    : ''}
                <input
                    type="text"
                    placeholder='Email Address'
                    className='w-full my-3 p-2 bg-gray-800  ml-1 mr-2' />
                <input
                    type="password"
                    placeholder='Password'
                    className='w-full my-3 p-2 bg-gray-800 ml-1 mr-2' />
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
                    <span className='ml-16 hover:underline'><a href='#'>Need help?</a></span>
                </div>
                {formdata ? '' :
                    <div className='mt-10'>
                        <span className='text-gray-400 ml-3'>New to Netflix?</span>

                        <span className='text-white' onClick={changeFormName}><a href='#' className='hover:underline'> Sign Up Now.</a></span>

                    </div>
                }
                <div className='ml-3 mt-3 mb-5 text-gray-400'>
                    <span >This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="#" className='text-white hover:underline'> Learn more.</a></span>
                </div>

            </form>


        </div>
    )
}

export default Header