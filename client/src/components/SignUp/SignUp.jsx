import React from 'react'
import { Link } from 'react-router'
import "../SignUp/SignUP-module.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
function SignUp() {
const [input ,setinput]=useState({
  name:"",
  email:"",
  password:""
})
const [pass,setpass]=useState();
const [repass,setrepass]=useState();
const change=(e)=>{
const {name,value}=e.target;
setinput({...input,[name]:value})
}
const passwordCreation=()=>{
 setpass(e.target) 
}


const createpass=()=>{
  console.log(pass,repass);
  if(pass==repass){
    setinput(input=>({...input,password:pass}))
    console.log();
  }
  else{
    toast.error("password must be same ",{autoClose:1500})
    setpass("");
    setrepass("")
  }
}



const submit=(e)=>{
    e.preventDefault();
try {
  createpass();
  console.log(input);  
  setinput({
    name:"",
    email:"",
    password:""
  })


} catch (error) {
  const {err}=error
  console.log();
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
        <label htmlFor="" >Create Password</label>
        <input type="password"  onChange={(e)=>{setpass(e.target.value)}} name="password"/>
        <label htmlFor="" > Password</label>
        <input type="password"  onChange={(e)=>{setrepass(e.target.value)}}  name="re-password"/>
        <button onClick={submit} > SignUp</button>
        <p> ALready have an account ? 
          <Link to='/'>LOG-IN</Link>
          </p>
        
        </div>
      
    </div>
  )
}

export default SignUp
