import { Minus, Plus, Trash } from 'lucide-react';
import { Product } from '../../@types/Product';
import { useState } from 'react';

export interface ICartProductItemProps {
    cartProduct: Product
    handleAddProduct: (product: Product) => void
    handleRemoveProduct: (productId: number) => void
}

export function CartProductItem({ cartProduct, handleAddProduct, handleRemoveProduct }: ICartProductItemProps) {
    const [cartQuantity, setCartQuantity] = useState<number>(1)

    const handleIncreaseCounter = () => {
        setCartQuantity(prev => prev + 1)
        //handleAddProduct(product)
    }

    const handleDecreaseCounter = () => {
        setCartQuantity(prev => prev > 1 ? prev - 1 : prev)
        //handleRemoveProduct(productId)
    }

    const removeProduct = (productId: number) => {
        handleRemoveProduct(productId)
    }
    return (
        <div className='w-full p-3 flex items-center gap-3 border border-cinza-border/20 rounded-md'>
            <div className='flex flex-col items-center justify-center'>
                <img src={cartProduct.image} className='w-32 h-24 object-contain' />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <p className='text-cinza-800 line-clamp-2'>{cartProduct.title}</p>
                <p className='text-xl font-bold'>${cartProduct.price}</p>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <button onClick={() => handleDecreaseCounter()} className='group rounded-full bg-roxo hover:bg-roxo/40'>
                            <Minus className='text-branco group-hover:text-roxo size-5' />
                        </button>
                        <span>{cartQuantity}</span>
                        <button onClick={() => handleIncreaseCounter()} className='group rounded-full bg-roxo hover:bg-roxo/40'>
                            <Plus className='text-branco group-hover:text-roxo size-5' />
                        </button>
                    </div>
                    <button className='p-1 rounded-full hover:bg-cinza-border/20'>
                        <Trash onClick={() => removeProduct(cartProduct.id)} className='text-cinza-800 size-4' />
                    </button>
                </div>
            </div>
        </div>
    );
}
