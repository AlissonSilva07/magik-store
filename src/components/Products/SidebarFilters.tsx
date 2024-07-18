import { useApi } from '../../hooks/useApi';
import { ModalInput } from './ModalFilters/ModalInput';
import { SelectCategory } from '../Products/ModalFilters/SelectCategory';
import { SelectSorting } from '../Products/ModalFilters/SelectSorting';
import { sorting } from '../../utils/static-data';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../context/product-context';
import { Filter } from 'lucide-react';

export interface ISidebarFiltersProps {
}

export function SidebarFilters() {
  const { getCategories } = useApi()
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { filter, filterCounter, updateFilter, removeFilter } = useContext(ProductContext)

  const [categoryFilter, setCategoryFilter] = useState<string>(filter ? filter.category : '')
  const [sortingFilter, setSortingFilter] = useState<string>(filter ? filter.sort_by : '')
  const [maxFilter, setMaxFilter] = useState<string | number | readonly string[] | undefined>(filter ? filter.price.max : undefined)
  const [minFilter, setMinFilter] = useState<string | number | readonly string[] | undefined>(filter ? filter.price.min : undefined)


  const setFilters = () => {
    updateFilter({
      category: categoryFilter,
      sort_by: sortingFilter,
      price: {
        min: minFilter,
        max: maxFilter
      }
    })
  }

  const resetFilter = () => {
    removeFilter()
    window.location.reload()
  }

  useEffect(() => {
    getCategories().then(data => {
      setCategories(data)
      setLoading(false)
    }).catch(err => console.error(err))
  })

  return (
    <div className='hidden md:w-1/5 lg:flex flex-col bg-branco border-r border-cinza-border/20 z-30'>
      <div className='w-full h-20 p-4 md:p-8 bg-preto text-branco flex items-center justify-between'>
        <p className='text-xl font-bold'>Filter Results</p>
        {filterCounter > 0 ? (
          <span className='h-6 w-6 flex flex-col items-center justify-center bg-branco text-preto rounded-full'>
            {filterCounter}
          </span>) :
          <Filter className='size-5 text-branco font-bold' />
        }
      </div>
      <div className='h-full m-4 md:m-8 flex flex-col gap-8'>
        <div>
          <div className='flex flex-col gap-4'>
            <div className='w-full flex flex-col gap-4'>
              <p className='font-bold'>Category</p>
              <SelectCategory loading={loading} categories={categories} filterCategory={filter.category} setCategoryFilter={setCategoryFilter} />
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>Sort By</p>
              <SelectSorting sorting={sorting} filterSort={filter.sort_by} setSortingFilter={setSortingFilter} />
            </div>
            <div className='flex flex-col gap-4'>
              <p className='font-bold'>Price Range</p>
              <div className='flex items-center gap-3'>
                <ModalInput placeholder='Min' type='min' maxFilter={maxFilter} minFilter={minFilter} setMinFilter={setMinFilter} setMaxFilter={setMaxFilter} />
                <ModalInput placeholder='Max' type='max' maxFilter={maxFilter} minFilter={minFilter} setMinFilter={setMinFilter} setMaxFilter={setMaxFilter} />
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <button onClick={setFilters} className='w-full p-3 bg-roxo text-branco hover:bg-roxo/80 rounded-lg'>
            Apply Filters
          </button>
          <button onClick={resetFilter} className='w-full p-3 bg-white text-cinza-100 border border-cinza-100 hover:text-preto hover:border-preto rounded-lg'>
            Remove Filters
          </button>
        </div>
      </div>
    </div>
  );
}
