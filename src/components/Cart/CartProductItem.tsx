import { Minus, Plus, Trash } from 'lucide-react';
import { Product } from '../../@types/Product';
import { useState } from 'react';
import { CartItem } from '../../utils/cart-reducer';

export interface ICartProductItemProps {
    cartProduct: CartItem
    handleAddProduct: (product: Product) => void
    handleRemoveProduct: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
}

export function CartProductItem({ cartProduct, handleRemoveProduct, updateQuantity }: ICartProductItemProps) {
    const [cartQuantity, setCartQuantity] = useState<number>(1)

    const handleUpdateQuantity = (mode: string, productId: number) => {
        switch (mode) {
            case 'increment':
                setCartQuantity(cartQuantity + 1)
                break;
            case 'decrement':
                setCartQuantity(cartQuantity > 1 ? cartQuantity - 1 : cartQuantity)
                break;
            default:
                null
        }

        updateQuantity(productId, cartQuantity)
    }

    const removeProduct = (productId: number) => {
        handleRemoveProduct(productId)
    }

    return (
        <div className='w-full p-3 flex items-center gap-3 border border-cinza-border/20 rounded-md'>
            <div className='flex flex-col items-center justify-center'>
                <img src={cartProduct.product.image} className='w-32 h-24 object-contain' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <p className='text-cinza-800 line-clamp-2'>{cartProduct.product.title}</p>
                <p className='text-xl font-bold'>${cartProduct.product.price}</p>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <button onClick={() => handleUpdateQuantity('decrement', cartProduct.product.id)} className='group rounded-full bg-roxo hover:bg-roxo/40'>
                            <Minus className='text-branco group-hover:text-roxo size-5' />
                        </button>
                        <span>{cartProduct.quantity}</span>
                        <button onClick={() => handleUpdateQuantity('increment', cartProduct.product.id)} className='group rounded-full bg-roxo hover:bg-roxo/40'>
                            <Plus className='text-branco group-hover:text-roxo size-5' />
                        </button>
                    </div>
                    <button className='p-1 rounded-full hover:bg-cinza-border/20'>
                        <Trash onClick={() => removeProduct(cartProduct.product.id)} className='text-cinza-800 size-4' />
                    </button>
                </div>
            </div>
        </div>
    );
}