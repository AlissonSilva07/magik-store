import { Link } from 'react-router-dom';
import { Search, SearchIcon, X } from 'lucide-react'
import { Logo } from '../Navbar/Logo';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Product } from '../../@types/Product';
import { useApi } from '../../hooks/useApi';

export interface IMenuProps {
  showMenu: boolean
  onCloseMenu: () => void
}

export function Menu({ showMenu, onCloseMenu }: IMenuProps) {

  const [isOpenSearchMobile, setIsOpenSearchMobile] = useState<boolean>(false)
  const { getProducts } = useApi()

  const [products, setProducts] = useState<Product[]>([])
  const [query, setQuery] = useState<string>('')

  const searchTerms = useMemo(() => {
    return products.filter(p => {
      return p.title.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, products])

  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickAway = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onCloseMenu()
    }
  }

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
    })
      .catch(err => console.error(err))
  }, [])

  return (
    <div onClick={e => handleClickAway(e)} className={`${showMenu ? 'fixed' : 'hidden'} top-0 right-0 bottom-0 left-0 bg-preto/30 z-40`}>
      <div ref={modalRef} className='fixed top-0 left-0 bottom-0 right-0 md:w-1/2 md:translate-x-full md:shadow-lg flex flex-col justify-between bg-branco z-50'>
        <div>
          <div className='h-20 px-4 md:px-8 flex items-center justify-between bg-preto text-branco'>
            <p className='text-2xl font-bold'>Menu</p>
            <button onClick={() => onCloseMenu()}>
              <X />
            </button>
          </div>

          <div className='p-4 md:p-8 flex flex-col gap-4 border-b border-cinza-border/20'>
            <Link to='/' onClick={onCloseMenu}>Home</Link>
            <a href="#">Products</a>
            <a href="#">Cart (0)</a>
          </div>

          <div className='p-4 md:p-8 '>
            <a href="#">Login / Register</a>
          </div>

          <div className='relative w-full p-4 md:p-8 md:hidden'>
            {!isOpenSearchMobile ? (
              <div className='relative'>
                <input onClick={() => setIsOpenSearchMobile(true)} type="text" placeholder='Type twice to search' className='w-full py-2 px-4 bg-white border border-cinza-border/20 rounded-full' />
                <Search className='absolute right-2 p-4 md:p-8' />
              </div>
            ) : (
              <div className='w-full rounded-md h-fit max-h-[460px] overflow-hidden'>
                <div className='relative'>
                  <input
                    type="text"
                    placeholder='Type anything to search...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className='w-full p-2 pl-14 bg-white border border-cinza-border/20 rounded-full z-30' />
                  <SearchIcon className="text-roxo/80 absolute top-2 left-4" />
                  <button onClick={() => setIsOpenSearchMobile(false)} className="h-6 w-6 absolute top-2 right-4 flex flex-col items-center justify-center bg-roxo/80 hover:bg-roxo rounded-full">
                    <X className="text-branco size-4" />
                  </button>
                </div>

                {query.length > 0 &&
                  <span className="w-full inline-block text-center text-xs italic text-cinza-100">Search results for: <span className="font-bold">"{query}"</span></span>
                }
                <div className="flex flex-col gap-2 overflow-y-scroll">
                  {query.length > 0 ? searchTerms.map(t => (
                    <a href="#" className='relative flex items-start border border-branco hover:border-cinza-100 rounded-md'>
                      <p className="p-2 pl-14">{t.title}</p>
                      <img src={t.image} className="w-4 absolute top-2 left-4" />
                    </a>
                  )) : null}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='flex p-4 md:hidden md:p-8 items-center justify-center'>
          <Logo height={12} />
        </div>
      </div>
    </div>
  );
}
