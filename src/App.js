import React from 'react'
import Login from './components/Login'
import Browse from './components/Browse'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/browse' element={<Browse/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App