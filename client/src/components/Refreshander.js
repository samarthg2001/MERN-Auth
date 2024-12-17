import React from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router'

function Refreshander({setisAuthenticated}) {
  const location=useLocation();
    const navigate=useNavigate();
    useEffect(()=>{
if(localStorage.getItem('token')){
    setisAuthenticated(true)
    if(location.pathname==='/'||
    location.pathname==='/'||
    location.pathname==='/'){
        navigate('/Home',{replace:false})
    }
}

    },[])
    return (
null  )
}

export default Refreshander
