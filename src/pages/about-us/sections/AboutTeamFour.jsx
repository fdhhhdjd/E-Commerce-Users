import facebook from '@/assets/images/about/Facebook.svg';
import instagram from '@/assets/images/about/Instagram.svg';
import person1 from '@/assets/images/about/Person1.png';
import person2 from '@/assets/images/about/Person2.png';
import person3 from '@/assets/images/about/Person3.png';
import person4 from '@/assets/images/about/Person4.png';
import pinterest from '@/assets/images/about/Pinterest.svg';
import twitter from '@/assets/images/about/Twitter.svg';

const AboutTeamFour = () => {
  const personData = [
    {
      image: person1,
      name: 'Jenny Wilson',
      title: 'Ceo & Founder',
      socialIcons: [
        { icon: facebook, alt: 'Facebook' },
        { icon: twitter, alt: 'Twitter' },
        { icon: pinterest, alt: 'Pinterest' },
        { icon: instagram, alt: 'Instagram' }
      ]
    },
    {
      image: person2,
      name: 'Jane Cooper',
      title: 'Worker',
      socialIcons: []
    },
    {
      image: person3,
      name: 'Cody Fisher',
      title: 'Security Guard',
      socialIcons: []
    },
    {
      image: person4,
      name: 'Robert Fox',
      title: 'Senior Farmer Manager',
      socialIcons: []
    }
  ];
  return (
    <div className='w-full h-full flex flex-col mt-[70px] mb-20 gap-[50px] lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
      {/* 1 */}
      <div className='w-full h-full flex flex-col items-center gap-3'>
        <div className='text-center text-[#191919] text-5xl font-semibold font-poppins leading-[57.60px]'>
          Our Awesome Team
        </div>
        <div className='max-w-[640px] text-center text-[#666666] text-base font-normal font-poppins leading-normal'>
          Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
          Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
          mi.
        </div>
      </div>

      {/* 2 */}
      <div className='flex gap-6 max-w-[312px] max-h-[368px] bg-white'>
        {personData.map((person, index) => (
          <div
            key={index}
            className='flex flex-col gap-4 rounded-lg hover:shadow-2xl transition-shadow duration-300'
          >
            <div className='w-[312px] h-[280px] relative bg-black/50 rounded-tl-lg rounded-tr-lg'>
              {/* Hình ảnh */}
              <img
                src={person.image}
                alt={`This is ${person.name}`}
                className='w-full h-full object-cover'
              />

              {/* Các biểu tượng mạng xã hội */}
              <div className='flex gap-1 justify-center items-center absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100'>
                {person.socialIcons.map((social, index) => (
                  <div key={index} className='w-10 h-10 relative'>
                    {/* Hover effect to change the background color */}
                    <div className='w-10 h-10 absolute flex justify-center items-center rounded-full transition-colors duration-300 hover:bg-[#00b206]'>
                      <img
                        src={social.icon}
                        alt={`this is ${social.alt}`}
                        className='w-[18px] h-[18px]'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Thông tin cá nhân */}
            <div className='flex flex-col gap-1 mx-5 mb-5'>
              <div className='w-[272px] text-[#191919] text-lg font-medium font-poppins leading-[27px]'>
                {person.name}
              </div>
              <div className='w-[272px] text-[#7f7f7f] text-sm font-normal font-poppins leading-[21px]'>
                {person.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTeamFour;
