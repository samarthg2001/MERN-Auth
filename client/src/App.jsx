import { useState } from 'react'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/Log/LogIn'
import Home from './components/home/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


import './App.css'

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/' element={<LogIn />}/>
          <Route path='/SignUp' element={<SignUp />}/>

        </Routes>
        </Router>

    </>
  )
}

export default App
