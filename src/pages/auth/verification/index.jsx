const Verification = () => {
  return (
    <div className='w-full h-full flex justify-center mt-20 mb-20'>
      <div className='w-full max-w-md px-6 pt-6 pb-8 bg-white rounded-lg shadow border border-[#f2f2f2] flex-col justify-start items-center gap-5 inline-flex'>
        <div className='text-[#191919] text-[30px] font-semibold font-poppins leading-[38.40px]'>
          Verification account
        </div>
        <button className='w-full  px-8 py-3.5 bg-[#00b206] rounded-[43px] text-white text-sm font-semibold font-poppins leading-[16.80px]'>
          Click Here ✅
        </button>
        <div className='flex-col justify-start items-start gap-4 flex w-full'>
          <div className='w-full  flex justify-between'>
            <div className='justify-start items-start gap-1.5 flex'>
              <div className='text-[#666666] text-sm font-normal font-poppins leading-[21px] flex gap-1'>
                <p>
                  This is link verification your account, not send this link for
                  any someone and It only excited one again with your account,
                  Please check your email for verification, before it expired
                  after 24 hours. Thank you for your attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
