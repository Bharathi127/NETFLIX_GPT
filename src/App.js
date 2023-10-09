import React from 'react'
import Login from './components/Login'
import Browse from './components/Browse'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import LogoHeader from './components/LogoHeader'
import InDeatail from './components/InDeatail'
import { useSelector } from 'react-redux'
const App = () => {
  const {nowPlayingMovies}=useSelector(state=>state.movie)
return (
    <div className=''>
     <BrowserRouter>
      {/* <LogoHeader/> */}
      <Routes>
      <Route path='/' element={<Login/>}></Route>
       <Route path='/browse' element={<Browse/>}></Route>
       <Route path='/movie/:id' element={<InDeatail/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App