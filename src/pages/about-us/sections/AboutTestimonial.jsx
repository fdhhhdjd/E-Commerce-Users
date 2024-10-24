import aoorwa from '@/assets/images/about/Aoorw.svg';
import aoorwa1 from '@/assets/images/about/Aoorw1.svg';
import person1 from '@/assets/images/about/Person1.svg';
import person2 from '@/assets/images/about/Person2.svg';
import person3 from '@/assets/images/about/Person3.svg';
import star1 from '@/assets/images/about/Star1.svg';
import vector from '@/assets/images/about/Vector.svg';

const AboutTestimonial = () => {
  const reviews = [
    {
      id: 1,
      image: vector,
      content:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.',
      name: 'Robert Fox',
      role: 'Customer',
      stars: 5,
      personImage: person2
    },
    {
      id: 2,
      image: vector,
      content:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.',
      name: 'Dianne Russell',
      role: 'Customer',
      stars: 4,
      personImage: person1
    },
    {
      id: 3,
      image: vector,
      content:
        'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget.',
      name: 'Eleanor Pena',
      role: 'Customer',
      stars: 4,
      personImage: person3
    }
  ];

  return (
    <div className='flex flex-col py-[100px] gap-[50px] bg-[#f2f2f2] lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
      {/* 1 */}
      <div className='flex justify-between'>
        <div className='text-center text-[#191919] text-5xl font-semibold font-poppins leading-[57.60px]'>
          Client Testimonail
        </div>
        <div className='flex gap-3'>
          <div className='w-[45px] h-[45px]'>
            <img src={aoorwa} alt='this is aoorwa' />
          </div>
          <div className='w-[45px] h-[45px]'>
            <img src={aoorwa1} alt='this is aoorwa' />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className='flex gap-6'>
        {reviews.map(review => (
          <div
            key={review.id}
            className='max-w-[424px] max-h-[254px] p-6 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex'
          >
            <div>
              <img src={review.image} alt='this is vector' />
            </div>

            <div className='max-w-[376px] text-[#4c4c4c] text-sm font-normal font-poppins leading-[21px]'>
              {review.content}
            </div>

            <div className='w-full h-full flex justify-between items-center'>
              <div className='flex gap-3 justify-center items-center'>
                <div>
                  <img
                    src={review.personImage}
                    alt={`this is ${review.name}`}
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <div className='text-center text-[#191919] text-base font-medium font-poppins leading-normal'>
                    {review.name}
                  </div>
                  <div className='text-center text-[#999999] text-sm font-normal font-poppins leading-[21px]'>
                    {review.role}
                  </div>
                </div>
              </div>
              <div className='flex'>
                {Array.from({ length: review.stars }, (_, index) => (
                  <img key={index} src={star1} alt='this is star1' />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTestimonial;
