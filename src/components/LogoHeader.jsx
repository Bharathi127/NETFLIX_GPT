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
import Home from './Home';
import GPTSearch from './GPTSearch';
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
        <div className={user?' flex flex-col md:flex-row z-10 w-screen bg-gradient-to-b from-black absolute '
        :' flex flex-col md:flex-row z-10 w-screen bg-gradient-to-b from-black fixed'}>

            <div className='w-screen'>
                <img
                    className=' md:w-44 w-36 md:p-0 p-3'
                    src={LOGO}
                    alt='logo' />
            </div>
            <div className='flex md:ml-0 ml-[66%] '>
            {user && showSearchbtn &&
                <div>
                    <select className='md:my-6 my-1 py-1 md:px-3 mr-4 md:ml-0 bg-black text-white cursor-pointer' onChange={changeLanguage}>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="spanish">spanish</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Tamil">Tamil</option>
                    </select>
                </div>
            }
            {user && <div>
                <button className={`text-lg md:ml-0 ${showSearchbtn? 'ml-30':'ml-[20%]'} mr-60 md:my-6 my-1 py-1 px-3 rounded-lg bg-purple-700 text-white`} onClick={eventHandler}>
                    {showSearchbtn ? <Home/> : <GPTSearch/>}</button>
            </div>
            }
            </div>
            {user && <div className='absolute top-0 right-0 md:my-4 my-4 font-bold  md:mr-10 mr-2 md:text-lg text-sm flex ml-5'>
                <img
                    className='md:w-12 p-2  w-10'
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