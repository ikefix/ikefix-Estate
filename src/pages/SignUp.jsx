import React from 'react'
import  {useState} from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { OAuth } from '../component/OAuth';

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name:"",
    email:" ", password:"",
  });
  const {name,email, password} = formData; 
  function onChange(e){
    setFormData((prevState)=>({
        ...prevState, 
        [e.target.id]: e.target.value,
    }))
  }
  return (
    <section className='text-center text-3sl mb-12 mt-6 font-bold '>
      <h1>Sign up</h1>
      <div className='flex justify-center flex-wrap'>
        <div className='md:w-[67%] lg:w-[50%] md:mb-6'>
          <img src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
          alt="key"  className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="">
            <div className=' relative mb-4'>
              <input className='w-full px-4 py-2 text-xl mb-5 text-gray-700 bg-white border-gray-300
               rounded transition ease-in-out'type="text" id="name" value={name}
              onChange={onChange} placeholder='Full name'/>
              <input className='w-full px-4 py-2 text-xl mb-5 text-gray-700 bg-white border-gray-300
               rounded transition ease-in-out'type="email" id="email" value={email}
              onChange={onChange} placeholder='Email address'/>
              <input className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
              rounded transition ease-in-out'type={showPassword ? "text" : "password"} id="password"
              value={password} onChange={onChange} placeholder='password'/>
              {showPassword ? <AiFillEyeInvisible className='absolute right-3 top-20 cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)} /> : <AiFillEye className='absolute right-3 top-20 cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState)}/>}
            </div>
            <div className='flex justify-between'>
              <p>Have an account?
                <Link to="/Sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Sign in</Link>
              </p>
              <p>
                <Link to="/ForgotPassword" className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out'>Forgot password?</Link>
              </p>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-8 py-2 border-r-2 text-sm font-medium uppercase rounded shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>Sign up</button>
            <div className=' items-center flex my-4 before:border-t before:flex-1 before:border-gray-300  after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
            </div>
            <OAuth/>
          </form>

        </div>
      </div>
    
    </section>
  )
}
