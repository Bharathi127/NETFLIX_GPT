import { useDispatch,useSelector } from "react-redux";
import { OPTIONS } from "../utils/Constants";
import { addNowplayingMovies ,addNowPopularMovies,MainTrailer,addNowTopRatedMovies} from "../utils/MoviesSlice";
import { useEffect } from "react";
function useFetchingData(){
    const dispatch=useDispatch()
  const getNewMoviesData = async() => {
   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
     const json=await data.json();
     console.log("now",json.results)
     dispatch(addNowplayingMovies(json.results))
  }
  useEffect(()=>{
     getNewMoviesData()
  },[])
}

function useFecthingTrailer(id){
    const dispatch=useDispatch()
    const getTrailer=async()=>{
        const data= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,OPTIONS)
        const json=await data.json();
         console.log(json.results)
        dispatch(MainTrailer(json.results))
    }
    useEffect(()=>{
        getTrailer()
    },[])
}

function useNowPopularMovies(){
    const dispatch=useDispatch()
    const getPopular=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular',OPTIONS)
        const json=await data.json()
        console.log("popular",json.results)
        dispatch(addNowPopularMovies(json.results))
    }
    useEffect(()=>{
        getPopular()
     },[])
}

function useTopRatedMovies(){
    const dispatch=useDispatch()
    const getTopRated=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated',OPTIONS)
        const json=await data.json()
        console.log("toprated",json.results)
         dispatch(addNowTopRatedMovies(json.results))
    }
    useEffect(()=>{
        getTopRated()
     },[])
}

const CustomHooks={
    useFetchingData,
    useFecthingTrailer,
    useNowPopularMovies,
    useTopRatedMovies
}
export default CustomHooks