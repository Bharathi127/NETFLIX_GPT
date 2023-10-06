import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
        nowPopularMovies:null,
        nowTopRatedMovies:null
    },
   reducers:{
      addNowplayingMovies:(state,action)=>{
      state.nowPlayingMovies=action.payload
      },
      MainTrailer:(state,action)=>{
        state.nowPlayingTrailer=action.payload
      },
      addNowPopularMovies:(state,action)=>{
          state.nowPopularMovies=action.payload
      },
      addNowTopRatedMovies:(state,action)=>{
        state.nowTopRatedMovies=action.payload
      }

   }
})


export const {addNowplayingMovies,MainTrailer,addNowPopularMovies,addNowTopRatedMovies}=movieSlice.actions
export default movieSlice.reducer
