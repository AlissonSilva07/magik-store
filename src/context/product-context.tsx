import { createContext, useReducer, useState } from "react"
import { Filtering } from "../@types/Filtering"
import { DEFAULT_FILTER } from "../utils/default-filter"
import { countFilter } from "../utils/count-filter"
import { Product } from "../@types/Product"
import { cartReducer, CartState, initialState } from "../utils/cart-reducer"

export type ProductContextType = {
    filter: Filtering
    filterCounter: number
    updateFilter: (filter: Filtering) => void
    removeFilter: () => void
    isOpenCart: boolean
    handleOpenCart: () => void
    handleCloseCart: () => void
    cart: CartState
    handleAddProduct: (product: Product) => void
    handleRemoveProduct: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
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
    const [cart, dispatch] = useReducer(cartReducer, initialState)

    const handleOpenCart = () => {
        setIsOpenCart(true)
    }

    const handleCloseCart = () => {
        setIsOpenCart(false)
    }

    const handleAddProduct = (product: Product): void => {
        dispatch({
            type: 'add-product',
            payload: product
        })
    }

    const handleRemoveProduct = (productId: number): void => {
        dispatch({
            type: 'remove-product',
            payload: productId
        })
    }

    const updateQuantity = (productId: number, quantity: number): void => {
        dispatch({
            type: 'update-quantity',
            payload: {
                productId: productId,
                quantity: quantity
            }
        })
    }

    const getCartTotal = (): number => {
        const initialValue = 0
        return cart.cartItems.reduce((acc, current) => acc + (current.product.price * current.quantity), initialValue)
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
                updateQuantity,
                getCartTotal
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider