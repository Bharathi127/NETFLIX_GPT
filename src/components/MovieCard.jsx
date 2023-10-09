import React from 'react'
import { IMGURL } from '../utils/Constants'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {cardBtn} from '../utils/SearchToggleSlice'
const MovieCard = ({id, moviepath }) => {
    const dispatch=useDispatch()
    if(!moviepath) return null

    const changeEvent=()=>{
        dispatch(cardBtn())
    }
    return (
        <div className=' pr-4 w-44 '>
            <Link to={`/movie/${id}`}>
            <img src={IMGURL + moviepath} alt="trending" onClick={changeEvent} />
            </Link>
        </div>
    )
}

export default MovieCard