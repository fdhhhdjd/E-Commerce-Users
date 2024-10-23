const ContactInput = () => {
  return (
    <div className='w-full h-full bg-white rounded-lg shadow-2xl  flex flex-col gap-6 pt-[44px] px-[20px] md:px-[50px] pb-[50px]'>
      {/* 1 */}
      <div className='flex flex-col gap-2'>
        {/* 1.1 */}
        <div className="text-[#191919] text-2xl font-semibold font-['Poppins'] leading-9">
          Just Say Hello!
        </div>
        {/* 1.2 */}
        <div className="w-full md:w-[486px] text-[#7f7f7f] text-sm font-normal font-['Poppins'] leading-[21px]">
          Do you fancy saying hi to me or you want to get started with your
          project and you need my help? Feel free to contact me.
        </div>
      </div>

      {/* 2 */}
      <div className='flex flex-col gap-4'>
        {/* 2.1 */}
        <div className='flex flex-col md:flex-row gap-4'>
          <input
            type='text'
            className='w-full md:max-w-[434px] h-[49px] pl-4 pr-4 py-3.5 bg-white rounded-md border border-[#e6e6e6] text-[#666666] text-base font-normal font-poppins  leading-tight'
            placeholder='Template Cookie'
          />
          <input
            type='email'
            className='w-full md:w-[434px] h-[49px] pl-4 pr-4 py-3.5 bg-white rounded-md border border-[#e6e6e6] text-[#666666] text-base font-normal font-poppins  leading-tight'
            placeholder='nguyentientai@gmail.com'
          />
        </div>

        {/* 2.2 */}
        <input
          type='text'
          className='w-full md:max-w-[884px] h-[49px] pl-4 pr-4 py-3.5 bg-white rounded-md border border-[#00b206] text-[#191919] text-base font-normal font-poppins  leading-tight'
          placeholder='Hello|'
        />

        {/* 2.3 */}
        <textarea
          className='w-full md:max-w-[884px] h-[98px] pl-4 pr-4 pt-3.5 pb-[20px] bg-white rounded-md border border-[#e6e6e6] text-[#999999] text-base font-normal font-poppins  leading-tight'
          placeholder='Subjects'
        ></textarea>
      </div>

      {/* 3 */}
      <div className='flex'>
        <button className='h-[51px] w-full md:w-auto px-10 py-4 bg-[#00b206] rounded-[43px] justify-center items-center gap-4 inline-flex'>
          <span className='text-white text-base font-semibold font-poppins leading-tight'>
            Send Message
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactInput;
