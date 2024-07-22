import { createContext, useState } from "react"
import { Filtering } from "../@types/Filtering"
import { DEFAULT_FILTER } from "../utils/default-filter"
import { countFilter } from "../utils/count-filter"

export type FilterContextType = {
    filter: Filtering
    filterCounter: number
    updateFilter: (filter: Filtering) => void
    removeFilter: () => void
}

interface FilterProviderProps {
    children: React.ReactNode
}

export const FilterContext = createContext<FilterContextType>({} as FilterContextType)

const FilterProvider = ({ children }: FilterProviderProps) => {   

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
        <FilterContext.Provider
            value={{
                filter,
                filterCounter,
                updateFilter,
                removeFilter
            }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider