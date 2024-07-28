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
    const getInitialState = (): Filtering => {
        const savedFilter = localStorage.getItem('filter')
        const parsedCart = JSON.parse(savedFilter!)
        return parsedCart ? parsedCart : DEFAULT_FILTER
    }

    const [filter, setFilter] = useState<Filtering>(getInitialState())
    const [filterCounter, setFilterCounter] = useState<number>(countFilter(getInitialState()))
    
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
        localStorage.setItem('filter', JSON.stringify(filter))
    }, [filter])

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