import React from 'react'
import  {useState} from 'react';
import {Link} from 'react-router-dom';
import { OAuth } from '../component/OAuth';

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  function onChange(e){
    setEmail(e.target.value)
  }
  return (
    <section className='text-center text-3sl mb-12 mt-6 font-bold '>
      <h1>Forgot password</h1>
      <div className='flex justify-center flex-wrap'>  
        <div className='md:w-[67%] lg:w-[50%] md:mb-6'>
          <img src="https://plus.unsplash.com/premium_photo-1663089688180-444ff0066e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
          alt="key"  className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form action="" onSubmit="">
            <div className=' relative mb-4'>
              <input className='w-full px-4 py-2 text-xl mb-5 text-gray-700 bg-white border-gray-300 rounded transition ease-in-out'type="email" id="email" value={email} onChange={onChange} placeholder='Email address'/>
             
            </div>
            <div className='flex justify-between'>
              <p>Don't have an account?
                <Link to="/Sign-up" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Register</Link>
              </p>
              <p>
                <Link to="/ForgotPassword" className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out'>Sign in instead</Link>
              </p>
            </div>
            <button type='submit' className='w-full bg-blue-600 text-white px-8 py-2 border-r-2 text-sm font-medium uppercase rounded shadow-sm hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'>Send reset password</button>
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
