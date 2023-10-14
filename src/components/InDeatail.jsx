/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import CustomHooks from '../hooks/useFetchingData'
import VideoTrailer from './VideoTrailer'
import VideoTitle from './VideoTitle'
import LogoHeader from './LogoHeader'
import TotalInformation from './TotalInformation'
import TrailerNotFound from './TrailerNotFound'
const InDeatail = () => {
   // CustomHooks.useFetchingData()
   const [data, setData] = useState('')
   const { id } = useParams()
   //console.log(id)
   const { nowPlayingMovies } = useSelector(state => state.movie)
   const { nowPopularMovies } = useSelector(state => state.movie)
   const { nowTopRatedMovies } = useSelector(state => state.movie)
   const { upcomingMovies } = useSelector(state => state.upcomingmovie)
   const { movieDB } = useSelector(state => state.openai)

   console.log(nowPlayingMovies)
   console.log(nowPopularMovies)

   useEffect(() => {
      if (nowPlayingMovies === null) return;
      else {
         {
            nowPlayingMovies.map(movie => {
               if (movie.id === parseInt(id)) {
                  //console.log(movie)
                  setData(movie)
               }
            })
         }
      }

   }, [])
   useEffect(() => {
      if (nowPopularMovies === null) return
      else {
         {
            nowPopularMovies.map(movie => {
               if (movie.id === parseInt(id)) {
                  //console.log(movie)
                  setData(movie)
               }
            })
         }
      }

   }, [])
   useEffect(() => {
      if (nowTopRatedMovies === null) return;
      else {
         {
            nowTopRatedMovies.map(movie => {
               if (movie.id === parseInt(id)) {
                  //console.log(movie)
                  setData(movie)
               }
            })
         }
      }

   }, [])
   useEffect(() => {
      if (!upcomingMovies) {
         return
      }
      else {
         {
            upcomingMovies.map(movie => {
               if (movie.id === parseInt(id)) {
                  //console.log(movie)
                  setData(movie)
               }
            })
         }
      }

   }, [])
   useEffect(() => {
      if (movieDB.length < 0) {
         return null
      }
      else {
         {
            movieDB.map(movie => {
               movie.map(movie1 => {
                  if (movie1.id === parseInt(id)) {
                     //console.log(movie)
                     setData(movie1)
                     console.log(movie1)
                  }
               })
            })
         }
      }

   }, [])

   console.log(data)
   return (
      <div>

         {data &&
            <div>
               <h2 className='text-white absolute p-4 z-10 hover:underline cursor-pointer'>
                  <Link to={'/browse'}>
                     🔙Back to home page
                  </Link>
               </h2>

               <VideoTitle original_title={data.original_title} overview={data.overview} />
              
               <VideoTrailer id={data.id} />
               <TotalInformation
                  original_language={data.original_language}
                  original_title={data.original_title}
                  popularity={data.popularity}
                  release_date={data.release_date}
                  title={data.title}
                  rating={data.vote_average}
                  moviepath={data.poster_path}
                  id={data.id} />
            </div>
         }
      </div>
   )
}

export default InDeatail