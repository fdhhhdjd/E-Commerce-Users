import image1 from '@/assets/images/about/Image.png';

const AboutUsOne = () => {
  return (
    <div className='flex flex-col lg:flex-row px-4 lg:px-[150px] xl:px-[200px] 2xl:px-[300px] gap-6 lg:gap-[58px] mt-10 lg:mt-20 mb-20'>
      {/* 1 */}
      <div className='flex flex-col justify-center'>
        <div className='max-w-full lg:max-w-[607px] text-[#191919] text-[32px] lg:text-[56px] font-semibold font-poppins leading-[40px] lg:leading-[67.20px]'>
          100% Trusted Organic Food Store
        </div>
        <div className="max-w-full lg:max-w-[590px] text-[#666666] text-base lg:text-lg font-normal font-['Poppins'] leading-[24px] lg:leading-[27px] mt-4 lg:mt-6">
          Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
          laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
          Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a
          eros non massa vulputate ornare. Vivamus ornare commodo ante, at
          commodo felis congue vitae.
        </div>
      </div>

      {/* 2 */}
      <div className='w-full lg:w-auto'>
        <img
          className='w-full lg:w-[716px] h-auto lg:h-[492px] rounded-lg'
          src={image1}
          alt='this is image about us'
        />
      </div>
    </div>
  );
};

export default AboutUsOne;
