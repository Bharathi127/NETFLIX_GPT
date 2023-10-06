import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { adduser } from '../utils/UserSlice';
import { LOGO } from '../utils/Constants';
import { ClickonBtn } from '../utils/SearchToggleSlice'
import { changeLang } from '../utils/LanguageSlice'
const LogoHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const { showSearchbtn } = useSelector(state => state.button)
    const signoutvalidation = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {

        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(adduser({ uid: uid, email: email, displayName: displayName }))
                navigate('/browse')

            } else {
                dispatch(removeUser())
                navigate('/')
            }
        });
        return () => unsubscribe()
    }, [])


    const eventHandler = () => {
        dispatch(ClickonBtn())
    }
    const changeLanguage = (e) => {
        dispatch(changeLang(e.target.value))
    }
    return (
        <div className='absolute flex justify-between z-10 w-screen bg-gradient-to-b from-black'>

            <div className='w-screen'>
                <img
                    className=' w-44'
                    src={LOGO}
                    alt='logo' />
            </div>
            {user && showSearchbtn &&
                <div>
                    <select className='my-6 py-1 px-3 mr-4 bg-black text-white cursor-pointer' onChange={changeLanguage}>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="spanish">spanish</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Tamil">Tamil</option>
                    </select>
                </div>
            }
            {user && <div>
                <button className='text-lg mr-60 my-6 py-1 px-3 rounded-lg bg-purple-700 text-white' onClick={eventHandler}>
                    {showSearchbtn ? "Home" : "GptSearch"}</button>
            </div>
            }
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