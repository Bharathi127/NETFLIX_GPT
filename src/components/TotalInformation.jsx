import React from 'react'
import MovieCard from './MovieCard'
import { useState } from 'react'

const TotalInformation = ({id,moviepath,original_language,original_title,popularity,release_date,title,rating}) => {
  const[rate,setRate]=useState('')
  const ratingMovie=()=>{
  if(rating>=8){
   return ("⭐⭐⭐⭐⭐")
  }
  else if(rating<8){
    return("⭐⭐⭐⭐")
  }}
  const rm=ratingMovie()
  return (
    <div className='bg-black text-white md:text-lg  text-sm flex  p-20 md:pl-96 pl-20'>
        <div className=''>
          <MovieCard id={id} moviepath={moviepath}/>
        </div>
    <div className='md:ml-10 ml-4 md:mr-0 mr-2'>
        <h2>Original Language: {original_language}</h2>
        <h2>Original Title: {original_title}</h2>
        <h2>Popularity: {popularity}</h2>
        <h2>Release Data: {release_date}</h2>
        <h2>Title: {title}</h2>
        <h2>Rating: {rating}{rm}</h2>

    </div>
    </div>
  )
}

export default TotalInformation