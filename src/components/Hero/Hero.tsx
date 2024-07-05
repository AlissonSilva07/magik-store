import HeroImg from '../../assets/img hero.png'

export interface IHeroProps {
}

export function Hero (props: IHeroProps) {
  return (
    <div className='pt-20 flex flex-col lg:flex-row items-center'>
      <img src={HeroImg} alt="A woman carrying bags and pointing to her left side." className='w-full h-[427px] md:h-[449px] lg:w-1/2 lg:h-[800px] object-cover border-b border-preto' />
      <div className='flex p-4 md:p-8 flex-col items-center lg:items-start gap-4'>
        <p className='font-black text-5xl md:text-[64px] text-center lg:text-start'>WANNA KNOW WHAT’S SO <span className='text-roxo'>MAGIK!</span> ABOUT SHOPPING FOR STUFF?</p>
        <p>You are one click away from finding out. Hop in!</p>
        <button className='py-2 px-3 bg-white flex items-center gap-2 rounded-full border border-preto'>
            <p>See Products</p>
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3.75L16.25 9M16.25 9L11 14.25M16.25 9L2.75 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
    </div>
  );
}
