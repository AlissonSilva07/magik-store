import X from '../../../assets/x.png'
import { useApi } from '../../../hooks/useApi';
import { RadioCategory } from './RadioCategory';

export interface IModalFiltersProps {
  handleCloseFilters: () => void
}

export function ModalFilters ({ handleCloseFilters }: IModalFiltersProps) {
  const {categories} = useApi()
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 flex flex-col bg-branco z-50'>
      <div onClick={handleCloseFilters} className='w-full h-20 p-4 bg-preto text-branco flex items-center justify-between'>
        <p className='text-2xl font-bold'>Filter Results</p>
        <img src={X} alt="Close" />
      </div>
      <div className='w-full m-4 flex flex-col gap-4'>
        <p className='font-bold'>Category</p>
        <RadioCategory categories={categories} setInputChecked={() => {}} />
      </div>
    </div>
  );
}
