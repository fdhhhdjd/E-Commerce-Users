import { NavLink } from 'react-router-dom';

import group from '@/assets/images/nav/Group.svg';
import phoneCall from '@/assets/images/nav/PhoneCall.svg';

import { cn } from '@/helpers';

const NavBar = () => {
  const navItems = ['Home', 'Shop', 'Blog', 'About Us', 'Faqs', 'Contact Us'];

  return (
    <div className='w-full h-[60px] md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px] py-4 flex justify-between items-center border-t border-lightGray'>
      <div className='flex items-center gap-8 overflow-x-auto'>
        {navItems.map((item, index) => (
          <div key={index} className='flex justify-start items-center gap-1'>
            <NavLink
              to={
                item === 'Home'
                  ? '/'
                  : `/${item.toLowerCase().replace(' ', '-')}`
              }
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium font-poppins leading-[21px]',
                  isActive ? 'text-[#00b206]' : 'text-[#666666]'
                )
              }
            >
              {item}
            </NavLink>
            {index < navItems.length - 1 && (
              <div>
                <img src={group} alt='divider' />
              </div>
            )}
          </div>
        ))}
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

export default NavBar;
