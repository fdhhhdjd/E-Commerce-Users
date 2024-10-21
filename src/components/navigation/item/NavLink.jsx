const NavLink = () => {
  return (
    <div className='w-[1920px] h-[60px] px-[300px] py-4 justify-between items-center inline-flex'>
      <div className='justify-start items-center gap-8 flex'>
        <div className='justify-start items-center gap-1 flex'>
          <div className="text-[#00b206] text-sm font-medium font-['Poppins'] leading-[21px]">
            Home
          </div>
          <div className='w-4 h-4 px-[3.33px] origin-top-left rotate-180 justify-center items-center flex' />
        </div>
        <div className='justify-start items-center gap-1 flex'>
          <div className="text-[#666666] text-sm font-medium font-['Poppins'] leading-[21px]">
            Shop
          </div>
          <div className='w-4 h-4 px-[3.33px] origin-top-left rotate-180 justify-center items-center flex' />
        </div>
        <div className='justify-start items-center gap-1 flex'>
          <div className="text-[#666666] text-sm font-medium font-['Poppins'] leading-[21px]">
            Pages
          </div>
          <div className='w-4 h-4 px-[3.33px] origin-top-left rotate-180 justify-center items-center flex' />
        </div>
        <div className='justify-start items-center gap-1 flex'>
          <div className="text-[#666666] text-sm font-medium font-['Poppins'] leading-[21px]">
            Blog
          </div>
          <div className='w-4 h-4 px-[3.33px] origin-top-left rotate-180 justify-center items-center flex' />
        </div>
        <div className='justify-start items-center gap-1 flex'>
          <div className="text-[#666666] text-sm font-medium font-['Poppins'] leading-[21px]">
            About Us
          </div>
        </div>
        <div className='justify-start items-center gap-1 flex'>
          <div className="text-[#666666] text-sm font-medium font-['Poppins'] leading-[21px]">
            Contact Us
          </div>
        </div>
      </div>
      <div className='justify-start items-center gap-2 flex'>
        <div className='w-7 h-7 relative'>
          <div className='w-[20.09px] h-[20.09px] left-[4.38px] top-[3.54px] absolute'></div>
        </div>
        <div className="text-[#191919] text-sm font-medium font-['Poppins'] leading-[21px]">
          (219) 555-0114
        </div>
      </div>
    </div>
  );
};

export default NavLink;
