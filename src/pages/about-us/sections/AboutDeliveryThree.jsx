import arrowRight from '@/assets/images/about/ArrowRight.svg';
import check from '@/assets/images/about/Check.svg';
import delivery from '@/assets/images/about/Delivery.png';
const AboutDeliveryThree = () => {
  const features = [
    'Sed in metus pellentesque.',
    'Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.',
    'Maecenas ut nunc fringilla erat varius.'
  ];
  return (
    <div className='w-full h-full flex flex-col lg:flex-row gap-[29px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px] mt-20'>
      {/* 1 */}
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-6'>
          <div className='max-w-[552px] text-[#191919] text-5xl font-semibold font-poppins leading-[57.60px]'>
            We Delivered, You Enjoy Your Order.
          </div>
          <div className='w-[536px] text-[#666666] text-base font-normal font-poppins leading-normal'>
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='flex gap-2 justify-between items-center'
            >
              <div className='w-5 h-5 bg-[#00b206]/10 rounded-full flex justify-center items-center'>
                <img
                  src={check}
                  alt={`check-${index}`}
                  className='w-[12.50px] h-[12.50px]'
                />
              </div>
              <div className='w-[508px] text-[#666666] text-sm font-normal font-poppins leading-tight'>
                {feature}
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className=' max-h-[51px] px-10 py-4 bg-[#00b206] rounded-[43px] justify-center items-center gap-4 inline-flex'>
            <div className='text-white text-base font-semibold font-poppins leading-tight'>
              Shop Now
            </div>
            <div className='max-w-[15px] max-h-3'>
              <img
                src={arrowRight}
                alt='this is arrow1'
                className='max-w-[15px]'
              />
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div>
        <img
          src={delivery}
          alt='this is image delivery'
          className='max-w-[895px] max-h-[606px]'
        />
      </div>
    </div>
  );
};

export default AboutDeliveryThree;
