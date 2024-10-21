import Group from '@/assets/images/nav/Group.svg';
import MapPin from '@/assets/images/nav/MapPin.svg';

const SmallOne = () => {
  return (
    <div className='w-full h-[42px] px-4 md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px] py-3 bg-darkGray shadow flex justify-between items-center'>
      {/* Store Address */}
      <div className='flex items-center gap-2'>
        <div className='w-[15px] h-[18px]'>
          <img src={MapPin} alt='this is map pin' />
        </div>
        <div className='text-lightGray text-xs font-normal font-poppins leading-none'>
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </div>
      </div>

      {/* Language, Money and Login/Register */}
      <div className='flex items-center gap-2 md:gap-3 lg:gap-5'>
        {/* Language */}
        <div className='flex items-center gap-1.5'>
          <div className='text-center text-lightGray text-xs font-normal font-poppins leading-none cursor-pointer'>
            Eng
          </div>
          <div>
            <img src={Group} alt='this is icon group' />
          </div>
        </div>

        {/* Money */}
        <div className='flex items-center gap-1.5'>
          <div className='text-center text-lightGray text-xs  font-normal font-poppins leading-none cursor-pointer'>
            USD
          </div>
          <div>
            <img src={Group} alt='this is icon group' />
          </div>
        </div>

        {/* Separator*/}
        <div className='w-[15px] h-[0px] rotate-90 opacity-50 border border-lightGray'></div>

        {/* Login và Register */}
        <div className='flex items-center gap-1'>
          <div className='text-lightGray text-xs md:text-sm font-normal font-poppins leading-none cursor-pointer'>
            Sign In
          </div>
          <div className='text-lightGray text-xs md:text-sm font-normal font-poppins leading-none cursor-pointer'>
            /
          </div>
          <div className='text-lightGray text-xs md:text-sm font-normal font-poppins leading-none cursor-pointer'>
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallOne;
