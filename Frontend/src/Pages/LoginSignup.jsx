import React from 'react'
import { useState } from 'react'

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  });

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  

  const login =  async() =>{
    console.log("Login function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }


  const signup =  async() =>{
    console.log("SignUp function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='w-300 h-[120vh] bg-[#71e0ed] pt-12  flex items-center justify-center  xl:w-380   lg:w-380 md:w-330 sm:w-330 '>
      <div className='w-[580px] h-[650px]  bg-white m-auto px-10 py-15 pb-8 '>
        <p className='text-[40px] font-bold mx-5 my-0 mb-8'>{state}</p>
        <div className='flex mt-8 flex-col gap-8 mb-8'>
         {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your name' className='h-[72px] w-[100%] pl-5 border-[1px] border-solid border-b-cyan-200 outline-none text-xl'/>:<></>} 
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email id'className='h-[72px] w-[100%] pl-5 border-[1px] border-solid border-b-cyan-200 outline-none text-xl'/>
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' className='h-[72px] w-[100%] pl-5 border-[1px] border-solid border-b-cyan-200 outline-none text-xl'/>
        </div>
        <button className='h-[70px] w-[250px] gap-[15px ] rounded-full mt-[30px] bg-[#ff4141] text-white siz-[22px] font-bold active:bg-blue-600 flex justify-center items-center cursor-pointer ml-30' onClick={()=>{state==="Login"?login():signup()}} >Continue</button>

        {state==="Sign Up"? <p className='mt-5 text-cyan-800 text-xl font-semibold gap-4'>Already have an accout?   <span onClick={()=>{setState("Login")}} className='text-green-600 font- gap-4 cursor-pointer'>Login here</span></p>:<p className='mt-5 text-cyan-800 text-xl font-semibold gap-4'>Create an accout?   <span  onClick={()=>{setState("Sign Up")}}  className='text-green-600 font- gap-4 cursor-pointer'>Click here</span></p>}
        
       
        
        <div className='flex items-center mt-6 gap-5 text-cyan-800 text-[16px]  font-normal'>
          <input type='checkbox' />
          <p>By continuing I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup