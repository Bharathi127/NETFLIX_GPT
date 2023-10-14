import { useDispatch,useSelector } from "react-redux";
import { OPTIONS } from "../utils/Constants";
import { addNowplayingMovies ,addNowPopularMovies,MainTrailer,addNowTopRatedMovies} from "../utils/MoviesSlice";
import { useEffect } from "react";

function useFetchingData(){

    const dispatch=useDispatch()
    const { nowPlayingMovies } = useSelector(state => state.movie)
  
    const getNewMoviesData = async() => {
   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
     const json=await data.json();
     //console.log("now",json.results)
     dispatch(addNowplayingMovies(json.results))
  }
  useEffect(()=>{
     !nowPlayingMovies && getNewMoviesData()
  },[])
}

function useFecthingTrailer(id){
    // console.log(id)
    const dispatch=useDispatch()
    const getTrailer=async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",OPTIONS)
        const json=await data.json();
        //  console.log(json.results)
        dispatch(MainTrailer(json.results))
    }
    useEffect(()=>{
        getTrailer()
    },[])
}

function useNowPopularMovies(){
    const dispatch=useDispatch()
    const { nowPopularMovies } = useSelector(state => state.movie)
    const getPopular=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular',OPTIONS)
        const json=await data.json()
        //console.log("popular",json.results)
        dispatch(addNowPopularMovies(json.results))
    }
    useEffect(()=>{
        !nowPopularMovies && getPopular()
     },[])
}

function useTopRatedMovies(){
    const dispatch=useDispatch()
    const { nowTopRatedMovies } = useSelector(state => state.movie)
    const getTopRated=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/top_rated',OPTIONS)
        const json=await data.json()
        //console.log("toprated",json.results)
         dispatch(addNowTopRatedMovies(json.results))
    }
    useEffect(()=>{
       !nowTopRatedMovies && getTopRated()
     },[])
}

const CustomHooks={
    useFetchingData,
    useFecthingTrailer,
    useNowPopularMovies,
    useTopRatedMovies
}
export default CustomHooks