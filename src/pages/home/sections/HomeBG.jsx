import delivery from '@/assets/images/home/Delivery.svg';
import fruit from '@/assets/images/home/Fruit.png';
import group from '@/assets/images/home/Group.svg';
import headPhones from '@/assets/images/home/HeadPhones.svg';
import packageIcon from '@/assets/images/home/Package.svg';
import shopping from '@/assets/images/home/ShoppingBag.svg';

const HomeBG = () => {
  return (
    <div className='w-full h-[1087px] flex flex-col items-center pt-6 gap-[100px]'>
      {/* 1 */}
      <div className='w-[1520px] h-[804px] bg-[#edf2ed] rounded-lg flex flex-col justify-center items-center relative'>
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
        <div className='w-[1400px] h-32 p-10 bg-white rounded-lg shadow justify-between items-center inline-flex bottom-[-64px] absolute'>
          <div className='justify-center items-center gap-4 flex'>
            <img src={delivery} alt='this is delivery' className='w-10 h-10' />
            <div className='flex-col justify-center items-start gap-2 inline-flex'>
              <div className="w-[250px] text-[#191919] text-base font-semibold font-['Poppins'] leading-tight">
                Free Shipping
              </div>
              <div className="w-[250px] text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
                Free shipping on all your order
              </div>
            </div>
          </div>
          <div className='justify-center items-center gap-4 flex'>
            <img
              src={headPhones}
              alt='this is headPhones'
              className='w-10 h-10'
            />

            <div className='flex-col justify-center items-start gap-2 inline-flex'>
              <div className="w-[250px] text-[#191919] text-base font-semibold font-['Poppins'] leading-tight">
                Customer Support 24/7
              </div>
              <div className="w-[250px] text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
                Instant access to Support
              </div>
            </div>
          </div>
          <div className='justify-center items-center gap-4 flex'>
            <img src={shopping} alt='this is shopping' className='w-10 h-10' />

            <div className='flex-col justify-center items-start gap-2 inline-flex'>
              <div className="w-[250px] text-[#191919] text-base font-semibold font-['Poppins'] leading-tight">
                100% Secure Payment
              </div>
              <div className="w-[250px] text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
                We ensure your money is save
              </div>
            </div>
          </div>
          <div className='justify-center items-center gap-4 flex'>
            <img
              src={packageIcon}
              alt='this is package'
              className='w-10 h-10'
            />
            <div className='flex-col justify-center items-start gap-2 inline-flex'>
              <div className="w-[250px] text-[#191919] text-base font-semibold font-['Poppins'] leading-tight">
                Money-Back Guarantee
              </div>
              <div className="w-[250px] text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
                30 Days Money-Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBG;
