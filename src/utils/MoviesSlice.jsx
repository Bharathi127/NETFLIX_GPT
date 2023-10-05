import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null
    },
   reducers:{
      addNowplayingMovies:(state,action)=>{
      state.nowPlayingMovies=action.payload
      },
      MainTrailer:(state,action)=>{
        state.nowPlayingTrailer=action.payload
      }
   }
})


export const {addNowplayingMovies,MainTrailer}=movieSlice.actions
export default movieSlice.reducer
