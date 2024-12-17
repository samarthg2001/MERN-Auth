import { useState } from 'react'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/Log/LogIn'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom';
import {Refreshander} from './components/Refreshander';
import './App.css'

function App() {
  const [isAuthenticated,setisAuthenticated]=useState(false);
const PrivateRoute=({element})=>{
return isAuthenticated ?  element : <Navigate to='/login' />
}
  return (
      <>
      <Refreshander setisAuthenticated={setisAuthenticated}/>
      <Router>
        <Routes>
          <Route path='/Home' element={ <PrivateRoute element={<Home/>} />}/>
          <Route path='/' element={<LogIn />}/>
          <Route path='/SignUp' element={<SignUp />}/>

        </Routes>
        </Router>

    </>
  )
}

export default App
