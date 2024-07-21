import { useContext, useState } from 'react';
import { Search, MenuIcon } from 'lucide-react'
import { Menu } from '../Menu/Menu';
import { ModalSearch } from './ModalSearch';
import { Logo } from './Logo';
import { ProductContext } from '../../context/product-context';
import { Link } from 'react-router-dom';


export function Navbar () {
    const [ showMenu, setShowMenu ] = useState<boolean>(false)
    const [ showSearch, setShowSearch ] = useState<boolean>(false)

    const { cart, handleOpenCart } = useContext(ProductContext)

  return (
    <nav className='fixed top-0 right-0 left-0 h-20 bg-white px-4 md:px-8 bg-branco flex items-center justify-between border-b border-cinza-border/20 z-40'>
      <Logo height={12} />

      <div className='h-full flex items-center gap-8'>
        <button onClick={() => setShowSearch(true)} className='hidden md:flex'>
          <Search className='size-5 rounded-full' />
        </button>
        <button onClick={() => setShowMenu(true)} className='relative lg:hidden'>
          <span className='absolute -top-2 -right-1 text-xs py-0.5 px-1  rounded-full bg-roxo text-branco'>{cart.cartItems.length}</span>
          <MenuIcon />
        </button>
        <div className='hidden h-full lg:flex items-center gap-8'>
          <Link to='/' className='h-full flex items-center hover:font-bold hover:border-b-4 hover:border-roxo'>Home</Link>
          <Link to='/products' className='h-full flex items-center hover:font-bold hover:border-b-4 hover:border-roxo'>Products</Link>
          <button onClick={handleOpenCart} className='h-full flex items-center hover:font-bold hover:border-b-4 hover:border-roxo'>Cart ({cart.cartItems.length})</button>
        </div>
        <div className='hidden lg:flex w-[1px] h-8 bg-cinza-border/20'></div>
        <a href="#" className='hidden lg:flex hover:font-bold'>Login / Register</a>
      </div>

      <Menu showMenu={showMenu} onCloseMenu={() => setShowMenu(false)} />
      <ModalSearch showSearch={showSearch} onCloseSearch={() => setShowSearch(false)} />
    </nav>
  );
}
