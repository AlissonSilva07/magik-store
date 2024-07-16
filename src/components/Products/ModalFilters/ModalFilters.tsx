import { X } from 'lucide-react'
import { useApi } from '../../../hooks/useApi';
import { SelectCategory } from './SelectCategory';
import { SelectSorting } from './SelectSorting';
import { sorting } from '../../../utils/sorting';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/product-context';
import { ModalInput } from './ModalInput';

export interface IModalFiltersProps {
  handleCloseFilters: () => void
}

export function ModalFilters({ handleCloseFilters }: IModalFiltersProps) {
  const { categories } = useApi()
  const { filter, updateFilter, removeFilter } = useContext(ProductContext)

  const [categoryFilter, setCategoryFilter] = useState<string>('')
  const [sortingFilter, setSortingFilter] = useState<string>('')
  const [maxFilter, setMaxFilter] = useState<string | number | readonly string[] | undefined>(undefined)
  const [minFilter, setMinFilter] = useState<string | number | readonly string[] | undefined>(undefined)

  const setFilters = () => {
    updateFilter({
      category: categoryFilter,
      sort_by: sortingFilter,
      price: {
        min: minFilter,
        max: maxFilter
      }
    })

    handleCloseFilters()
  }

  const resetFilter = () => {
    removeFilter()
    window.location.reload()
  }


  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 bg-preto/30 z-40'>
      <div className='fixed top-0 left-0 bottom-0 sm:right-0 md:w-1/2 md:translate-x-full md:shadow-lg flex flex-col bg-branco z-50'>
        <div onClick={handleCloseFilters} className='w-full h-20 p-4 md:p-8 bg-preto text-branco flex items-center justify-between'>
          <p className='text-2xl font-bold'>Filter Results</p>
          <X className='text-branco' />
        </div>
        <div className='h-full m-4 md:m-8 flex flex-col justify-between'>
          <div>
            <div className='flex flex-col gap-4'>
              <div className='w-full flex flex-col gap-4'>
                <p className='font-bold'>Category</p>
                <SelectCategory categories={categories} setCategoryFilter={setCategoryFilter} />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold'>Sort By</p>
                <SelectSorting sorting={sorting} setSortingFilter={setSortingFilter} />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold'>Sort By</p>
                <div className='flex items-center gap-3'>
                  <ModalInput placeholder='Max' type='min' maxFilter={maxFilter} minFilter={minFilter} setMinFilter={setMinFilter} setMaxFilter={setMaxFilter} />
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
    </div>
  );
}
