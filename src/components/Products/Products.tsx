import { useState } from 'react';
import { ProductsFilter } from './ProductsFilter';
import { ProductsList } from './ProductsList';
import { ModalFilters } from './ModalFilters/ModalFilters';

export interface IProductsProps {
}

export function Products (props: IProductsProps) {
    const [showFilters, setShowFilters] = useState<boolean>(false)

    const handleOpenFilters = () => {
        setShowFilters(true)
    }

    const handleCloseFilters = () => {
        setShowFilters(false)
    }

  return (
    <>
        <main className='pt-20 m-4 md:m-8 flex flex-col gap-4 md:gap-8'>
            <ProductsFilter openFilters={handleOpenFilters} />
            <ProductsList />
        </main>

        {showFilters && <ModalFilters handleCloseFilters={handleCloseFilters} />}
    </>
  );
}
