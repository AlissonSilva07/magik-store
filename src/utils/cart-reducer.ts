/* eslint-disable no-case-declarations */
import { Product } from "../@types/Product";

export type CartItem = {
    product: Product
    quantity: number
}

export type CartAction =
    | { type: 'add-product'; payload: Product }
    | { type: 'remove-product'; payload: number }
    | { type: 'update-quantity'; payload: { productId: number; quantity: number } }
    | { type: 'clear' }

export interface CartState {
    cartItems: CartItem[]
}

export const initialState: CartState = {
    cartItems: []
}

export const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch(action.type) {
        case 'add-product':
            const existIndex = state.cartItems.findIndex(i => i.product.id === action.payload.id)
            
            if (existIndex !== -1) {
                const updatedCart = [...state.cartItems]
                updatedCart[existIndex].quantity += 1
                return {...state, cartItems: updatedCart}
            } else {
                return {...state, cartItems: [
                    ...state.cartItems,
                    {product: action.payload, quantity: 1}
                ]}
            }
        case 'remove-product':
            const updatedCart = state.cartItems.filter(i => i.product.id !== action.payload)
            return {...state, cartItems: updatedCart}
        case 'update-quantity':
            const { productId, quantity } = action.payload
            const updatedItems = state.cartItems.map(item =>
                item.product.id === productId ? { ...item, quantity } : item
            );
            return { ...state, cartItems: updatedItems };
        case 'clear':
            return initialState
        default:
            return state
    }
}