import notfound from '@/assets/images/notfound/NotFound.svg';

const NotFound = () => {
  return (
    <div className='w-full h-full flex flex-col items-center gap-4 mt-20 mb-20'>
      <div>
        <img src={notfound} alt='notfound' />
      </div>
      <div className='text-center text-[#191919] text-[40px] font-semibold font-poppins leading-[48px]'>
        Oops! page not found
      </div>
      <div className='w-full text-center text-[#7f7f7f] text-base font-normal font-poppins leading-normal'>
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis
      </div>
      <div className='h-[45px] px-8 py-3.5 bg-[#00b206] rounded-[43px] flex justify-center items-center gap-3 '>
        <button className='text-white text-sm font-semibold font-poppins leading-[16.80px]'>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
