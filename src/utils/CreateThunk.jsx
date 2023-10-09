import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OPTIONS } from "./Constants";

const initialState = {
    upcomingMovies: [],
    loading: false,
    errorMessage: null
}

export const getUpcoming = createAsyncThunk('upcoming/getUpcoming', async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',OPTIONS)
    const json = await data.json()
    //console.log(json.results)
     return{res:json.results}
})

const upComingslice = createSlice({
    name: "upcomingMovies",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getUpcoming.fulfilled, (state, action) => {
            return {
                ...state,
                upcomingMovies: action.payload.res,
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
                errorMessage: "Try again"
            }



        })
    }
})

export default upComingslice.reducer;