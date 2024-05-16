import React from 'react'
import "./Login.css"
import { loginUser } from '../util';

const Login = () => {
  
  function handleSubmit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const {email,password}=data;
    loginUser(email,password);
  }
  return (
    <div>
      <div className="tp">
        <h1 className='font-bold text-3xl text-center py-2'>भारतीय प्रौद्योगिकी संस्थान पटना</h1>
        <h1 className='font-bold text-3xl text-center py-1'>Indian Institute of Technology Patna</h1>
      </div>
      <div className="btm my-2">
        <h1 className='blink_me font-bold text-3xl text-center py-2'>Application for Faculty Position</h1>
        <div className="box my-6">
          <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Institute_of_Technology%2C_Patna.svg/1200px-Indian_Institute_of_Technology%2C_Patna.svg.png" alt="" />
          </div>
          <div className="right">
            <h1 className='font-bold underline text-2xl text-center py-3'>LOGIN HERE</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className='em'>
                <input type="email" placeholder='Your Email' className='mail' name="email" />
              </div>
              <div className='pw'>
                <input type="password" placeholder='Enter your password' className='passw' name="password" />
              </div>
              <button type='submit' className='login hover:bg-green-500' >Login</button>
              <button type="button" className='rp  hover:bg-red-800' onClick={()=>{window.location.href='/forget'}}>Forget Password</button>
            </form>
            <div className='flex-row py-10'>
              <span className='text-green-700 font-bold text-2xl mx-16'>NOT REGISTERED?</span>
              <button onClick={() => window.location.href='/signup'} className='su  hover:bg-blue-700 hover:underline'>SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login
