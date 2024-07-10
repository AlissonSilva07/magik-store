import { Product } from "../@types/Product";
import { ArrowRight, ShoppingCartIcon, Star } from 'lucide-react'
import { tv } from "tailwind-variants";

export interface IProductCardProps {
    product: Product
    btnSize: "full" | "fixed" | undefined
}

const card = tv({
  base: 'flex flex-col p-3 gap-3 shrink-0 border border-cinza-border/20 rounded-lg',
  variants: {
    size: {
      full: 'w-full h-full',
      fixed: 'w-[336px] min-w-[336px]'
    }
  }
})

export function ProductCard ({ product, btnSize }: IProductCardProps) {
  return (
    <div className={card({ size: btnSize })}>
      <img src={product.image} alt={product.title} className='h-[240px] w-full object-contain' />
      <div className="flex flex-col p-3 gap-3">
        <p className="h-8 text-xl font-bold line-clamp-2">{product.title}</p>
        <div className="w-full flex items-center gap-4">
            <p className="text-roxo text-sm font-bold">{product.category}</p>
            <span className="flex items-center gap-1 px-2.5 border border-roxo rounded-full text-xs text-roxo">
              <Star className="w-[14px]" />
              {product.rating.rate}
            </span>
        </div>
        <p className="text-cinza-800 line-clamp-2">{product.description}</p>
        <p className="text-3xl font-bold">${product.price}</p>

        <div className="w-full flex items-center gap-6">
            <button className="w-full flex items-center justify-center p-3 gap-2.5 bg-roxo/20 hover:bg-roxo/40 text-roxo rounded-full">
                Buy Now
                <ArrowRight className="text-roxo" />
            </button>
            <button className="p-3 hover:bg-roxo/10 rounded-full">
                <ShoppingCartIcon className="text-roxo" />
            </button>
        </div>
      </div>
    </div>
  );
}
