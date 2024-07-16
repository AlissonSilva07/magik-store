import { createContext, useState } from "react"
import { Filtering } from "../@types/Filtering"
import { DEFAULT_FILTER } from "../utils/default-filter"

export type ProductContextType = {
    filter: Filtering,
    updateFilter: (filter: Filtering) => void
    removeFilter: () => void
}

interface ProductProviderProps {
    children: React.ReactNode
}

export const ProductContext = createContext<ProductContextType | null>(null)

const ProductProvider = ({ children }: ProductProviderProps) => {   

    //FILTERS
    const [filter, setFilter] = useState<Filtering>(DEFAULT_FILTER)

    const updateFilter = (updatedFilter: Filtering) => {
        setFilter(updatedFilter)
        localStorage.setItem('filter', JSON.stringify(updatedFilter))
    }

    const removeFilter = () => {
        setFilter(DEFAULT_FILTER)
        localStorage.removeItem('filter')
    }

    return (
        <ProductContext.Provider
            value={{
                filter,
                updateFilter,
                removeFilter
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider