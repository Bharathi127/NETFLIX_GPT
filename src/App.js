import React from 'react'
import Login from './components/Login'
import Browse from './components/Browse'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import LogoHeader from './components/LogoHeader'
import InDeatail from './components/InDeatail'
import { useSelector } from 'react-redux'
import MoreInfo from './components/MoreInfo'
const App = () => {
  
return (
    <div className=''>
     <BrowserRouter>
   
      <Routes>
      <Route path='/' element={<Login/>}></Route>
       <Route path='/browse' element={<Browse/>}></Route>
       <Route path='/movie/:id' element={<InDeatail/>}></Route>
       <Route path='/moreinfo' element={<MoreInfo/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App