import React,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import {onAuthStateChanged} from "firebase/auth";
import { adduser } from '../utils/UserSlice';
import { LOGO } from '../utils/Constants';
const LogoHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const signoutvalidation = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
         }).catch((error) => {
           
        });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
             const {uid,email,displayName} = user;
             dispatch(adduser({uid:uid,email:email,displayName:displayName}))
             navigate('/browse')
            
            } else {
              dispatch(removeUser())
              navigate('/')
            }
          });
          return ()=>unsubscribe()
    },[])
    
    return (
        <div className='absolute flex justify-between' id="header">
            <div className=' w-screen bg-gradient-to-b from-black'>
                <img
                    className=' w-44'
                    src={LOGO}
                    alt='logo' />
            </div>
            {user && <div className='absolute top-0 right-0 my-4 font-bold mr-10 text-lg  flex ml-5'>
                <img
                    className='w-12 p-2'
                    alt="logo"
                    src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png" />
                <div className='flex flex-col text-white'>
                    <span>{`Welcome ${user.displayName}`}</span>
                    <button onClick={signoutvalidation}>(Sign Out)</button>
                </div>
            </div>
            }
        </div>
    )
}

export default LogoHeader