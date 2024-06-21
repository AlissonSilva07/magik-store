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
        <button onClick={() => setShowMenu(true)} className='xl:hidden'>
          <MenuItemSvg />
        </button>
      </div>

      <Menu showMenu={showMenu} onCloseMenu={() => setShowMenu(false)} />
      <ModalSearch showSearch={showSearch} onCloseSearch={() => setShowSearch(false)} />
    </nav>
  );
}
