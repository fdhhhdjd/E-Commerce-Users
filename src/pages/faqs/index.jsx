import imgFaqs from '@/assets/images/faqs/faqs.svg';
import imgPlus from '@/assets/images/faqs/plus.svg';

const FaqsPage = () => {
  return (
    <div className='flex justify-center items-center w-full min-h-screen p-4 md:p-0'>
      <div className='w-full max-w-[648px] h-auto flex flex-col items-start justify-center text-left'>
        <h2 className='w-full max-w-[532px] font-Poppins font-semibold text-[36px] leading-[44.8px] md:text-[48px] md:leading-[57.6px] mb-4'>
          Welcome, Let’s Talk About Our Ecobazar
        </h2>
        <div className='border border-greenPrimary w-full mb-2 rounded-lg'>
          <div className='flex justify-between items-center border-b border-greenPrimary'>
            <p className='text-greenPrimary font-bold p-2 w-full'>
              In elementum est a ante sodales iaculis.
            </p>
            <button>
              <img src={imgPlus} alt='Plus Icon' />
            </button>
          </div>
          <p className='p-2 w-full'>
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </p>
        </div>

        <div className='w-full'>
          {[
            'Etiam lobortis massa eu nibh tempor elementum.',
            'In elementum est a ante sodales iaculis.',
            'Aenean quis quam nec lacus semper dignissim.',
            'Nulla tincidunt eros id tempus accumsan.'
          ].map((text, index) => (
            <div key={index} className='border-b border-gray-200 mb-2'>
              <div className='flex justify-between items-center bg-gray-200 p-2'>
                <p className='font-bold'>{text}</p>
                <button>
                  <img src={imgPlus} alt='Plus Icon' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={imgFaqs} className='hidden md:block w-[741px] h-[808px] ml-4' />
    </div>
  );
};

export default FaqsPage;
