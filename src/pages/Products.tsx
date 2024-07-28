import { useContext, useEffect, useState } from 'react';
import { ProductsFilter } from '../components/Products/ProductsFilter';
import { ProductsList } from '../components/Products/ProductsList';
import { ModalFilters } from '../components/Products/ModalFilters/ModalFilters';
import { SidebarFilters } from '../components/Products/SidebarFilters';
import { Product } from '../@types/Product';
import { useApi } from '../hooks/useApi';
import { applyFilters } from '../utils/apply-filters';
import { FilterContext } from '../context/filter-context';

export function Products () {
    // PRODUCTS
    const { getProducts } = useApi()

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    // FILTERS        
    const [showFilters, setShowFilters] = useState<boolean>(false)

    const handleOpenFilters = () => {
        setShowFilters(true)
    }

    const handleCloseFilters = () => {
        setShowFilters(false)
    }

    const { filter } = useContext(FilterContext)

    const filteredProducts = applyFilters(products, filter)

    useEffect(() => {
        setLoading(true)
        getProducts().then(data => {
            setProducts(data)
            setLoading(false)
        })
            .catch(err => console.error(err))
    }, [])

  return (
    <>
        <main className='pt-20 m-4 lg:m-0 md:m-8 flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-0'>
            <ProductsFilter openFilters={handleOpenFilters} />
            <SidebarFilters />
            <ProductsList loading={loading} filter={filter} products={filteredProducts} />
        </main>

        {showFilters && <ModalFilters handleCloseFilters={handleCloseFilters} />}
    </>
  );
}
