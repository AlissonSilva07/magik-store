import { useEffect, useMemo, useRef, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Product } from "../../@types/Product";
import { SearchIcon, X } from "lucide-react";

export interface IModalSearchProps {
  showSearch: boolean
  onCloseSearch: () => void
}

export function ModalSearch({ showSearch, onCloseSearch }: IModalSearchProps) {
  const { getProducts } = useApi()

  const [products, setProducts] = useState<Product[]>([])
  const [query, setQuery] = useState<string>('')

  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickAway = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onCloseSearch()
    }
  }

  const handleEsc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      onCloseSearch()
    }
  }

  const searchTerms = useMemo(() => {
    return products.filter(p => {
      return p.title.toLowerCase().includes(query.toLowerCase())
    })
  }, [query, products])

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data)
    })
      .catch(err => console.error(err))

    
  }, [])

  return (
    <div onClick={e => handleClickAway(e)} className={`${showSearch ? 'fixed' : 'hidden'} top-0 right-0 left-0 bottom-0 bg-preto/40 flex flex-col items-center justify-between z-30`}>
      <div ref={modalRef} className="absolute top-4 w-4/6 h-fit max-h-[360px] lg:w-3/6 lg:h-fit lg:max-h-[360px] flex flex-col bg-branco rounded-md shadow-lg p-4 gap-4 overflow-hidden">
        <div className='w-full'>
          <div className='relative'>
            <input
              type="text"
              placeholder='Type anything to search...'
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => handleEsc(e)}
              className='w-full p-2 pl-14 bg-white border border-cinza-border/20 rounded-full z-30' />
            <SearchIcon className="text-roxo/80 absolute top-2 left-4" />
            <button onClick={() => setQuery('')} className="h-6 w-6 absolute top-2 right-4 flex flex-col items-center justify-center bg-roxo/80 hover:bg-roxo rounded-full">
              <X className="text-branco size-4" />
            </button>
          </div>
        </div>
        {query.length > 0 &&
          <span className="w-full text-center text-xs italic text-cinza-100">Search results for: <span className="font-bold">"{query}"</span></span>
        }
        <div className="flex flex-col gap-2 overflow-y-scroll">
          {query.length > 0 ? searchTerms.map(t => (
            <a href="#" className='relative border border-branco hover:border-cinza-100 rounded-md'>
              <p className="p-2 pl-14">{t.title}</p>
              <img src={t.image} className="w-4 absolute top-2 left-4" />
            </a>
          )) : null}
        </div>
      </div>
    </div>
  );
}
