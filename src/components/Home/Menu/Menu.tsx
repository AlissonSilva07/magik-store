import { Link } from 'react-router-dom';
import x from '../../../assets/Navbar/x.svg' 
import SearchSvg from '../Navbar/SearchSvg';

export interface IMenuProps {
    showMenu: boolean
    onCloseMenu: () => void
}

export function Menu ({ showMenu, onCloseMenu }: IMenuProps) {
  return (
    <div className={`${showMenu ? 'fixed' : 'hidden'} top-0 right-0 left-0 bottom-0 bg-branco flex flex-col justify-between z-40`}>
        <div>
          <div className='h-20 px-4 md:px-8 flex items-center justify-between bg-preto text-branco'>
              <p className='text-2xl font-bold'>Menu</p>
              <button onClick={() => onCloseMenu()}>
                  <img src={x} alt='Close' />
              </button>
          </div>

          <div className='w-full p-4 md:p-8 md:hidden'>
              <div className='relative'>
                  <input type="text" placeholder='Search' className='w-full p-3 bg-white border border-preto rounded-full' />
                  <SearchSvg className='absolute right-2 p-4 md:p-8' />
              </div>
          </div>

          <div className='p-4 md:p-8 flex flex-col gap-4 border-b border-preto'>
            <Link to='/' onClick={onCloseMenu}>Home</Link>
            <a href="#">Products</a>
            <a href="#">Cart (0)</a>
          </div>

          <div className='p-4 md:p-8'>
            <a href="#">Login / Register</a>
          </div>
        </div>

        <div className='flex p-4 md:p-8 items-center justify-center'>
          <p className='text-2xl font-black'>MAGIK!</p>
        </div>
      </div>
  );
}
