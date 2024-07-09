import { useState } from 'react';
import { ProductsFilter } from '../components/Products/ProductsFilter';
import { ProductsList } from '../components/Products/ProductsList';
import { ModalFilters } from '../components/Products/ModalFilters/ModalFilters';
import { SidebarFilters } from '../components/Products/SidebarFilters';

export function Products () {
    const [showFilters, setShowFilters] = useState<boolean>(false)

    const handleOpenFilters = () => {
        setShowFilters(true)
    }

    const handleCloseFilters = () => {
        setShowFilters(false)
    }

  return (
    <>
        <main className='pt-20 m-4 lg:m-0 md:m-8 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-0'>
            <ProductsFilter openFilters={handleOpenFilters} />
            <SidebarFilters />
            <ProductsList />
        </main>

        {showFilters && <ModalFilters handleCloseFilters={handleCloseFilters} />}
    </>
  );
}
