import AboutCompanyLogo from './sections/AboutCompanyLogo';
import AboutDelivery from './sections/AboutDelivery';
import AboutMe from './sections/AboutMe';
import AboutOur from './sections/AboutOur';
import AboutTeam from './sections/AboutTeam';
import AboutTestimonial from './sections/AboutTestimonial';

const AboutUs = () => {
  return (
    <div className='w-full h-full flex flex-col '>
      <AboutOur />
      <AboutMe />
      <AboutDelivery />
      <AboutTeam />
      <AboutTestimonial />
      <AboutCompanyLogo />
    </div>
  );
};

export default AboutUs;
