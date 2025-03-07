import { useEffect } from "react";
import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar";

export default function Sample() {
  const main={
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"20px"
  }
  const forms={
    width:"50%",
    height:"80%",
    border:"1px solid black" , 
    padding:"20px"
  }
  const block1={
    display:"flex",
    justifyContent:"space-between",
    gap:"20px",
    alignItems:"center",
    margin:"20px",
  }

  const errorr={
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"start",
    gap:"5px",
  }
  const error={ 
    color: "red" , 
    marginTop:"5px",
    fontSize:"12px",
    maxWidth:"350px",
    overflowX: "hidden",
    whiteSpace: "nowrap", 
    display: "block", 
    textOverflow: "ellipsis",
  }
  const success={
    color:"green",
    marginTop:"5px",
    fontSize:"12px"
  }
  useEffect(() => {
    document.querySelector(".firstname").focus();
  }, []);

  const [errorMessage,setErrorMessage]=useState(null);
  const [errorMessageU,setErrorMessageU]=useState(null);
  const [errorMessageP, setErrorMessageP]=useState(null);

  const validateName=(e)=>{
    if(e.key>='0' && e.key<='9' || e.key==" "){
      e.preventDefault();
    }
  }
  const validateUser=(e)=>{
    let value=e.target.value;
    e.target.value=value.toUpperCase();
    if(value.length<8){
      setErrorMessageU("Min:8 characters");
    }
    else if(value.length>12){
      setErrorMessageU("Max:12 characters");
    }
    else{
      setErrorMessageU("");
    }
  } 
  const validateEmail=(e)=>
    {
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const x=e.target.value;
      if(!regex.test(x)){
        setErrorMessage("Enter valid email");
      }
      else{
        setErrorMessage("");
      }
    }

  const handlePhoneNumber=(e)=>{
    let x=e.target.value;
    const regex=/^[6-9]{1}[0-9]{9}$/;
    if(!regex.test(x)){
      setErrorMessageP("Only 10 digits & valid");
    }
    else{
      setErrorMessageP("")
    }
  }

 const handlePhoneNumberpress=(e)=>{
    if(!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight"){
      e.preventDefault();
      setErrorMessageP("only digits are allowed");
    }
    else{
      setErrorMessageP("")
    }
  }
  return (
   <>
     {/* <Navbar/> */}
     <div style={main}>
  
    <form style={forms} >
      <legend style={{marginBottom:"20px",fontSize:"20px",fontWeight:"900",color:"red"}}>Register</legend>
      <div className='block' style={block1}>
        <label>Enter FirstName<span >*</span></label>
        <input type='text' placeholder='Firstname' 
        onKeyDown={validateName} className='firstname' required/>
      </div>
      <div className='block' style={block1}>
        <label>Enter LastName<span >*</span></label>
        <input type='text' placeholder='Lastname'
         onKeyDown={(e)=>{
          if(e.key>='0'&& e.key<='9'){
            e.preventDefault();
          }
         }} required/>
      </div>
      <div className='block' style={block1}>
        <label>Enter UserName<span >*</span></label>
        <div style={errorr} >
        <input type='text' placeholder='Username' onChange={validateUser} required 
        onBlur={()=>{
          setErrorMessageU("")
          }}/>
        {errorMessageU&& <div style={error}>{errorMessageU}</div>}
        </div>
      </div>
      <div className='block' style={block1}>
        <label>Enter Email<span >*</span></label>
        <div style={errorr}>
        <input type='email' placeholder='Email' onChange={validateEmail} required/>
          {errorMessage&& <div style={error}>{errorMessage}</div>}
        </div>
      </div>
      <div className="block" style={block1}>
        <label>Enter Phone Number* </label>
        <div style={errorr}>
        <input type="text" placeholder="Phone Number" onKeyDown={handlePhoneNumberpress} onChange={handlePhoneNumber} required/>
        {errorMessageP&& <span style={error}>{errorMessageP}</span>}
        </div>
      </div>
      <button style={{border:"none",background:"green",color:"white",outline:"none"}}>Submit</button>
    </form>
    </div>
   </>
  )
}
