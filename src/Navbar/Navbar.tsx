import * as React from 'react';
import MenuItemSvg from './MenuItemSvg';

export interface INavbarProps {
}

export function Navbar (props: INavbarProps) {
  return (
    <nav className='h-20 bg-white px-4 flex items-center justify-between border-b border-black'>
      <p className='text-2xl font-black'>MAGIK!</p>
      <MenuItemSvg />
    </nav>
  );
}
