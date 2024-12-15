import React from 'react'
import { Link } from 'react-router'
import "../Log/Login-module.css"
import { useState } from 'react'




function LogIn() {
  const [input ,setinput]=useState({
    email:"",
    password:"",
  })
  const change=(e)=>{
    const {name,value}=e.target;
    setinput({...input,[name]:value})
  }
  const submit=()=>{
    try {
      console.log(input);
      setinput({
        email:"",
        password:"",
      })

    } catch (error) {
      console.log("this is log in error :-",error);
    }

  }


  return (
    <div className='Log-In'>
      <div className='main'>
        <h1>Login</h1>
        <label htmlFor="" >Email</label><br />
        <input onChange={change}  value={input.email} name="email"  type="text"  placeholder='Enter the email'/><br />
        <label htmlFor="">Password</label><br />
        <input onChange={change} value={input.password} name="password" type="password"  placeholder='Enter the password'/><br />
        <button className='Log-in-btn' onClick={submit}> Login</button>
        <p> Don't havae an account ? <Link to="/SignUp">Sign-up</Link> </p>
      </div>
    </div>
  )
}

export default LogIn
