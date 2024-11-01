import HomeBG from './sections/HomeBG';
import HomeFeatured from './sections/HomeFeatured';

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-[100px]'>
      {/* 1 */}
      <HomeBG />
      {/* 2 */}
      <HomeFeatured />
    </div>
  );
};

export default HomePage;
