import { Product } from "../@types/Product";
import { ArrowRight, Check, ShoppingCartIcon, Star } from 'lucide-react'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";
import { ProductContext } from "../context/product-context";

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

export function ProductCard({ product, btnSize }: IProductCardProps) {
  const { cart, handleAddProduct, handleRemoveProduct } = useContext(ProductContext)
  const [isAdded, setIsAdded] = useState<boolean>(false)

  const addProduct = (product: Product) => {
    if (cart.cartItems.find(p => p.product.id === product.id)) {
      handleRemoveProduct(product.id)
      setIsAdded(false)
    }

    handleAddProduct(product)

    setIsAdded(true)
  }

  return (
    <div className={card({ size: btnSize })}>
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className='h-[240px] w-full object-contain' />
      </Link>
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
          <button disabled={isAdded} onClick={() => addProduct(product)} className="p-3 hover:bg-roxo/10 rounded-full">
            {isAdded ? <Check className="text-roxo" /> : <ShoppingCartIcon className="text-roxo" />}
          </button>
        </div>
      </div>
    </div>
  );
}
