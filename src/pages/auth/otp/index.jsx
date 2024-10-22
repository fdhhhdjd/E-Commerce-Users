import React from 'react';

import OTPInput from '@/components/ui/input/OTPInput';

const OTP = () => {
  const [reset, __] = React.useState(false);

  return (
    <div className='w-full h-full flex justify-center mt-20 mb-20'>
      <div className='w-full max-w-md px-6 pt-6 pb-8 bg-white rounded-lg shadow border border-[#f2f2f2] flex-col justify-start items-center gap-5 inline-flex'>
        <div className='text-[#191919] text-[32px] font-semibold font-poppins leading-[38.40px]'>
          OTP
        </div>
        <div className='flex-col justify-start items-start gap-4 flex w-full'>
          <div className='w-full flex-col justify-start items-start gap-3 flex'>
            <div className='w-full px-4 py-3.5 bg-white flex justify-start'>
              <OTPInput
                length={6}
                onComplete={otp => console.info(otp)}
                resetFlag={reset}
                className='rounded-lg bg-gray-100 cursor-text light:bg-gray-800 w-14 aspect-square flex items-center justify-center text-center'
              />
            </div>
          </div>
          <div className='w-full  flex justify-between'>
            <div className='justify-start items-start gap-1.5 flex'>
              <div className='text-[#666666] text-sm font-normal font-poppins leading-[21px] flex gap-1'>
                <p>Time reaming is:</p>
                <p className='text-green-600'>00:30</p>
              </div>
            </div>
          </div>
        </div>
        <button className='w-full  px-8 py-3.5 bg-[#00b206] rounded-[43px] text-white text-sm font-semibold font-poppins leading-[16.80px]'>
          Submit
        </button>
        <div className='w-full flex justify-end'>
          <div className='justify-start items-start gap-1.5 flex'>
            <div className='text-[#666666] text-sm font-normal font-poppins leading-[21px] underline'>
              Send again Code
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
