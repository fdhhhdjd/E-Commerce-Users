import { useEffect, useState } from 'react';

import arrow from '@/assets/images/home/GroupGreen.svg';
import rectangle1 from '@/assets/images/home/Rectangle1.png';
import rectangle2 from '@/assets/images/home/Rectangle2.png';
import rectangle3 from '@/assets/images/home/Rectangle3.png';

const HomeInfoBannerSale = () => {
  const [saleData, setSaleData] = useState({
    title: 'Sale of the Month',
    subtitle: 'Best Deals',
    timer: {
      days: 0,
      hours: 2,
      minutes: 18,
      seconds: 46
    },
    image: rectangle1
  });

  const [saleData2, setSaleData2] = useState({
    title: 'Low-Fat Meat',
    subtitle: '85% Fat Free',
    price: '$79.99',
    image: rectangle2
  });

  const [saleData3, setSaleData3] = useState({
    title: '100% Fresh Fruit',
    subtitle: 'Summer Sale',
    discount: '64% OFF',
    image: rectangle3
  });

  useEffect(() => {
    // Giả lập dữ liệu từ backend
    setTimeout(() => {
      setSaleData({
        title: 'Mega Sale Today',
        subtitle: 'Unmissable Offers',
        timer: {
          days: 0,
          hours: 1,
          minutes: 30,
          seconds: 45
        },
        image: rectangle1
      });

      setSaleData2({
        title: 'Low-Fat Meat',
        subtitle: '85% Fat Free',
        price: '$79.99',
        image: rectangle2
      });

      setSaleData3({
        title: '100% Fresh Fruit',
        subtitle: 'Summer Sale',
        discount: '64% OFF',
        image: rectangle3
      });
    }, 1000);
  }, []);

  const [timer, setTimer] = useState(saleData.timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        const { days, hours, minutes, seconds } = prevTimer;
        if (seconds > 0) {
          return { ...prevTimer, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { ...prevTimer, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { ...prevTimer, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        if (days > 0) {
          return {
            ...prevTimer,
            days: days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59
          };
        }
        return prevTimer;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-[1320px] h-[536px] flex justify-start gap-6'>
      {/* Sale Banner 1 */}
      <div className='w-[424px] h-full relative'>
        <img
          className='w-[424px] h-[536px] left-0 top-0 absolute rounded-lg'
          src={saleData.image}
          alt='Sale Banner'
        />
        <div className='w-[424px] left-0 top-[65px] absolute text-center text-white text-[40px] font-semibold font-poppins leading-[48px]'>
          {saleData.title}
        </div>
        <div className='w-[424px] left-0 top-[35px] absolute text-center text-white text-sm font-medium font-poppins uppercase leading-[14px] tracking-wide'>
          {saleData.subtitle}
        </div>
        <div className='left-[67px] top-[121px] absolute justify-start items-start gap-2 inline-flex'>
          <div className='rounded-md flex-col justify-start items-center gap-1 inline-flex'>
            <div className='w-14 text-center text-white text-2xl font-normal font-poppins leading-9'>
              {String(timer.days).padStart(2, '0')}
            </div>
            <div className='text-center text-white/80 text-xs font-normal font-poppins uppercase leading-3 tracking-tight'>
              Days
            </div>
          </div>
          <div className='text-center text-white/60 text-2xl font-normal font-poppins leading-9'>
            :
          </div>
          <div className='rounded-md flex-col justify-start items-center gap-1 inline-flex'>
            <div className='w-14 text-center text-white text-2xl font-normal font-poppins leading-9'>
              {String(timer.hours).padStart(2, '0')}
            </div>
            <div className='text-center text-white/80 text-xs font-normal font-poppins uppercase leading-3 tracking-tight'>
              Hours
            </div>
          </div>
          <div className='text-center text-white/60 text-2xl font-normal font-poppins leading-9'>
            :
          </div>
          <div className='rounded-md flex-col justify-start items-center gap-1 inline-flex'>
            <div className='w-14 text-center text-white text-2xl font-normal font-poppins leading-9'>
              {String(timer.minutes).padStart(2, '0')}
            </div>
            <div className='text-center text-white/80 text-xs font-normal font-poppins uppercase leading-3 tracking-tight'>
              Mins
            </div>
          </div>
          <div className='text-center text-white/60 text-2xl font-normal font-poppins leading-9'>
            :
          </div>
          <div className='rounded-md flex-col justify-start items-center gap-1 inline-flex'>
            <div className='w-14 text-center text-white text-2xl font-normal font-poppins leading-9'>
              {String(timer.seconds).padStart(2, '0')}
            </div>
            <div className='text-center text-white/80 text-xs font-normal font-poppins uppercase leading-3 tracking-tight'>
              Secs
            </div>
          </div>
        </div>
        <div className='px-8 py-3.5 left-[131px] top-[197px] absolute bg-white rounded-[43px] justify-center items-center gap-3 inline-flex'>
          <div className='text-justify text-[#00b206] text-sm font-semibold font-poppins leading-[16.80px]'>
            Shop Now
          </div>
          <img src={arrow} alt='' className='w-[15px] h-3 relative' />
        </div>
      </div>

      {/* Sale Banner 2 */}
      <div className='w-[424px] h-[536px] relative'>
        <img
          className='w-[424px] h-[536px] left-0 top-0 absolute rounded-xl'
          src={saleData2.image}
        />
        <div className='left-[130px] top-[125.50px] absolute justify-start items-center gap-2 inline-flex'>
          <div className="text-center text-white text-lg font-normal font-['Poppins'] leading-[27px]">
            Started at
          </div>
          <div className="text-center text-[#ff8900] text-xl font-semibold font-['Poppins'] leading-[30px]">
            {saleData2.price}
          </div>
        </div>
        <div className="w-[424px] left-0 top-[65px] absolute text-center text-white text-[40px] font-semibold font-['Poppins'] leading-[48px]">
          {saleData2.title}
        </div>
        <div className="w-[424px] left-0 top-[35px] absolute text-center text-white text-sm font-medium font-['Poppins'] uppercase leading-[14px] tracking-wide">
          {saleData2.subtitle}
        </div>
        <div className='px-8 py-3.5 left-[131px] top-[184px] absolute bg-white rounded-[43px] justify-center items-center gap-3 inline-flex'>
          <div className="text-justify text-[#00b206] text-sm font-semibold font-['Poppins'] leading-[16.80px]">
            Shop Now
          </div>
          <img src={arrow} alt='' className='w-[15px] h-3 relative' />
        </div>
      </div>

      {/* Sale Banner 3 */}
      <div className='w-[424px] h-[536px] relative'>
        <img
          className='w-[424px] h-[536px] left-0 top-0 absolute rounded-xl'
          src={saleData3.image}
        />
        <div className='left-[132px] top-[121px] absolute justify-start items-center gap-3 inline-flex'>
          <div className="text-center text-[#191919] text-lg font-normal font-['Poppins'] leading-[27px]">
            Up to
          </div>
          <div className='px-3 py-1.5 bg-[#191919] rounded-md'>
            <div className="text-center text-white text-xl font-semibold font-['Poppins'] leading-[29px]">
              {saleData3.discount}
            </div>
          </div>
        </div>
        <div className="w-[424px] left-0 top-[65px] absolute text-center text-white text-[40px] font-semibold font-['Poppins'] leading-[48px]">
          {saleData3.title}
        </div>
        <div className="w-[424px] left-0 top-[35px] absolute text-center text-white text-sm font-medium font-['Poppins'] uppercase leading-[14px] tracking-wide">
          {saleData3.subtitle}
        </div>
        <div className='px-8 py-3.5 left-[131px] top-[184px] absolute bg-white rounded-[43px] justify-center items-center gap-3 inline-flex'>
          <div className="text-justify text-[#00b206] text-sm font-semibold font-['Poppins'] leading-[16.80px]">
            Shop Now
          </div>
          <img src={arrow} alt='' className='w-[15px] h-3 relative' />
        </div>
      </div>
    </div>
  );
};

export default HomeInfoBannerSale;
