import MapPoint from '@/pages/contact-us/sections/MapPoin';

import ContactInfo from './sections/ContactInfo';
import ContactInput from './sections/ContactInput';

const ContactUs = () => {
  return (
    <div className='w-full h-full flex flex-col mt-20'>
      <div className='w-full h-full flex flex-col items-center lg:flex-row lg:px-[150px] xl:px-[200px] 2xl:px-[300px] mb-20 gap-6'>
        <ContactInfo />
        <ContactInput />
      </div>

      <MapPoint />
    </div>
  );
};

export default ContactUs;
