import { useDispatch,useSelector } from "react-redux";
import { OPTIONS } from "../utils/Constants";
import { addNowplayingMovies ,MainTrailer} from "../utils/MoviesSlice";
import { useEffect } from "react";
function useFetchingData(){
    const dispatch=useDispatch()
  const getNewMoviesData = async() => {
   const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
     const json=await data.json();
     console.log(json.results)
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
const CustomHooks={
    useFetchingData,
    useFecthingTrailer
}
export default CustomHooks