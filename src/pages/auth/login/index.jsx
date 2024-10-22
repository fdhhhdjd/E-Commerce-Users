import React from 'react';

import { Link } from 'react-router-dom';

import eye from '@/assets/images/auth/Eye.svg';
import eyeOff from '@/assets/images/auth/EyeOff.svg';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='w-full h-full flex justify-center mt-20 mb-20'>
      <div className='w-full max-w-md px-6 pt-6 pb-8 bg-white rounded-lg shadow border border-[#f2f2f2] flex-col justify-start items-center gap-5 inline-flex'>
        <div className='text-[#191919] text-[32px] font-semibold font-poppins leading-[38.40px]'>
          Sign In
        </div>
        <div className='flex-col justify-start items-start gap-4 flex w-full'>
          <div className='w-full flex-col justify-start items-start gap-3 flex'>
            <div className='w-full px-4 py-3.5 bg-white rounded-md border border-[#e6e6e6] flex justify-start'>
              <input
                type='email'
                placeholder='Email'
                className='w-full text-black text-base font-normal font-poppins leading-tight focus:outline-none border-none'
              />
            </div>
            <div className='w-full px-4 py-3.5 bg-white rounded-md border border-[#e6e6e6] flex justify-between gap-2'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                className='w-full text-black text-base font-normal font-poppins leading-tight focus:outline-none border-none'
              />
              <div
                className='w-5 h-5 cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                <img
                  src={showPassword ? eyeOff : eye}
                  alt='eye'
                  className='w-full h-full'
                />
              </div>
            </div>
          </div>
          <div className='w-full  flex justify-between'>
            <div className='justify-start items-start gap-1.5 flex'>
              <div className='w-5 h-5'>
                <input type='checkbox' className='h-5 w-5 cursor-pointer' />
              </div>
              <div className='text-[#666666] text-sm font-normal font-poppins leading-[21px]'>
                Remember me
              </div>
            </div>
            <div className='text-[#666666] text-sm font-normal font-poppins leading-[21px]'>
              Forget Password
            </div>
          </div>
        </div>
        <button className='w-full  px-8 py-3.5 bg-[#00b206] rounded-[43px] text-white text-sm font-semibold font-poppins leading-[16.80px]'>
          Login
        </button>
        <div className='pt-1 flex gap-2'>
          <div className='text-[#666666] text-sm font-normal font-poppins leading-[21px]'>
            Don’t have account?
          </div>
          <Link
            to='/auth/register'
            className='text-[#191919] text-sm font-medium font-poppins leading-[21px]'
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
