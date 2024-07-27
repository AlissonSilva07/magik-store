import { createContext, useEffect, useMemo, useState } from "react"
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
    const [filter, setFilter] = useState<Filtering>(DEFAULT_FILTER)
    const [filterCounter, setFilterCounter] = useState<number>(0)
    
    const updateFilter = (updatedFilter: Filtering) => {
        setFilter(updatedFilter)
        setFilterCounter(countFilter(updatedFilter))
        localStorage.setItem('filter', JSON.stringify(updatedFilter))
    }

    const removeFilter = () => {
        setFilter(DEFAULT_FILTER)
        setFilterCounter(countFilter(DEFAULT_FILTER));
        localStorage.removeItem('filter')
    }

    useEffect(() => {
        const filterStorage = localStorage.getItem('filter')

        if(filterStorage != null) {
            const parsedStorage = JSON.parse(filterStorage)
            setFilter(parsedStorage)
            setFilterCounter(countFilter(parsedStorage))
        }
    }, [])

    const contextValue = useMemo(() => ({
        filter,
        filterCounter,
        updateFilter,
        removeFilter,
    }), [filter, filterCounter]);
    
    return (
        <FilterContext.Provider
            value={
                contextValue
            }>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterProvider