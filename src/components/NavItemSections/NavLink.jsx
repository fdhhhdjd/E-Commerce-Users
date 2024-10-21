import group from '@/assets/images/nav/Group.svg';
import phoneCall from '@/assets/images/nav/PhoneCall.svg';

import { cn } from '@/helpers';

const NavLink = () => {
  return (
    <div className='w-full h-[60px] px-[20px] py-4 flex justify-between items-center md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px] border-t border-lightGray'>
      <div className='flex items-center gap-8'>
        {['Home', 'Shop', 'Pages', 'Blog', 'About Us', 'Contact Us'].map(
          (item, index) => (
            <div key={index} className='flex justify-start items-center gap-1 '>
              <div
                className={cn(
                  'text-sm font-medium font-poppins leading-[21px]',
                  item === 'Home' ? 'text-[#00b206]' : 'text-[#666666]'
                )}
              >
                {item}
              </div>
              {index < 4 && (
                <div>
                  <img src={group} alt='this is group' />
                </div>
              )}
            </div>
          )
        )}
      </div>
      <div className='flex items-center gap-2'>
        <div className='w-7 h-7 flex items-center justify-center'>
          <img src={phoneCall} alt='this is phone call' />
        </div>
        <div className='text-[#191919] text-sm font-medium font-poppins leading-[21px]'>
          (219) 555-0114
        </div>
      </div>
    </div>
  );
};

export default NavLink;
