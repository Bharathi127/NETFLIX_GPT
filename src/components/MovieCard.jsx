import React from 'react'
import { IMGURL } from '../utils/Constants'

const MovieCard = ({id, moviepath }) => {
    return (
        <div className=' pr-4 w-44'>

            <img src={IMGURL + moviepath} alt="trending" />
        </div>
    )
}

export default MovieCard