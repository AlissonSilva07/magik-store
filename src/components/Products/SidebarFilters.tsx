import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { ModalInput } from '../Products/ModalFilters/ModalInput';
import { SelectCategory } from '../Products/ModalFilters/SelectCategory';
import { SelectSorting } from '../Products/ModalFilters/SelectSorting';
import { Filtering } from '../../@types/Filtering';

export interface ISidebarFiltersProps {
}

export function SidebarFilters () {
    const { categories } = useApi()

    const sorting: string[] = ['Popularity', 'Newest', 'Oldest', 'A-Z', 'Z-A', 'High Price', 'Low Price']

    const [filter, setFilter] = useState<Filtering>({
      category: '',
      sort_by: '',
      price: {
        min: 0,
        max: 0
      }
    })

  return (
    <div className='hidden md:w-1/5 lg:flex flex-col bg-branco border-r z-30'>
        <div className='w-full h-20 p-4 md:p-8 bg-preto text-branco flex items-center justify-between'>
          <p className='text-xl font-bold'>Filter Results</p>
        </div>
        <div className='h-full m-4 md:m-8 flex flex-col gap-8'>
          <div>
            <div className='flex flex-col gap-4'>
              <div className='w-full flex flex-col gap-4'>
                <p className='font-bold'>Category</p>
                <SelectCategory categories={categories} setInputChecked={() => { }} />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold'>Sort By</p>
                <SelectSorting sorting={sorting} setInputChecked={() => { }} />
              </div>
              <div className='flex flex-col gap-4'>
                <p className='font-bold'>Price Range</p>
                <div className='flex items-center gap-3'>
                  <ModalInput placeholder='Min Price' />
                  <ModalInput placeholder='Max Price' />
                </div>
              </div>
            </div>
          </div>

          <button className='w-full p-3 bg-roxo text-branco hover:bg-roxo/80 rounded-lg'>
            Apply Filters
          </button>
        </div>
      </div>
  );
}
