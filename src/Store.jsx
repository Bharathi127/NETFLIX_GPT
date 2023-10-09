import {configureStore} from '@reduxjs/toolkit'
import userReducer from './utils/UserSlice'
import movieReducer from './utils/MoviesSlice'
import laterReducer from './utils/CreateThunk'
import btnClcikReducer from './utils/SearchToggleSlice'
import languageReducer from './utils/LanguageSlice'
import openaiReducer from './utils/FetchingDataFromAI'
const store=configureStore({
    reducer:{
      user:userReducer,
      movie:movieReducer,
      upcomingmovie:laterReducer,
      button:btnClcikReducer,
      lang:languageReducer,
      openai:openaiReducer
    }
})
export default store