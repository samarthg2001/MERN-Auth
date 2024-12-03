import React from 'react'
import { Link } from 'react-router'
import "../SignUp/SignUP-module.css"
function SignUp() {
  return (
    <div className='sign-up'>
        <div className='sign-up-main'>
        <h1> SignUp</h1>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="text" />
        <label htmlFor=""> Password</label>
        <input type="password" />
        <button> SignUp</button>
        <p> ALready have an account ? 
          <Link to='/'>LOG-IN</Link>
          </p>
        
        </div>
      
    </div>
  )
}

export default SignUp
