import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OPTIONS } from "./Constants";

const initialState = {
    upcomingMovies: [],
    loading: false,
    errorMessage: null
}

// export const getUpcoming = createAsyncThunk('upcoming/getUpcoming', async () => {
//     try{
//     const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',OPTIONS)
//     const json = await data.json()
//     console.log(json.results)
//      return{res:json.results}
//     }
//     catch(error){
//         if(!error.res){
//             throw new Error("Network response not found")
//         }
//     }
// })
export const getUpcoming = createAsyncThunk('upcoming/getUpcoming', async () => {
    try {
        console.log(process.env.REACT_APP_MOVIES_APIKEY)
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', OPTIONS);
        console.log(data)
        if (!data.ok) {
           throw new Error("Data not foud") 
        }
        const json = await data.json();
        return { response: json.results };
    } catch (error) {
       throw error;
    }
})


const upComingslice = createSlice({
    name: "upcomingMovies",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getUpcoming.fulfilled, (state, action) => {
            return {
                ...state,
                upcomingMovies: action.payload.response,
                loading: false,
                errorMessage: null
            }
        })
        builder.addCase(getUpcoming.pending, (state, action) => {
            return {
                ...state,
                loading: true,

            }
        })
        builder.addCase(getUpcoming.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                errorMessage: action.error.message

            }


        })
    }
})

export default upComingslice.reducer;