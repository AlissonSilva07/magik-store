import { Product } from "../@types/Product";
import ArrowRight from '../assets/ProductCard/arrow-right.png'
import ShoppingCart from '../assets/ProductCard/shopping-cart.png'

export interface IProductCardProps {
    product: Product
}

export function ProductCard ({ product }: IProductCardProps) {
  return (
    <div className="w-full flex flex-col p-3 gap-3 border border-preto rounded-lg">
      <img src={product.image} alt={product.title} className="h-[335px] w-full object-contain" />
      <div className="flex flex-col p-3 gap-3">
        <p className="text-xl font-bold">{product.title}</p>
        <div className="w-full flex items-center gap-4">
            <p className="text-roxo text-sm">{product.category}</p>
            <span className="px-2.5 border border-roxo rounded-full text-sm text-roxo">{product.rating.rate}</span>
        </div>
        <p className="text-cinza-800 line-clamp-2">{product.description}</p>
        <p className="text-3xl font-bold">${product.price}</p>

        <div className="w-full flex items-center gap-6">
            <button className="w-full flex items-center justify-center p-3 gap-2.5 bg-roxo/20 text-roxo rounded-full">
                Buy Now
                <img src={ArrowRight} alt="Buy Now" />
            </button>
            <button className="p-2.5">
                <img src={ShoppingCart} alt="" />
            </button>
        </div>
      </div>
    </div>
  );
}
