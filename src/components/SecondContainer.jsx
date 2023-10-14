import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import CustomHooks from '../hooks/useFetchingData'
import { getUpcoming } from '../utils/CreateThunk'
import { useDispatch } from 'react-redux'
const SecondContainer = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
     dispatch(getUpcoming())
  },[])
  CustomHooks.useNowPopularMovies()
  CustomHooks.useTopRatedMovies()
  
  //console.log(value)
  const movies=useSelector(state=>state.movie?.nowPlayingMovies)
  const popular=useSelector(state=>state.movie?.nowPopularMovies)
  const topRated=useSelector(state=>state.movie?.nowTopRatedMovies)
  const upcoming=useSelector(state=>state.upcomingmovie?.upcomingMovies)
  //console.log("upcoming",upcoming)
  if(!movies)return;
  if(!popular)return;
  if(!topRated)return;
  if(!upcoming)return
  
  
  return (
   
    <div className='bg-black'>
      <div className='md:-mt-48 relative z-20'>
      <MovieList movies={movies} title={"Now Trending Movies"}/>
      <MovieList movies={popular} title={"Popular Movies"}/>
      <MovieList movies={topRated} title={"Top Rated Movies"}/>
      <MovieList movies={upcoming} title={"Upcoming Movies"}/>
      {/* <MovieList movies={movies} title={"Now Playing"}/> */}
      </div>
    </div>
 
  )
}

export default SecondContainer