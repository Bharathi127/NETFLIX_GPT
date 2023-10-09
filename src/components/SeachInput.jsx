import React, { useEffect } from 'react'
import { OPTIONS, lang } from '../utils/Constants'
import { useSelector,useDispatch } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/Openai'
import {addMoviesDataFromAI} from '../utils/FetchingDataFromAI'
const SeachInput = (movie) => {
    const searchInput = useRef(null)
    const { language } = useSelector(state => state.lang)
    const dispatch=useDispatch()

    
    const searchData=async(movie)=>{
        const data=await fetch('https://api.themoviedb.org/3/search/movie?query='
        +movie+
        '&include_adult=false&language=en-US&page=1',OPTIONS)
      

        const json=await data.json();
        return json.results
    }

    const dataSubmited = async (e) => {
        e.preventDefault()
        //console.log(searchInput.current.value)
        
        const Query =
        "Act as a Movie Recommendation system and suggest some movies exactly for the given query : " +
        searchInput.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        // "Give me exact movie for given query"+searchInput.current.value
        const data=await openai.chat.completions.create({
            messages: [{ role: 'user', content:Query}],
            model: 'gpt-3.5-turbo',
          });
        const getData=data.choices?.[0]?.message?.content.split(",")
        //console.log(getData)
         const moviesdataGetFromAPI=getData.map((movie)=>searchData(movie))
        
         const tmdbData= await Promise.all(moviesdataGetFromAPI)
         //console.log(tmdbData)
         dispatch(addMoviesDataFromAI({getData:getData,tmdbData:tmdbData}))
         
        }
       
    return (
        <div>
            <div className='pt-[7%] flex justify-center '>

                <form className='bg-black w-1/2 grid grid-cols-12 p-2 h-18 ' onSubmit={dataSubmited} >
                    <input type='text'
                        ref={searchInput}
                        className='col-span-9 rounded-lg p-1 text-lg'
                        placeholder={lang[language]?.placeholderdata}
                        autoFocus>
                    </input>
                    <button className='bg-red-600 col-span-3 ml-3 rounded-lg hover:bg-orange-600 text-lg text-white'>
                        {lang[language]?.identity}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SeachInput