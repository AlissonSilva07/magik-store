import { Filter } from 'lucide-react'

export interface IProductsFilterProps {
    openFilters: () => void
}

export function ProductsFilter ({ openFilters }: IProductsFilterProps) {
  return (
    <button onClick={openFilters} className='w-full py-2.5 px-4 flex items-center justify-between bg-branco text-roxo font-bold border border-roxo hover:bg-roxo hover:text-branco rounded-full lg:hidden z-30'>
      Filter Results
      <Filter className='text-roxo' />
    </button>
  );
}
