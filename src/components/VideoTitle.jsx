import React from 'react'

const VideoTitle = ({ original_title, overview }) => {

    return (
        <div className='absolute w-screen aspect-video pt-[20%] px-12 bg-gradient-to-r from-black text-white' id="title">
            <h2 className='text-3xl font-bold'>{original_title}</h2>
            <p className='text-lg w-1/4 mt-4'>{overview}</p>
            <div className='flex mt-4'>
                <button className='bg-white text-black  hover:bg-gray-400 p-1 px-6 text-lg font-bold rounded-lg flex'>
                    <span className=''>
                        <img className='w-8 pt-1'
                            src="https://th.bing.com/th/id/R.4bfecfc42b20364866d2f3edef19406a?rik=X3jH7nGMhm1PFQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fBlack-Play-Button-PNG-Free-Download.png&ehk=%2fxuFasbb0kC72EKvmAMDt1lHxxYVaFNX6oasdTKWuHw%3d&risl=&pid=ImgRaw&r=0" />
                    </span>
                    <span className='pt-1'>Play</span>
                </button>
                <button className='bg-gray-500 bg-opacity-50 hover:bg-opacity-70 p-1 px-4 text-lg rounded-lg flex ml-4 pt-2'>
                    <span>
                    <img  className='w-6 pt-1'
                     src="https://openclipart.org/image/2400px/svg_to_png/274087/1488160614.png"/></span>
                    <span className='ml-1'>MoreInfo</span>
                    
                </button>
            </div>
        </div>
    )
}

export default VideoTitle