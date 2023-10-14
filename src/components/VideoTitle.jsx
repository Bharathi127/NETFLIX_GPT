import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const VideoTitle = ({ original_title, overview }) => {
    // const [newdata, setNewData] = useState([])
    const { nowPlayingTrailer } = useSelector(state => state.movie)
    if(!nowPlayingTrailer)return;
    console.log(nowPlayingTrailer)
  
    const funcfiltereddata=()=>{
          if (nowPlayingTrailer) {
            console.log("jeknd")
            const trailerfilterdata = nowPlayingTrailer.filter((ele) => {
                if (ele.type === "Trailer") {
                    return ele
                }
    
            })
            // setNewData(trailerfilterdata)
            console.log(trailerfilterdata)
            return trailerfilterdata
    
        }
    }
    const fullfilldata=funcfiltereddata()
    console.log(fullfilldata)
    return (
        <div className={nowPlayingTrailer===null||fullfilldata.length>0?`absolute w-screen aspect-video pt-[18%] px-12 bg-gradient-to-r from-black text-white ` 
        : `w-screen aspect-video pt-[20%] px-12 bg-gradient-to-r from-black text-white `} id="title">
            <h2 className='md:text-3xl text-lg font-bold '>{original_title}</h2>
            <p className='text-lg w-1/4 mt-4 hidden md:inline-block'>{overview}</p>
            <div className='mt-3'>
                <button className='bg-white text-black  hover:bg-gray-400 py-1 px-4 text-lg font-bold rounded-lg hidden md:inline-block cursor-pointer'>
                    <div className='flex'>
                    <span className=''>
                        <img className='w-8 pt-1'
                            src="https://th.bing.com/th/id/R.4bfecfc42b20364866d2f3edef19406a?rik=X3jH7nGMhm1PFQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fBlack-Play-Button-PNG-Free-Download.png&ehk=%2fxuFasbb0kC72EKvmAMDt1lHxxYVaFNX6oasdTKWuHw%3d&risl=&pid=ImgRaw&r=0" alt=""/>
                    </span>
                    <span className='pt-1'>Play</span>
                    </div>
                </button>
                <button className='bg-gray-500 bg-opacity-50 hover:bg-opacity-70 py-1 px-3 text-lg rounded-lg ml-4 pt-2 hidden md:inline-block cursor-pointer'>
                    <div className='flex'>
                    <span>
                        <img className='w-6 pt-1'
                            src="https://openclipart.org/image/2400px/svg_to_png/274087/1488160614.png" alt="" /></span>
                    <span className='ml-1'>
                        <Link to={'/moreinfo'}>
                        MoreInfo
                        </Link>
                    </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle