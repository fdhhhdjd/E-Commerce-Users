import facebook from '@/assets/images/nav/Facebook.svg';
import instagram from '@/assets/images/nav/Instagram.svg';
import pinterest from '@/assets/images/nav/Pinterest.svg';
import twitter from '@/assets/images/nav/Twitter.svg';

import { cn } from '@/helpers';

const socialIcons = [
  { src: facebook, alt: 'facebook' },
  { src: twitter, alt: 'twitter' },
  { src: pinterest, alt: 'pinterest' },
  { src: instagram, alt: 'instagram' }
];

const Rectangle = () => {
  return (
    <div className='w-full h-auto md:h-[162px] flex flex-col md:flex-row justify-between gap-3 pt-10 bg-whitePrimary md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
      <div className='flex flex-col gap-2'>
        <div className='text-[#191919] text-2xl font-semibold font-poppins leading-9'>
          Subscribe to our Newsletter
        </div>
        <div className='w-full md:w-[336px] text-[#999999] text-sm font-normal font-poppins'>
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </div>
      </div>

      <div className='w-full md:w-auto mt-4 md:mt-8'>
        <div className='w-full md:w-[492px] h-[52px] bg-white rounded-[46px] border border-[#e6e6e6] flex justify-between gap-2.5'>
          <input
            type='text'
            className='w-[400px] px-6 py-3.5 rounded-[46px] text-[#7f7f7f] text-base font-normal font-poppins leading-normal focus:outline-none border-none'
            placeholder='Enter your email address'
          />
          <div className='text-white text-base font-semibold font-poppins leading-tight bg-[#00b206] h-[52px] px-10 py-4 rounded-[43px]'>
            Subscribe
          </div>
        </div>
      </div>

      <div className='flex justify-center md:justify-end gap-2 mb-4 md:mt-9 md:mb-0'>
        {socialIcons.map((icon, index) => (
          <div
            key={index}
            className={cn(
              `w-10 h-10  rounded-full flex justify-center items-center`,
              index === 0 && 'bg-[#00b206]'
            )}
          >
            <img src={icon.src} alt={icon.alt} className='w-[18px] h-[18px]' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rectangle;
