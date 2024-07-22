import { Filter } from 'lucide-react'
import { useContext } from 'react';
import { FilterContext } from '../../context/filter-context';

export interface IProductsFilterProps {
  openFilters: () => void
}

export function ProductsFilter({ openFilters }: IProductsFilterProps) {
  const { filterCounter } = useContext(FilterContext)

  return (
    <button onClick={openFilters} className='sticky top-24 w-full py-2.5 px-4 flex items-center justify-between bg-branco text-roxo font-bold border border-roxo shadow-md rounded-full lg:hidden z-30'>
      Filter Results
      {filterCounter > 0 ? (
        <span className='h-full w-6 flex flex-col items-center justify-center bg-roxo text-branco rounded-full'>
          {filterCounter}
        </span>) :
        <Filter className='text-roxo' />
      }
    </button>
  );
}
