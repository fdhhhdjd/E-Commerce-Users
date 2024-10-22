import ApplePay from '@/assets/images/footer/ApplePay.svg';
import Discover from '@/assets/images/footer/Discover.svg';
import Lock from '@/assets/images/footer/Lock.svg';
import MasterCard from '@/assets/images/footer/MasterCard.svg';
import Visa from '@/assets/images/footer/Visa.svg';

const PaymentLogos = () => {
  const paymentLogos = [
    {
      src: ApplePay,
      alt: 'Apple Pay',
      width: '32.23px',
      height: '13.79px',
      offsetX: '6.62px',
      offsetY: '9.26px'
    },
    {
      src: Visa,
      alt: 'Visa',
      width: '31.50px',
      height: '10.35px',
      offsetX: '6.35px',
      offsetY: '10.72px'
    },
    {
      src: Discover,
      alt: 'Discover',
      width: '37.56px',
      height: '6.62px',
      offsetX: '3.97px',
      offsetY: '11.91px'
    },
    {
      src: MasterCard,
      alt: 'MasterCard',
      width: '29.59px',
      height: '17.74px',
      offsetX: '7.94px',
      offsetY: '6.66px'
    }
  ];
  return (
    <div className='w-full py-6 bg-blackPrimary shadow flex justify-between items-center'>
      <div className='text-[#7f7f7f] font-normal font-poppins '>
        Ecobazar eCommerce © 2024. All Rights Reserved
      </div>
      <div className='justify-start items-start gap-2 flex'>
        {paymentLogos.map((logo, index) => (
          <div key={index} className='w-[45px] h-[31.76px]'>
            <div className='w-[45px] h-[31.76px] left-0 top-0 flex justify-center items-center'>
              <div className='w-[45px] h-[31.76px] left-0 top-0 bg-blackPrimary rounded-md border border-darkGray' />
              <img
                className={`w-[${logo.width}] h-[${logo.height}] left-[${logo.offsetX}] top-[${logo.offsetY}] absolute`}
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          </div>
        ))}
        <div className='w-[65px] h-8'>
          <div className='w-[65px] h-8 left-0 top-0  bg-blackPrimary rounded-md border border-darkGray flex justify-center flex-col'>
            <div className='flex justify-center items-center'>
              <div className='w-[11px] h-[11px] left-[5px] top-[4px]  bg-blackPrimary'>
                <div className='w-[8.25px] h-[9.17px] left-[1.38px] top-[0.92px]'>
                  <img src={Lock} alt='Secure Payment' />
                </div>
              </div>
              <div className='left-[18px] top-[4px]  text-white text-[11px] font-normal font-poppins leading-[11px]'>
                Secure
              </div>
            </div>
            <div className='w-[65px] left-0 top-[16px] text-center text-white text-xs font-semibold font-poppins leading-3'>
              Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentLogos;
