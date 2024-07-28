import { ArrowRight, Check, ShoppingCartIcon } from 'lucide-react';
import { useContext } from 'react';
import { Product } from '../../@types/Product';
import { CartContext } from '../../context/cart-context';

export interface IProductHeaderProps {
    product: Product
}

export function ProductHeader({ product }: IProductHeaderProps) {
    const { cart, handleAddProduct, handleRemoveProduct } = useContext(CartContext)
    const isInCart: boolean = cart.cartItems.some(p => p.product.id === product.id)

    const toggleAddRemove = (newProduct: Product) => {
        if (isInCart) {
            handleRemoveProduct(product.id)
        } else {
            handleAddProduct(newProduct)
        }
    }
    return (
        <div className="w-full bg-preto flex items-center p-4 md:px-8 gap-4 md:gap-8 z-40">
            <p className="flex-1 text-branco text-2xl font-bold line-clamp-1">{product.title}</p>
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center bg-branco hover:bg-cinza-100 gap-2.5 px-4 md:px-8 py-3 rounded-full">
                    <p className="text-preto">Buy Now</p>
                    <ArrowRight className="text-preto size-5" />
                </button>
                <button onClick={() => toggleAddRemove(product)} className="p-3 hover:bg-cinza-100/20 rounded-full">
                    {isInCart ? <Check className="text-branco size-6" /> : <ShoppingCartIcon className="text-branco size-6" />}
                </button>
            </div>
        </div>
    );
}
