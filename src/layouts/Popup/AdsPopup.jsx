import ads from '@/assets/images/popup/Ads.png';
import close from '@/assets/images/popup/Close.svg';
import Ellipse from '@/assets/images/popup/Ellipse.svg';

const AdsPopup = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-opacity-80 bg-black z-50 flex items-center justify-center'>
      <div className='max-w-[872px] max-h-[400px] flex justify-between bg-white rounded-lg shadow-lg py-2.5 px-2.5'>
        {/* 1 */}
        <div className='w-full flex justify-between gap-10'>
          <div className='max-w-[354px] max-h-[380px] rounded'>
            <img src={ads} alt='Advertisement' className='rounded' />
          </div>
          {/* 2 */}
          <div className='flex flex-col gap-3 justify-center items-center'>
            {/* 2.1 */}
            <div className='max-w-[428px] text-center text-[#191919] text-[24px] md:text-[40px] font-semibold font-poppins leading-[48px]'>
              Subscribe to Our Newsletter
            </div>

            {/* 2.2 */}
            <div className='flex flex-col gap-[24.5px]'>
              <div className='w-[428px] flex justify-center items-center'>
                <div className='w-full text-center'>
                  <span className='text-[#999999] text-sm md:text-base font-normal font-poppins leading-normal'>
                    Subscribe to our newsletter and Save your
                  </span>
                  <span className='text-[#ff8900] text-sm md:text-base font-semibold font-poppins leading-tight'>
                    20% money
                  </span>
                  <span className='text-[#999999] text-sm md:text-base font-normal font-poppins leading-normal'>
                    {' '}
                    with discount code today.
                  </span>
                </div>
              </div>
              {/* 2.2.1 */}
              <div className='w-full flex flex-col gap-[50px]'>
                {/* 2.2.1.1 */}
                <div className='w-full bg-white rounded-[46px] border border-[#e6e6e6] flex justify-between'>
                  <input
                    type='text'
                    className='max-w-[343px] px-6 py-3.5 rounded-[46px] text-[#7f7f7f] text-sm md:text-base font-normal font-poppins leading-normal focus:outline-none border-none'
                    placeholder='Enter your email'
                  />
                  <div className='flex justify-center items-center text-white text-sm md:text-base font-semibold font-poppins leading-tight bg-[#00b206] h-[52px] w-[147px] rounded-[43px]'>
                    <p>Subscribe</p>
                  </div>
                </div>
                {/* 2.2.1.2 */}
                <div className='flex gap-1.5 justify-center'>
                  <div className='w-5 h-5 relative'>
                    <input
                      type='checkbox'
                      className='w-5 h-5 left-0 top-0 absolute bg-white rounded-[3px] border border-[#cccccc]'
                    />
                  </div>
                  <div className="text-[#666666] text-sm md:text-base font-normal font-['Poppins'] leading-[21px]">
                    Do not show this window
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className='relative'>
          <div className='left-0 top-0 bg-white rounded-full relative'>
            <img src={Ellipse} alt='This is Ellipse' />
          </div>
          <div className='w-[25px] h-[25px] left-[10px] top-[10px] absolute cursor-pointer'>
            <img src={close} alt='This is close' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsPopup;
