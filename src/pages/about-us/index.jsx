import AboutDeliveryThree from './sections/AboutDeliveryThree';
import AboutMeTwo from './sections/AboutMeTwo';
import AboutTeamFour from './sections/AboutTeamFour';
import AboutTestimonialFive from './sections/AboutTestimonialFive';
import AboutUsOne from './sections/AboutUsOne';

const AboutUs = () => {
  return (
    <div className='w-full h-full flex flex-col '>
      <AboutUsOne />
      <AboutMeTwo />
      <AboutDeliveryThree />
      <AboutTeamFour />
      <AboutTestimonialFive />
    </div>
  );
};

export default AboutUs;
