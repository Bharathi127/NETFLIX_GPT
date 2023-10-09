import { createSlice } from "@reduxjs/toolkit"
const initialState={
    movieDB:[],
    movieName:[]
}
const openaiSlice= createSlice({
    name:"recomm",
    initialState,
    reducers:{
        addMoviesDataFromAI:(state,action)=>{
            const {getData,tmdbData}=action.payload
            return{
                ...state,
                movieDB:tmdbData,
                movieName:getData
            }
        },
        removeMoviesDataFromAI:(state,action)=>{
           
            return{
                ...state,
                movieDB:[],
                movieName:[]
            }
        }
        
    }
})

export const {addMoviesDataFromAI, removeMoviesDataFromAI}= openaiSlice.actions

export default  openaiSlice.reducer