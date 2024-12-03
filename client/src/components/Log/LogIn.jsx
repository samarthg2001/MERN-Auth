import React from 'react'
import { Link } from 'react-router'
function LogIn() {
  return (
    <div className='Log-In'>
      <div className='main'>
        <h1>Login</h1>
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button className='Log-in-btn'> Login</button>
        <p> Don't havae an account ? <Link to="/SignUp">Sign-up</Link> </p>
      </div>
    </div>
  )
}

export default LogIn
