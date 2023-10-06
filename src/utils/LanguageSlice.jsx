import { createSlice } from "@reduxjs/toolkit";
const initialState={
    language:"English"
}
const languageSlice=createSlice({
    name:"lang",
    initialState,
    reducers:{
        changeLang:(state,action)=>{
            state.language=action.payload
        }
    }
})

export const {changeLang}=languageSlice.actions

export default languageSlice.reducer