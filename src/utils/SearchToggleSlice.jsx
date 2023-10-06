import { createSlice } from "@reduxjs/toolkit";

const searchtoggleSlice=createSlice({
    name:"search",
    initialState:{
        showSearchbtn:false
    },
    reducers:{
        ClickonBtn:(state,action)=>{
            state.showSearchbtn=!state.showSearchbtn
        }
    }
})
export const {ClickonBtn}=searchtoggleSlice.actions

export default searchtoggleSlice.reducer