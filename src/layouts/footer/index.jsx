import logo from '@/assets/icons/logo/logo.svg';
import PaymentLogos from '@/components/FooterSections/PaymentLogos';

const Footer = () => {
  const accountItems = [
    { label: 'My Account', color: 'text-graySecondary' },
    { label: 'Order History', color: 'text-graySecondary' },
    { label: 'Shopping Cart', color: 'text-white' },
    { label: 'Wishlist', color: 'text-graySecondary' }
  ];

  const helpItems = [
    { label: 'Contact', color: 'text-graySecondary' },
    { label: 'FAQs', color: 'text-graySecondary' },
    { label: 'Terms & Conditions', color: 'text-graySecondary' },
    { label: 'Privacy Policy', color: 'text-graySecondary' }
  ];

  const proxyItems = [
    { label: 'About', color: 'text-graySecondary' },
    { label: 'Shop', color: 'text-graySecondary' },
    { label: 'Product', color: 'text-graySecondary' },
    { label: 'Track Order', color: 'text-graySecondary' }
  ];

  const categoryItems = [
    { label: 'Fruit & Vegetables', color: 'text-graySecondary' },
    { label: 'Meat & Fish', color: 'text-graySecondary' },
    { label: 'Bread & Bakery', color: 'text-graySecondary' },
    { label: 'Beauty & Health', color: 'text-graySecondary' }
  ];
  return (
    <div className='w-full h-full pt-[60px] flex flex-col gap-5 justify-between bg-[#191919] md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
      <div className='flex flex-col md:flex-row justify-between gap-4'>
        <div className='flex-col justify-start gap-4 flex'>
          <div className='justify-start items-center gap-2 flex'>
            <div className='w-8 h-8'>
              <img src={logo} alt='this is logo' />
            </div>
            <div className='text-white text-[32px] font-medium font-poppins leading-[38px]'>
              Ecobazar
            </div>
          </div>
          <div className='w-[333px] text-[#7f7f7f] text-sm font-normal font-poppins leading-[21px]'>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </div>
          <div className='justify-start items-center gap-4 flex'>
            <div className='py-1.5 bg-[#191919] shadow flex-col items-center'>
              <div className='text-white text-sm font-medium font-poppins leading-[21px] mb-2'>
                (219) 555-0114
              </div>
              <div className='flex-grow h-auto border-b border-greenPrimary'></div>
            </div>
            <div className='text-[#7f7f7f] text-base font-normal font-poppins leading-normal'>
              or
            </div>
            <div className='py-1.5 bg-[#191919] shadow flex-col'>
              <div className='text-white text-sm font-medium font-poppins leading-[21px] mb-2'>
                Proxy@gmail.com
              </div>
              <div className='flex-grow h-auto border-b border-greenPrimary'></div>
            </div>
          </div>
        </div>

        {/* Adjust the flex layout based on screen size */}
        <div className='w-full h-full flex flex-row md:flex-row justify-around text-sm gap-2'>
          {/* My Account Section */}
          <div className='flex-col justify-start gap-5 flex'>
            <div className='text-white md:text-base sm:text-sm font-medium font-poppins leading-normal'>
              My Account
            </div>
            <div className='flex-col justify-start gap-3 flex'>
              {accountItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} text-sm font-normal font-poppins leading-[21px]`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Helps Section */}
          <div className='flex-col justify-start gap-5 flex'>
            <div className='text-white md:text-base sm:text-sm font-medium font-poppins leading-normal'>
              Helps
            </div>
            <div className='flex-col justify-start gap-3 flex'>
              {helpItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} text-sm font-normal font-poppins leading-[21px]`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Proxy Section */}
          <div className='flex-col justify-start gap-5 flex'>
            <div className='text-white font-medium font-poppins leading-normal md:text-base sm:text-sm'>
              Proxy
            </div>
            <div className='flex-col justify-start gap-3 flex'>
              {proxyItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} text-sm font-normal font-poppins leading-[21px]`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Categories Section */}
          <div className='flex-col justify-start gap-5 flex'>
            <div className='text-white font-medium font-poppins leading-normal md:text-base sm:text-sm'>
              Categories
            </div>
            <div className='flex-col justify-start gap-3 flex'>
              {categoryItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} text-sm font-normal font-poppins leading-[21px]`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-graySecondary'></div>

      {/* Payment Methods */}
      <PaymentLogos />
    </div>
  );
};

export default Footer;
