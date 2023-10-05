import {configureStore} from '@reduxjs/toolkit'
import userReducer from './utils/UserSlice'
import movieReducer from './utils/MoviesSlice'
const store=configureStore({
    reducer:{
      user:userReducer,
      movie:movieReducer,
    
    }
})
export default store