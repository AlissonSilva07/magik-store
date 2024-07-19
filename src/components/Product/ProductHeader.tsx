import { ArrowRight, ShoppingCart } from 'lucide-react';

export interface IProductHeaderProps {
    title: string
}

export function ProductHeader({ title }: IProductHeaderProps) {
    return (
        <div className="w-full bg-preto flex items-center p-4 md:px-8 gap-4 md:gap-8 z-40">
            <p className="flex-1 text-branco text-2xl font-bold line-clamp-1">{title}</p>
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center bg-branco hover:bg-cinza-100 gap-2.5 px-4 md:px-8 py-3 rounded-full">
                    <p className="text-preto">Buy Now</p>
                    <ArrowRight className="text-preto size-5" />
                </button>
                <button className='p-3 rounded-full hover:bg-cinza-100/20'>
                    <ShoppingCart className="text-branco size-6" />
                </button>
            </div>
        </div>
    );
}
