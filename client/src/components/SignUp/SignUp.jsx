import React from 'react'
import { Link } from 'react-router'
import "../SignUp/SignUP-module.css"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
const [input ,setinput]=useState({name:"",email:"",password:""})
const [pass,setpass]=useState("");
const [repass,setrepass]=useState("");
const change=(e)=>{
const {name,value}=e.target;
setinput({...input,[name]:value})
}
const createpass=()=>{
  console.log(pass,repass);
  if(pass===repass){
    setinput(input=>({...input,password :repass}))
    console.log(input);
    console.log("password inserted",pass);
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
  setinput({name:"",email:"",})
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
        <label htmlFor="" >Create Password</label>
        <input type="password"  onChange={(e)=>setpass(e.target.value)} name="pass" value={pass}/>
        <label htmlFor="" > Password</label>
        <input type="password"  onChange={(e)=>setrepass(e.target.value)}  name="re-password" value={repass}/>
        <button onClick={submit}  type ='submit'> SignUp</button>
        <p> ALready have an account ? 
          <Link to='/'>LOG-IN</Link>
          </p>
        
        </div>
      
    </div>
  )
}

export default SignUp
