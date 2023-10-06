// import React,{useEffect} from 'react'
// import Login from './Login'
// import Browse from './Browse'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import {onAuthStateChanged } from "firebase/auth";
// import { auth } from '../utils/Firebase';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
// import { adduser,removeUser } from '../utils/UserSlice';
// const Body = () => {
//     const dispatch=useDispatch()
//     useEffect(()=>{
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//              const {uid,email,displayName} = user;
//              dispatch(adduser({uid:uid,email:email,displayName:displayName}))
            
//             } else {
//               dispatch(removeUser())
//             }
//           });
//     },[])
    

//   return (
//     <div>
     
//     </div>
//   )
// }

// export default Body