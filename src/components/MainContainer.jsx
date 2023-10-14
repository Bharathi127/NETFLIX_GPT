import React from 'react'
import VideoTrailer from './VideoTrailer'
import VideoTitle from './VideoTitle'
import { useSelector} from 'react-redux'
import TrailerNotFound from './TrailerNotFound'

const MainContainer = () => {
    const movies=useSelector((state)=>state.movie?.nowPlayingMovies)
    if(movies===null) return;
  
    const mainmovie=movies[0]
    const {original_title,overview,id}=mainmovie
  return (
    <div className='md:pt-0 pt-28 bg-black'>
     
    <VideoTitle original_title={original_title} overview={overview}/>
  
    <VideoTrailer id={id}/>
 
  
    </div>
  )
}

export default MainContainer