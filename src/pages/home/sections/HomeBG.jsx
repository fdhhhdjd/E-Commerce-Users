import delivery from '@/assets/images/home/Delivery.svg';
import fruit from '@/assets/images/home/Fruit.png';
import group from '@/assets/images/home/Group.svg';
import headPhones from '@/assets/images/home/HeadPhones.svg';
import packageIcon from '@/assets/images/home/Package.svg';
import shopping from '@/assets/images/home/ShoppingBag.svg';

const HomeBG = () => {
  const serviceData = [
    {
      icon: delivery,
      title: 'Free Shipping',
      description: 'Free shipping on all your orders'
    },
    {
      icon: headPhones,
      title: 'Customer Support 24/7',
      description: 'Instant access to Support'
    },
    {
      icon: shopping,
      title: '100% Secure Payment',
      description: 'We ensure your money is safe'
    },
    {
      icon: packageIcon,
      title: 'Money-Back Guarantee',
      description: '30 Days Money-Back Guarantee'
    }
  ];
  return (
    <div className='w-full h-[1087px] flex flex-col items-center pt-6 gap-[100px]'>
      {/* 1 */}
      <div className='w-[1520px] h-[804px] bg-[#edf2ed] rounded-lg flex flex-col justify-center items-center relative'>
        <div className='h-2 left-[736px] top-[692px] absolute justify-start items-center gap-2 inline-flex'>
          <div className='w-2 h-2 bg-[#b3ccb4] rounded-full' />
          <div className='w-4 h-2 bg-[#00b206] rounded-[50px]' />
          <div className='w-2 h-2 bg-[#b3ccb4] rounded-full' />
        </div>
        <div className='flex justify-center items-center'>
          {/* 1.1 */}
          <div className='flex flex-col'>
            <div className='text-[#00b206] text-sm font-medium font-poppins uppercase leading-[14px] tracking-tight mb-2'>
              Welcome to shopery
            </div>
            <div className='w-[596px] text-[#191919] text-7xl font-semibold font-poppins leading-[86.40px] mb-7'>
              Fresh & Healthy
              <br />
              Organic Food
            </div>
            <div className='w-full flex flex-col gap-3 mb-8'>
              <div>
                <span className='text-[#191919] text-[32px] font-normal font-poppins leading-[38.40px]'>
                  Sale up to{' '}
                </span>
                <span className='text-[#ff8900] text-[32px] font-semibold font-poppins leading-[38.40px]'>
                  30% OFF
                </span>
              </div>
              <div className='text-[#7f7f7f] text-sm font-normal font-poppins leading-[21px]'>
                Free shipping on all your order. we deliver, you enjoy
              </div>
            </div>

            <div className='max-w-[191px] max-h-[51px] px-10 py-4 bg-[#00b206] rounded-[53px] justify-center items-center gap-4 inline-flex'>
              <div className='text-white text-base font-semibold font-poppins leading-tight'>
                Shop now
              </div>
              <img src={group} alt='this is group' className='w-[15px] h-3 ' />
            </div>
          </div>

          {/* 1.2 */}
          <div className='max-w-[819.17px] max-h-[484.52px]'>
            <img src={fruit} alt='this is fruit' />
          </div>
        </div>

        {/* 2 */}
        <div className='w-full max-w-[90%] sm:max-w-[1400px] p-6 sm:p-10 bg-white rounded-lg shadow flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-0 bottom-[-64px] absolute'>
          {serviceData.map((service, index) => (
            <div
              key={index}
              className='w-full sm:w-auto flex justify-center items-center gap-4 p-2 sm:p-0'
            >
              <img
                src={service.icon}
                alt={`icon for ${service.title}`}
                className='w-8 h-8 sm:w-10 sm:h-10'
              />
              <div className='flex flex-col items-start text-center sm:text-left'>
                <div className='w-full text-[#191919] text-sm sm:text-base font-semibold font-poppins leading-tight'>
                  {service.title}
                </div>
                <div className='w-full text-[#999999] text-xs sm:text-sm font-normal font-poppins leading-[21px]'>
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBG;
