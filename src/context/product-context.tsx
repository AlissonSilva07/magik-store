import { createContext, useReducer, useState } from "react"
import { Filtering } from "../@types/Filtering"
import { DEFAULT_FILTER } from "../utils/default-filter"
import { countFilter } from "../utils/count-filter"
import { Product } from "../@types/Product"
import { cartReducer } from "../utils/cart-reducer"

export type ProductContextType = {
    filter: Filtering
    filterCounter: number
    updateFilter: (filter: Filtering) => void
    removeFilter: () => void
    isOpenCart: boolean
    handleOpenCart: () => void
    handleCloseCart: () => void
    cart: Product[]
    handleAddProduct: (product: Product) => void
    handleRemoveProduct: (productId: number) => void
    getCartTotal: () => number
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
    //CART
    const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
    const [cart, dispatch] = useReducer(cartReducer, [])

    const handleOpenCart = () => {
        setIsOpenCart(true)
    }

    const handleCloseCart = () => {
        setIsOpenCart(false)
    }

    const handleAddProduct = (product: Product): void => {
        dispatch({
            type: 'add-product',
            product: product
        })
    }

    const handleRemoveProduct = (productId: number): void => {
        dispatch({
            type: 'remove-product',
            id: productId
        })
    }

    const getCartTotal = (): number => {
        const initialValue = 0
        return cart.reduce((acc, current) => acc + current.price, initialValue)
    }

    return (
        <ProductContext.Provider
            value={{
                filter,
                filterCounter,
                updateFilter,
                removeFilter,
                isOpenCart,
                handleOpenCart,
                handleCloseCart,
                cart,
                handleAddProduct,
                handleRemoveProduct,
                getCartTotal
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider