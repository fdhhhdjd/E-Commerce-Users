const HomeHotDeal = () => {
  return (
    <div className='w-[312px] h-[116px] bg-white rounded-md shadow border border-[#2c732f] justify-start items-start inline-flex'>
      <div className='p-[5px] justify-start items-start flex' />
      <div className='px-3 pt-6 pb-[25px] flex-col justify-center items-start gap-1.5 inline-flex'>
        <div className='flex-col justify-start items-start flex'>
          <div className="w-72 text-[#2c732f] text-sm font-normal font-['Poppins'] leading-[21px]">
            Green Apple
          </div>
          <div className='justify-start items-start gap-1 inline-flex'>
            <div className="text-[#191919] text-base font-medium font-['Poppins'] leading-normal">
              $14.99
            </div>
          </div>
        </div>
        <div className='justify-start items-start inline-flex'>
          <div className='w-4 h-4 relative' />
          <div className='w-4 h-4 relative' />
          <div className='w-4 h-4 relative' />
          <div className='w-4 h-4 relative' />
          <div className='w-4 h-4 relative' />
        </div>
      </div>
    </div>
  );
};

export default HomeHotDeal;
