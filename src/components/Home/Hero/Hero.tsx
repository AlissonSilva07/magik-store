import HeroImg from '../../../assets/img hero.png'
import LogoReduced from '../../../assets/logo reduced.png'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className='pt-20 flex flex-col lg:flex-row items-center'>
      <img src={HeroImg} alt="A woman carrying bags and pointing to her left side." className='w-full h-[427px] md:h-[449px] lg:w-1/2 lg:h-[692px] object-cover lg:border-b lg:border-r lg:border-cinza-border/20' />
      <div className='relative flex p-4 md:p-8 flex-col items-center gap-4 z-30'>
        <p className='font-black text-5xl md:text-[64px] text-center lg:text-center'>WANNA KNOW WHAT’S SO <span className='text-roxo'>MAGIK!</span> ABOUT SHOPPING FOR STUFF?</p>
        <p className='text-center'>You are one click away from finding out. Hop in!</p>
        <Link to='/products' className='group py-2 px-3 bg-white flex items-center gap-2 rounded-full border border-preto hover:bg-preto hover:text-branco z-30'>
            <p>See Products</p>
            <ArrowRight className='hover:text-branco' />
        </Link>

        <img src={LogoReduced} alt="Magik!" className='absolute select-none opacity-10 h-80 md:h-80 lg:h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10' />
      </div>
    </div>
  );
}
