import logo from '@/assets/icons/logo/logo.svg';
import bag from '@/assets/images/nav/Bag.svg';
import heart from '@/assets/images/nav/Heart.svg';
import search from '@/assets/images/nav/Search.svg';

const Middle = () => {
  return (
    <div className='w-full h-[93px] bg-white shadow-inner flex justify-between items-center gap-3 px-4 md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
      {/* Logo */}
      <div className='flex items-center gap-2 cursor-pointer'>
        <div className='w-8 h-8'>
          <img src={logo} alt='logo' />
        </div>
        <div className='text-darkGray text-xl lg:text-[32px] font-medium leading-[38px] font-poppins'>
          Ecobazar
        </div>
      </div>

      {/* Search */}
      <div className='flex items-center border border-[#e1c5c5] rounded-md overflow-hidden'>
        <div className='flex items-center h-[45px] pl-4 pr-[18px] gap-2'>
          <div className='w-5 h-5'>
            <img
              src={search}
              alt='search'
              className='w-full h-full cursor-pointer'
            />
          </div>
          <input
            type='text'
            className='w-[250px] lg:w-[400px] text-darkGray text-sm lg:text-[15px] font-normal font-poppins focus:outline-none border-none'
            placeholder='Search'
          />
        </div>
        <div className='px-6 py-3.5 bg-greenPrimary flex items-center'>
          <span className='text-white text-sm font-semibold font-poppins'>
            Search
          </span>
        </div>
      </div>

      {/* Icon heart and Cart */}
      <div className='flex items-center gap-2'>
        <div className='w-8 h-8 cursor-pointer'>
          <img src={heart} alt='heart' />
        </div>
        <div className='w-6 h-[0px] rotate-90 border border-lightGray'></div>
        <div className='flex items-center gap-3 relative'>
          <div className='w-[34px] h-[34px] cursor-pointer'>
            <img src={bag} alt='bag' />
          </div>
          <div className='absolute left-[18px] top-[-2px] bg-greenPrimary text-white text-xs font-medium rounded-2xl border border-white px-1.5 py-[3.50px]'>
            2
          </div>
          <div className='flex flex-col'>
            <span className='text-lightGray text-xs lg:text-[11px] font-normal font-poppins'>
              Shopping cart:
            </span>
            <span className='text-darkGray text-sm font-medium font-poppins'>
              $57.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
