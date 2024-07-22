import { createContext, useReducer, useState } from "react"
import { Product } from "../@types/Product"
import { cartReducer, CartState, initialState } from "../utils/cart-reducer"

export type CartContextType = {
    isOpenCart: boolean
    handleOpenCart: () => void
    handleCloseCart: () => void
    cart: CartState
    handleAddProduct: (product: Product) => void
    handleRemoveProduct: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    getCartTotal: () => number
}

interface CartProviderProps {
    children: React.ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

const CartProvider = ({ children }: CartProviderProps) => {
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
        <CartContext.Provider
            value={{
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
        </CartContext.Provider>
    )
}

export default CartProvider