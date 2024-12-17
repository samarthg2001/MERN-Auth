import React from 'react'
import { Link, useNavigate } from 'react-router'
import "../Log/Login-module.css"
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user from '../../../../server/Models/User-Model'
const LogIn =  ()=> {
  
const history=useNavigate();
  const [input ,setinput]=useState({
    email:"",
    password:"",
  })
  const change=(e)=>{
    const {name,value}=e.target;
    setinput({...input,[name]:value})
  }
  const submit=async()=>{
    try {
      console.log(input);
      const res= await axios.post("http://localhost:8123/auth/login",input)
      console.log(res);
      const {data : {jwtToken,message,success,Username}}=res;
      
      localStorage.setItem('token',jwtToken);
      localStorage.setItem('loggedInUser',Username)      
      setinput({
        email:"",
        password:"",
      })
      
      history("/Home")

    } catch (error) {
      console.log(error);
      if(error.status==403||error.status==400){
        const mes=error.response.data.message;  
        toast.error(mes,{autoClose:1500})    
      }
      console.log("this is log in error :-",error.response.data.error.details[0].message);
      const mes=error.response.data.error.details[0].message;
      toast.error(mes,{autoClose:1500})

    }

  }


  return (
    <div className='Log-In'>
      <div className='main'>
        <ToastContainer />
        <h1>Login</h1>
        <label htmlFor="" >Email</label><br />
        <input onChange={change}  value={input.email} name="email"  type="text"  placeholder='Enter the email'/><br />
        <label htmlFor="">Password</label><br />
        <input onChange={change} value={input.password} name="password" type="password"  placeholder='Enter the password'/><br />
        <button className='Log-in-btn' onClick={submit} >Login</button>
        <p> Don't havae an account ? <Link to="/SignUp">Sign-up</Link> </p>
      </div>
    </div>
  )
}

export default LogIn
