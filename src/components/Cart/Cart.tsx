import { X } from 'lucide-react';
import * as React from 'react';
import { ProductContext } from '../../context/product-context';
import { CartProductItem } from './CartProductItem';

export interface ICartProps {
}

export function Cart() {
    const { handleCloseCart, cart, handleAddProduct, handleRemoveProduct, getCartTotal } = React.useContext(ProductContext)

    const modalRef = React.useRef<HTMLDivElement>(null)

    const handleClickAway = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            return
        }
    }
    return (
        <div onClick={e => handleClickAway(e)} className='fixed top-0 right-0 bottom-0 left-0 bg-preto/40 z-40'>
            <div ref={modalRef} className='fixed top-0 left-0 bottom-0 right-0 md:w-1/2 md:left-auto md:shadow-lg lg:w-1/4 lg:left-auto flex flex-col bg-branco z-50'>
                <div onClick={handleCloseCart} className='h-20 px-4 md:px-8 flex items-center justify-between bg-preto text-branco'>
                    <p className='text-2xl font-bold'>Cart ({cart.length})</p>
                    <button className='p-2 hover:bg-cinza-100/20 rounded-full cursor-pointer'>
                        <X className='text-branco' />
                    </button>
                </div>
                <div className='flex-1 flex flex-col p-4 md:p-8 overflow-y-scroll'>
                    <div className='flex flex-col gap-4 md:gap-8'>
                        {cart.length > 0 ?
                            cart.map(p => <CartProductItem cartProduct={p} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />) :
                            <p>You haven't added any items to your cart.</p>
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center border-t border-cinza-border/20 p-4'>
                    <p className='w-full text-center'>Total: <span className='font-bold'>${getCartTotal()}</span></p>
                    <button className='w-full p-3 bg-roxo text-branco hover:bg-roxo/80 rounded-lg'>
                        Procced to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
