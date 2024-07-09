import Filter from '../../assets/Products/filter.png'

export interface IProductsFilterProps {
    openFilters: () => void
}

export function ProductsFilter ({ openFilters }: IProductsFilterProps) {
  return (
    <button onClick={openFilters} className='w-full py-2.5 px-4 flex items-center justify-between bg-roxo text-branco rounded-full lg:hidden z-30'>
      Filter Results
      <img src={Filter} alt="Filter Results" />
    </button>
  );
}
