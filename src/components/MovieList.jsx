import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ title, movies }) => {
    return (
        <div className='pt-10 ml-4'>
            <h2 className='text-3xl mb-3  text-white'>{title}</h2>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                  <div className='flex'>
                    {movies.map(card =>
                        <div key={card.id}>
                        <MovieCard moviepath={card.poster_path} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList