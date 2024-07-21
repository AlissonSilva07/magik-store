import { Product } from "../@types/Product";

export type CartAction =
    | { type: 'add-product'; product: Product }
    | { type: 'remove-product'; id: number }
    | { type: 'clear' }

export const cartReducer = (state: Product[], action: CartAction): Product[] => {
    switch(action.type) {
        case 'add-product':
            return [...state, action.product]
        case 'remove-product':
            return state.filter(product => product.id !== action.id)
        case 'clear':
            return []
        default:
            return state
    }
}