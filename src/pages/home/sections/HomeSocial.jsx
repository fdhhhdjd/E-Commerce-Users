import instagram from '@/assets/images/home/Instagram.svg';
import InstagramPost from '@/assets/images/home/InstagramPost.png';

const HomeSocial = () => {
  const posts = Array(6).fill(InstagramPost);

  return (
    <div className='w-[1320px] h-[470px] relative flex flex-col items-start justify-start gap-8'>
      <div className='w-full flex justify-center absolute text-center text-[#191919] text-[32px] font-semibold font-poppins leading-[38.40px]'>
        <p>Follow us on Instagram</p>
      </div>
      <div className='flex gap-8 mt-[70px]'>
        {posts.map((post, index) => (
          <div
            key={index}
            className='w-[200px] h-[200px] relative rounded-[10px] overflow-hidden group'
          >
            <img
              src={post}
              className='w-full h-full object-cover rounded-[10px]'
            />
            <div className='absolute inset-0 bg-[#2b562e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px] flex items-center justify-center'>
              <img src={instagram} className='w-8 h-8' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSocial;
