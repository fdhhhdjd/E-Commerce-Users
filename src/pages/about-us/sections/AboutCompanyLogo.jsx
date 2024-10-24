import company1 from '@/assets/images/about/Company1.svg';
import company2 from '@/assets/images/about/Company2.svg';
import company3 from '@/assets/images/about/Company3.svg';
import company5 from '@/assets/images/about/Company4.svg';
import company4 from '@/assets/images/about/Company5.svg';
import company6 from '@/assets/images/about/Company6.svg';
import company7 from '@/assets/images/about/Company7.svg';

const AboutCompanyLogo = () => {
  const companies = [
    { id: 1, logo: company1, alt: 'This is company 1' },
    { id: 2, logo: company2, alt: 'This is company 2' },
    { id: 3, logo: company3, alt: 'This is company 3' },
    { id: 4, logo: company4, alt: 'This is company 4' },
    { id: 5, logo: company5, alt: 'This is company 5' },
    { id: 6, logo: company6, alt: 'This is company 6' },
    { id: 7, logo: company7, alt: 'This is company 7' }
  ];

  return (
    <div className='w-full max-h-[192px] bg-white'>
      <div className='w-full h-48 flex justify-start items-center lg:px-[150px] xl:px-[200px] 2xl:px-[300px]'>
        <div className='flex gap-20'>
          {companies.map((company, index) => (
            <div className='flex gap-20' key={company.id}>
              <img
                src={company.logo}
                alt={company.alt}
                className='w-[95.50px]'
              />
              {index < companies.length - 1 && (
                <div className='w-8 h-[0px] origin-top-left rotate-90 border border-[#e6e6e6]'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyLogo;
