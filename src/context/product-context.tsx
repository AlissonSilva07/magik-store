import { createContext, useState } from "react"
import { Filtering } from "../@types/Filtering"
import { DEFAULT_FILTER } from "../utils/default-filter"
import { countFilter } from "../utils/count-filter"

export type ProductContextType = {
    filter: Filtering,
    filterCounter: number,
    updateFilter: (filter: Filtering) => void
    removeFilter: () => void
}

interface ProductProviderProps {
    children: React.ReactNode
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType)

const ProductProvider = ({ children }: ProductProviderProps) => {   

    //FILTERS
    const [filter, setFilter] = useState<Filtering>(DEFAULT_FILTER)
    const [filterCounter, setFilterCounter] = useState<number>(0)

    const updateFilter = (updatedFilter: Filtering) => {
        setFilter(updatedFilter)
        setFilterCounter(countFilter(updatedFilter))
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
                filterCounter,
                updateFilter,
                removeFilter
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider