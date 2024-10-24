import background from '@/assets/images/about/BG.png';
import delivery from '@/assets/images/about/Delivery.svg';
import headphones from '@/assets/images/about/Headphones.svg';
import image1 from '@/assets/images/about/Image1.png';
import leaf from '@/assets/images/about/Leaf.svg';
import box from '@/assets/images/about/Package.svg';
import shopping from '@/assets/images/about/ShoppingBag.svg';
import star from '@/assets/images/about/Star.svg';

const AboutMe = () => {
  const features = [
    {
      icon: leaf,
      title: '100% Organic food',
      description: '100% healthy & Fresh food.'
    },
    {
      icon: star,
      title: 'Customer Feedback',
      description: 'Our happy customer'
    },
    {
      icon: delivery,
      title: 'Free Shipping',
      description: 'Free shipping with discount'
    }
  ];

  const features2 = [
    {
      icon: headphones,
      title: 'Great Support 24/7',
      description: 'Instant access to Contact'
    },
    {
      icon: shopping,
      title: '100% Secure Payment',
      description: 'We ensure your money is save'
    },
    {
      icon: box,
      title: '100% Organic Food',
      description: '100% healthy & Fresh food.'
    }
  ];

  return (
    <div className='w-full h-full flex flex-col lg:flex-row'>
      {/* 1 */}
      <div className='relative'>
        <img
          src={background}
          alt='this is background'
          className='max-w-[1129px] max-h-[685px] bg-gradient-to-l from-white to-white'
        />

        <img
          className='max-w-[745px] max-h-[685px] absolute top-0 left-0 center z-10'
          src={image1}
          alt='this is image about us'
        />
      </div>
      {/* 2 */}
      <div className='flex flex-col gap-6 '>
        {/* 2.1 */}
        <div className='flex flex-col gap-5'>
          <div className='text-[#002602] text-[56px] font-semibold font-poppins leading-[67.20px]'>
            100% Trusted
            <br />
            Organic Food Store
          </div>
          <div className="max-w-[570px] text-[#7f7f7f] text-base font-normal font-['Poppins'] leading-normal">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.{' '}
          </div>
        </div>

        {/* 2.2 */}
        <div className='flex gap-6'>
          {/* 2.2.1 */}
          <div className='flex flex-col gap-6'>
            {features.map((feature, index) => (
              <div key={index} className='flex gap-4'>
                <div className='max-h-[72px] p-4 bg-[#00b206]/10 rounded-full flex-col justify-start items-start inline-flex'>
                  <img
                    src={feature.icon}
                    alt={`icon-${index}`}
                    className='max-w-10 max-h-10'
                  />
                </div>
                <div className='flex flex-col justify-center'>
                  <div className='max-w-56 text-[#191919] text-lg font-medium font-poppins leading-[27px]'>
                    {feature.title}
                  </div>
                  <div className='max-w-56 text-[#7f7f7f] text-sm font-normal font-poppins leading-[21px]'>
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2.2.2 */}
          <div className='flex flex-col gap-6'>
            {features2.map((feature, index) => (
              <div key={index} className='flex gap-4'>
                <div className='max-h-[72px] p-4 bg-[#00b206]/10 rounded-full flex-col justify-start items-start inline-flex'>
                  <img
                    src={feature.icon}
                    alt={`icon-${index}`}
                    className='max-w-10 max-h-10'
                  />
                </div>
                <div className='flex flex-col justify-center'>
                  <div className='max-w-56 text-[#191919] text-lg font-medium font-poppins leading-[27px]'>
                    {feature.title}
                  </div>
                  <div className='max-w-56 text-[#7f7f7f] text-sm font-normal font-poppins leading-[21px]'>
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
