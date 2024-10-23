import background from '@/assets/images/about/BG.png';
import image1 from '@/assets/images/about/Image1.png';
const AboutMeTwo = () => {
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
      </div>
    </div>
  );
};

export default AboutMeTwo;
