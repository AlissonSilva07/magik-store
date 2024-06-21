import { useState } from 'react';
import MenuItemSvg from './MenuItemSvg';
import CloseSvg from './CloseSvg';
import SearchSvg from './SearchSvg';

export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
  return (
    <nav className='h-20 bg-white px-4 flex items-center justify-between border-b border-preto'>
      <p className='text-2xl font-black'>MAGIK!</p>
      <button onClick={() => setShowMenu(true)}>
        <MenuItemSvg />
      </button>

      <div className={`${showMenu ? 'fixed' : 'hidden'} top-0 right-0 left-0 bottom-0 bg-white flex flex-col justify-between`}>
        <div className='bg-branco'>
          <div className='h-20 px-4 flex items-center justify-between border-b border-preto'>
              <p className='text-2xl font-bold'>Menu</p>
              <button onClick={() => setShowMenu(false)}>
                  <CloseSvg />
              </button>
          </div>

          <div className='w-full p-4'>
              <div className='relative'>
                  <input type="text" placeholder='Search' className='w-full p-3 bg-white border border-preto rounded-full' />
                  <SearchSvg className='absolute right-2 p-4' />
              </div>
          </div>

          <div className='p-4 flex flex-col gap-4 border-b border-preto'>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Cart (0)</a>
          </div>

          <div className='p-4'>
            <a href="#">Login / Register</a>
          </div>
        </div>

        <div className='flex p-4 items-center justify-center'>
          <p className='text-2xl font-black'>MAGIK!</p>
        </div>
      </div>
    </nav>
  );
}
