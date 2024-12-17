import React from 'react'
import "../home/Home-module.css"
import {  data, useNavigate } from 'react-router'
import { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import axios from 'axios'

function Home() {

const navigate=useNavigate()
  const [loggedInUser,setLoggedInUser]=useState('')
  const [product,setproduct]=useState([])
  useEffect(()=>{
    const user=localStorage.getItem('loggedInUser');
  
    setLoggedInUser(localStorage.getItem('loggedInUser'))
    toast.success(`welcome ${user} `,{autoClose:1000})
    fetchProduct()
  },[])
  

  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser')
    toast.success((`${loggedInUser} is logged out `),{autoClose:2000})
    setTimeout(() => {
      navigate('/')
    }, 1000);
  }

  const fetchProduct= async ()=>{
    try {
      const header={
        headers:{
          'Authorization':localStorage.getItem('token')}
      }
      console.log(header);
      const res= await axios.get('http://localhost:8123/products/',header)
      const data=res.data;
      console.log(res);
      console.log("this is data",data);
      setproduct(data)
      console.log(data);
    } catch (error) {
      console.log('this is fetch product ',error);
    }
  }


  return (
    <div className='Home-main'>

<h1>      {loggedInUser} </h1>    
   <button onClick={logout}> logout</button>
    {
      product && product.map((items,index)=>(
        <ul key={index}>
            <span>{items.name}</span> <br />
          <span>{items.price}</span>
        </ul>
      ))
    }

      <ToastContainer />

    </div>
  )
}

export default Home
