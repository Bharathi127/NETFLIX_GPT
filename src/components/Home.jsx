import React from 'react'
import { useDispatch } from 'react-redux'
import {removeMoviesDataFromAI} from '../utils/FetchingDataFromAI'
const Home = () => {
    const dispatch=useDispatch()
    const dataRemoved=()=>{
       dispatch(removeMoviesDataFromAI())
    }
    return (
        <div className='text-sm ' onClick={dataRemoved}>Home</div>
    )
}

export default Home