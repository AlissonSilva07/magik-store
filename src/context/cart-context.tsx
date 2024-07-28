import { createContext, useEffect, useReducer, useState } from "react"
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
    getCartTotal: () => number,
    saveCart: (updatedCart: CartState) => void,
    clearCart: () => void
}

interface CartProviderProps {
    children: React.ReactNode
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

const CartProvider = ({ children }: CartProviderProps) => {
    //CART
    const getInitialState = () => {
        const savedCart = localStorage.getItem('cart')
        const parsedCart = JSON.parse(savedCart!)
        return parsedCart ? parsedCart : initialState
    };

    const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
    const [cart, dispatch] = useReducer(cartReducer, initialState, getInitialState)

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
        const amount = cart.cartItems.reduce((acc, current) => acc + (current.product.price * current.quantity), initialValue)
        return amount
    }

    const saveCart = (updatedCart: CartState): void => {
        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }

    const clearCart = (): void => {
        dispatch({
            type: 'clear',
        })
        localStorage.removeItem('cart')
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

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
                getCartTotal,
                saveCart,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider