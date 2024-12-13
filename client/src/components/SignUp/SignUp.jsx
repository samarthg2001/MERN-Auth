import React from 'react'
import { Link } from 'react-router'
import "../SignUp/SignUP-module.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from axios;
function SignUp() {
const [input ,setinput]=useState({name:"",email:"",password:""})

const change=(e)=>{
const {name,value}=e.target;
setinput({...input,[name]:value})
}

const submit= async (e)=>{
    e.preventDefault();
try {
  console.log(input);
  const res= await axios.post()
  setinput({name:"",email:"",  password:""})

} catch (error) {

  console.log(error);
  setinput({
    name:"",
    email:"",
    password:""
  })
}}

  return (
    <div className='sign-up'>
        <ToastContainer /> 
        <div className='sign-up-main'>
        <h1> SignUp</h1>
        <label htmlFor="">Name</label>
        <input type="text"  onChange={change} value={input.name} name="name"/>
        <label htmlFor="" >Email</label>
        <input type="text"  onChange={change} value={input.email} name="email"/>
        <label htmlFor="" >Create and insert  Password</label>
        <input type="password"  onChange={change} name="password" value={input.password}/>
       
        <button onClick={submit}  type ='submit'> SignUp</button>
        <p> ALready have an account ? 
          <Link to='/'>LOG-IN</Link>
          </p>
        
        </div>
      
    </div>
  )
}

export default SignUp
