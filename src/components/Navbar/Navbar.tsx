import { useState } from 'react';
import { Search, MenuIcon } from 'lucide-react'
import { Menu } from '../Menu/Menu';
import { ModalSearch } from './ModalSearch';
import { Logo } from './Logo';


export function Navbar () {
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    const [ showSearch, setShowSearch ] = useState<boolean>(false)
  return (
    <nav className='fixed top-0 right-0 left-0 h-20 bg-white px-4 md:px-8 bg-branco flex items-center justify-between border-b border-cinza-border/20 z-40'>
      <Logo height={12} />

      <div className='h-full flex items-center gap-8'>
        <button onClick={() => setShowSearch(true)} className='hidden md:flex'>
          <Search className='w-[18px] rounded-full' />
        </button>
        <button onClick={() => setShowMenu(true)} className='lg:hidden'>
          <MenuIcon />
        </button>
        <div className='hidden h-full lg:flex items-center gap-8'>
          <a href="#" className='h-full flex items-center hover:font-bold hover:border-b-4 hover:border-roxo'>Home</a>
          <a href="#" className='h-full flex items-center hover:font-bold hover:border-b-4 hover:border-roxo'>Products</a>
          <a href="#" className='h-full flex items-center hover:font-bold hover:border-b-4 hover:border-roxo'>Cart (0)</a>
        </div>
        <div className='hidden lg:flex w-[1px] h-8 bg-cinza-border/20'></div>
        <a href="#" className='hidden lg:flex hover:font-bold'>Login / Register</a>
      </div>

      <Menu showMenu={showMenu} onCloseMenu={() => setShowMenu(false)} />
      <ModalSearch showSearch={showSearch} onCloseSearch={() => setShowSearch(false)} />
    </nav>
  );
}
