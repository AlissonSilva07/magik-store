import { useState } from 'react';
import MenuItemSvg from './MenuItemSvg';

import { Menu } from '../Menu/Menu';
import SearchSvg from './SearchSvg';
import { ModalSearch } from './ModalSearch';

export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    const [ showSearch, setShowSearch ] = useState<boolean>(false)
  return (
    <nav className='h-20 bg-white px-4 md:px-8 flex items-center justify-between border-b border-preto z-50'>
      <p className='text-2xl font-black'>MAGIK!</p>

      <div className='flex items-center gap-8'>
        <button onClick={() => setShowSearch(true)} className='hidden md:flex'>
          <SearchSvg />
        </button>
        <button onClick={() => setShowMenu(true)} className='lg:hidden'>
          <MenuItemSvg />
        </button>
        <div className='hidden lg:flex items-center gap-8'>
          <a href="#" className='hover:font-medium'>Home</a>
          <a href="#" className='hover:font-medium'>Products</a>
          <a href="#" className='hover:font-medium'>Cart (0)</a>
        </div>
        <div className='hidden lg:block w-[1px] h-8 bg-preto'></div>
        <a href="#" className='hidden lg:flex hover:font-medium'>Login / Register</a>
      </div>

      <Menu showMenu={showMenu} onCloseMenu={() => setShowMenu(false)} />
      <ModalSearch showSearch={showSearch} onCloseSearch={() => setShowSearch(false)} />
    </nav>
  );
}
