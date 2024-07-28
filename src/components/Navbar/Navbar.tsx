import { useContext, useState } from 'react';
import { Search, MenuIcon } from 'lucide-react'
import { Menu } from '../Menu/Menu';
import { ModalSearch } from './ModalSearch';
import { Logo } from './Logo';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';
import { CartContext } from '../../context/cart-context';


export function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)

  const { cart, handleOpenCart } = useContext(CartContext)

  return (
    <nav className='fixed top-0 right-0 left-0 h-20 bg-white px-4 md:px-8 bg-branco flex items-center justify-between border-b border-cinza-border/20 z-40'>
      <Logo height={12} />

      <div className='h-full flex items-center gap-8'>
        <button onClick={() => setShowSearch(true)} className='hidden md:flex p-3 hover:bg-cinza-100/20 rounded-full'>
          <Search className='size-5 rounded-full' />
        </button>
        <button onClick={() => setShowMenu(true)} className='relative lg:hidden'>
          {cart.cartItems.length > 0 &&
            <span className='absolute -top-2 -right-1 text-xs py-0.5 px-1  rounded-full bg-roxo text-branco'>{cart.cartItems.length}</span>
          }
          <MenuIcon />
        </button>
        <div className='hidden h-full lg:flex items-center gap-8'>
          <NavLink to='/' className={({ isActive }: NavLinkRenderProps) =>
            isActive ? 'h-full flex items-center text-roxo border-b-4 border-b-roxo border-t-4 border-t-branco' : 'h-full flex items-center hover:border-t-4 hover:border-t-branco hover:border-b-4 hover:border-b-roxo/40'
          }>Home</NavLink>
          <NavLink to='/products' className={({ isActive }: NavLinkRenderProps) =>
            isActive ? 'h-full flex items-center text-roxo border-b-4 border-b-roxo border-t-4 border-t-branco' : 'h-full flex items-center hover:border-t-4 hover:border-t-branco hover:border-b-4 hover:border-b-roxo/40'
          }>Products</NavLink>
          <button onClick={handleOpenCart} className='p-3 flex-col items-center justify-center hover:bg-cinza-100/20 rounded-md cursor-pointer'>
            Cart ({cart.cartItems.length})
          </button>
        </div>
        <div className='hidden lg:flex w-[1px] h-8 bg-cinza-border/20 cursor-pointer'></div>
        <a href="#" className='hidden lg:flex p-3 flex-col items-center justify-center hover:bg-cinza-100/20 rounded-md'>
          Login / Register
        </a>
      </div>

      <Menu showMenu={showMenu} onCloseMenu={() => setShowMenu(false)} />
      <ModalSearch showSearch={showSearch} onCloseSearch={() => setShowSearch(false)} />
    </nav>
  );
}
