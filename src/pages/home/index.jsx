import HomeBG from './sections/HomeBG';
import HomeFeatured from './sections/HomeFeatured';
import HomeTopCategory from './sections/HomeTopCategory';

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-[100px]'>
      {/* 1 */}
      <HomeBG />

      {/* 2 */}
      <HomeFeatured />

      {/* 3 */}
      <HomeTopCategory />
    </div>
  );
};

export default HomePage;
