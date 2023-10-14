import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SearchRecomandations = () => {
  const { movieName, movieDB } = useSelector(state => state.openai)
  if (!movieName) return null

  return (
    <div>
      {movieName.length>0 &&
        <div className='bg-black mt-10 mx-12 text-lg text-white p-6 bg-opacity-90'>
         {movieName.map((name,index)=><MovieList  key={name.id} title={name} movies={movieDB[index]}/>)}


        </div>
      }
    </div>
  )
}

export default SearchRecomandations