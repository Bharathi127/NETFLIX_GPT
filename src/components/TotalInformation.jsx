import React from 'react'
import MovieCard from './MovieCard'

const TotalInformation = ({id,moviepath,original_language,original_title,popularity,release_date,title,rating}) => {
  return (
    <div className='bg-black text-white text-lg flex  p-20 pl-96'>
        <div className=''>
          <MovieCard id={id} moviepath={moviepath}/>
        </div>
    <div className='ml-10'>
        <h2>Original Language: {original_language}</h2>
        <h2>Original Title: {original_title}</h2>
        <h2>Popularity: {popularity}</h2>
        <h2>Release Data: {release_date}</h2>
        <h2>Title: {title}</h2>
        <h2>Rating: {rating}⭐⭐⭐⭐⭐</h2>

    </div>
    </div>
  )
}

export default TotalInformation