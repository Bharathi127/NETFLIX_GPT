import { createSlice } from "@reduxjs/toolkit";

const searchtoggleSlice=createSlice({
    name:"search",
    initialState:{
        showSearchbtn:false,
        cardbtn:false
    },
    reducers:{
        ClickonBtn:(state,action)=>{
            state.showSearchbtn=!state.showSearchbtn
        },
        cardBtn:(state,action)=>{
           state.cardbtn=!state.cardbtn
        }
    }
})
export const {ClickonBtn,cardBtn}=searchtoggleSlice.actions

export default searchtoggleSlice.reducer