import email from '@/assets/images/contact/Email.svg';
import map from '@/assets/images/contact/Map.svg';
import phone from '@/assets/images/contact/Phone.svg';

const ContactInfo = () => {
  return (
    <div className='max-h-[507px] px-5 bg-while rounded-lg shadow-2xl flex-col justify-start items-start inline-flex'>
      <div className='max-h-[507px] px-5  flex-col justify-start items-start inline-flex'>
        <div className='py-6 rounded-[10px] flex-col justify-start items-center gap-4 flex'>
          <div className='max-w-[51px] max-h-[51px]'>
            <img src={map} alt='map' />
          </div>
          <div className='max-w-[272px] text-center text-[#333333] text-base font-normal font-poppins leading-7'>
            2715 Ash Dr. San Jose, South Dakota 83475
          </div>
        </div>
        <div className='w-full h-[1px] border-t border-[#e6e6e6]'></div>
        <div className='py-6 rounded-[10px] flex-col justify-start items-center gap-4 flex'>
          <div className='max-w-[51px] max-h-[51px] '>
            <img src={email} alt='email' />
          </div>
          <div className='w-[272px] text-center text-[#333333] text-base font-normal font-poppins leading-7'>
            Proxy@gmail.com
            <br />
            Help.proxy@gmail.com
          </div>
        </div>
        <div className='w-full h-[1px] border-t border-[#e6e6e6]'></div>
        <div className='py-6 rounded-[10px] flex-col justify-start items-center gap-4 flex'>
          <div className='max-w-[51px] max-h-[51px] '>
            <img src={phone} alt='phone' />
          </div>
          <div className='w-[272px] text-center text-[#333333] text-base font-normal font-poppins leading-7'>
            (219) 555-0114
            <br />
            (164) 333-0487
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
