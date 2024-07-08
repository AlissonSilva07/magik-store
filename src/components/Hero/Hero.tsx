import HeroImg from '../../assets/img hero.png'
import ArrowRight from '../../assets/Hero/arrow-right.png'
import ArrowRight2 from '../../assets/Hero/arrow-right2.png'

export function Hero () {
  return (
    <div className='pt-20 flex flex-col lg:flex-row items-center'>
      <img src={HeroImg} alt="A woman carrying bags and pointing to her left side." className='w-full h-[427px] md:h-[449px] lg:w-1/2 lg:h-[800px] object-cover border-b border-preto' />
      <div className='flex p-4 md:p-8 flex-col items-center lg:items-start gap-4'>
        <p className='font-black text-5xl md:text-[64px] text-center lg:text-start'>WANNA KNOW WHAT’S SO <span className='text-roxo'>MAGIK!</span> ABOUT SHOPPING FOR STUFF?</p>
        <p>You are one click away from finding out. Hop in!</p>
        <button className='group py-2 px-3 bg-white flex items-center gap-2 rounded-full border border-preto hover:bg-preto hover:text-branco'>
            <p>See Products</p>
            <img src={ArrowRight} alt="Go" className='block group-hover:hidden' />
            <img src={ArrowRight2} alt="Go" className='hidden group-hover:block' />
        </button>
      </div>
    </div>
  );
}
