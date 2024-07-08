import X from '../../../assets/x.png'
import { useApi } from '../../../hooks/useApi';
import { ModalInput } from './ModalInput';
import { SelectCategory } from './SelectCategory';
import { SelectSorting } from './SelectSorting';

export interface IModalFiltersProps {
  handleCloseFilters: () => void
}

export function ModalFilters({ handleCloseFilters }: IModalFiltersProps) {
  const { categories } = useApi()
  const sorting: string[] = ['Popularity', 'Newest', 'Oldest', 'A-Z', 'Z-A', 'High Price', 'Low Price']

  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 bg-preto/30 z-40'>
      <div className='fixed top-0 left-0 bottom-0 sm:right-0 md:w-1/2 md:translate-x-full md:shadow-lg flex flex-col bg-branco z-50'>
        <div onClick={handleCloseFilters} className='w-full h-20 p-4 md:p-8 bg-preto text-branco flex items-center justify-between'>
          <p className='text-2xl font-bold'>Filter Results</p>
          <img src={X} alt="Close" />
        </div>
        <div className='h-full m-4 md:m-8 flex flex-col justify-between'>
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
                <p className='font-bold'>Sort By</p>
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
    </div>
  );
}
