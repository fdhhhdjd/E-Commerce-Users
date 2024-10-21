import breadcrumbs from '@/assets/images/nav/Breadcrumbs.png';
import home from '@/assets/images/nav/Home.svg';
import vector from '@/assets/images/nav/Vector.svg';

const Breadcrumbs = () => {
  return (
    <div className='w-full h-[150px] md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px] bg-gradient-to-r from-black to-black flex items-center relative'>
      {/* Background*/}
      <div className='absolute inset-0'>
        <img src={breadcrumbs} alt='background' className='w-full h-full ' />
      </div>
      <div className='flex items-center gap-3 relative z-10'>
        <div>
          <img src={home} alt='this is home' className='cursor-pointer' />
        </div>
        <div>
          <img src={vector} alt='this is vector' />
        </div>
        <div className='text-graySecondary text-base font-normal font-poppins leading-normal cursor-pointer'>
          Account
        </div>
        <div>
          <img src={vector} alt='this is vector' />
        </div>
        <div className='text-greenPrimary text-base font-normal font-poppins leading-normal cursor-pointer'>
          Login
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
