import React, { useEffect } from 'react'
import CustomHooks from '../hooks/useFetchingData'
import { useSelector } from 'react-redux'
const VideoTrailer = ({ id }) => {

 console.log(id)

  CustomHooks.useFecthingTrailer(id)
  
  const data = useSelector(state => state.movie?.nowPlayingTrailer)
  if(data===null) return null
  console.log(data)
 
  const filterdata = data.filter((ele) => ele.type === "Trailer")
  console.log(filterdata)
  const fetchfirstTrailer=filterdata?filterdata[0]:data[0]
  if(fetchfirstTrailer===undefined) return null
  console.log(fetchfirstTrailer)
  
  return (
    
    <div className='w-screen' id="video">
      {data &&
      <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+fetchfirstTrailer.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
      </iframe>
      
      }
    </div>
    
  )
}

export default VideoTrailer