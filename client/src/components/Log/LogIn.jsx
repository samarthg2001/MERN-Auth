import React from 'react'
import { Link } from 'react-router'
import "../Log/Login-module.css"
function LogIn() {
  return (
    <div className='Log-In'>
      <div className='main'>
        <h1>Login</h1>
        <label htmlFor="">Email</label><br />
        <input type="text"  placeholder='Enter the email'/><br />
        <label htmlFor="">Password</label><br />
        <input type="password"  placeholder='Enter the password'/><br />
        <button className='Log-in-btn'> Login</button>
        <p> Don't havae an account ? <Link to="/SignUp">Sign-up</Link> </p>
      </div>
    </div>
  )
}

export default LogIn
