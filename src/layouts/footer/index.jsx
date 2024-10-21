import logo from '@/assets/icons/logo/logo.svg';
import PaymentLogos from '@/components/FooterSections/PaymentLogos';

const Footer = () => {
  return (
    <div className='w-full h-[368px] pt-[60px] bg-[#191919] flex-col justify-center items-start gap-[60px] inline-flex md:px-[100px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
      <div className='w-[1248px] h-[168px] relative'>
        <div className='h-[166px] left-0 top-[2px] absolute flex-col justify-start items-start gap-4 inline-flex'>
          <div className='justify-start items-center gap-2 inline-flex'>
            <div className='w-8 h-8 '>
              <img src={logo} alt='this is logo' />
            </div>
            <div className="text-white text-[32px] font-medium font-['Poppins'] leading-[38px]">
              Ecobazar
            </div>
          </div>
          <div className="w-[336px] text-[#7f7f7f] text-sm font-normal font-['Poppins'] leading-[21px]">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </div>
          <div className='justify-start items-center gap-4 inline-flex'>
            <div className='py-1.5 bg-[#191919] shadow justify-center items-center gap-2.5 flex'>
              <div className="text-white text-sm font-medium font-['Poppins'] leading-[21px]">
                (219) 555-0114
              </div>
            </div>
            <div className="text-[#7f7f7f] text-base font-normal font-['Poppins'] leading-normal">
              or
            </div>
            <div className='py-1.5 bg-[#191919] shadow justify-center items-center gap-2.5 flex'>
              <div className="text-white text-sm font-medium font-['Poppins'] leading-[21px]">
                Proxy@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className='h-[164px] left-[448px] top-0 absolute flex-col justify-start items-start gap-5 inline-flex'>
          <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
            My Account
          </div>
          <div className='flex-col justify-start items-start gap-3 flex'>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              My Account
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Order History
            </div>
            <div className="text-white text-sm font-normal font-['Poppins'] leading-[21px]">
              Shoping Cart
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Wishlist
            </div>
          </div>
        </div>
        <div className='h-[164px] left-[672px] top-0 absolute flex-col justify-start items-start gap-5 inline-flex'>
          <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
            Helps
          </div>
          <div className='flex-col justify-start items-start gap-3 flex'>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Contact
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Faqs
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Terms & Condition
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Privacy Policy
            </div>
          </div>
        </div>
        <div className='h-[164px] left-[897px] top-0 absolute flex-col justify-start items-start gap-5 inline-flex'>
          <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
            Proxy
          </div>
          <div className='flex-col justify-start items-start gap-3 flex'>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              About
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Shop
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Product
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Track Order
            </div>
          </div>
        </div>
        <div className='h-[164px] left-[1120px] top-0 absolute flex-col justify-start items-start gap-5 inline-flex'>
          <div className="text-white text-base font-medium font-['Poppins'] leading-normal">
            Categories
          </div>
          <div className='flex-col justify-start items-start gap-3 flex'>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Fruit & Vegetables
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Meat & Fish
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Bread & Bakery
            </div>
            <div className="text-[#999999] text-sm font-normal font-['Poppins'] leading-[21px]">
              Beauty & Health
            </div>
          </div>
        </div>
      </div>
      {/* Payment Methods */}
      <PaymentLogos />
    </div>
  );
};

export default Footer;
