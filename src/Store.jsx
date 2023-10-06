import {configureStore} from '@reduxjs/toolkit'
import userReducer from './utils/UserSlice'
import movieReducer from './utils/MoviesSlice'
import laterReducer from './utils/CreateThunk'
const store=configureStore({
    reducer:{
      user:userReducer,
      movie:movieReducer,
      upcomingmovie:laterReducer
    }
})
export default store