import React from 'react';

import eye from '@/assets/images/auth/Eye.svg';
import eyeOff from '@/assets/images/auth/EyeOff.svg';

const ResetPassword = () => {
  // State for toggling password visibility
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showOldPassword, setShowOldPassword] = React.useState(false);

  // Functions to toggle password visibility for each input field
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  return (
    <div className='w-full h-full flex justify-center mt-20 mb-20'>
      <div className='w-full max-w-md px-6 pt-6 pb-8 bg-white rounded-lg shadow border border-[#f2f2f2] flex-col justify-start items-center gap-5 inline-flex'>
        <div className='text-[#191919] text-[32px] font-semibold font-poppins leading-[38.40px]'>
          Reset Password
        </div>
        <div className='flex-col justify-start items-start gap-4 flex w-full'>
          <div className='w-full flex-col justify-start items-start gap-3 flex'>
            {/* New Password Input */}
            <div className='w-full px-4 py-3.5 bg-white rounded-md border border-[#e6e6e6] flex justify-between gap-2'>
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder='New Password'
                className='w-full text-black text-base font-normal font-poppins leading-tight focus:outline-none border-none'
              />
              <div
                className='w-5 h-5 cursor-pointer'
                onClick={toggleNewPasswordVisibility}
              >
                <img
                  src={showNewPassword ? eyeOff : eye}
                  alt='Toggle new password visibility'
                  className='w-full h-full'
                />
              </div>
            </div>
            {/* Old Password Input */}
            <div className='w-full px-4 py-3.5 bg-white rounded-md border border-[#e6e6e6] flex justify-between gap-2'>
              <input
                type={showOldPassword ? 'text' : 'password'}
                placeholder='Old Password'
                className='w-full text-black text-base font-normal font-poppins leading-tight focus:outline-none border-none'
              />
              <div
                className='w-5 h-5 cursor-pointer'
                onClick={toggleOldPasswordVisibility}
              >
                <img
                  src={showOldPassword ? eyeOff : eye}
                  alt='Toggle old password visibility'
                  className='w-full h-full'
                />
              </div>
            </div>
          </div>
        </div>
        <button className='w-full  px-8 py-3.5 bg-[#00b206] rounded-[43px] text-white text-sm font-semibold font-poppins leading-[16.80px]'>
          Save Changes
        </button>

        <div className='w-full flex justify-between'>
          <div className='justify-start items-start gap-2 flex'>
            <p className='text-gray-500 font-bold text-sm font-poppins leading-[21px]'>
              This link only resets your password once. If you need to change it
              again, you will have to request a new reset link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
