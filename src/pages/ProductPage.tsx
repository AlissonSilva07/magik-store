import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { Product } from "../@types/Product";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import { ProductSectionStyle } from "../components/Product/ProductSectionStyle";
import { sizes } from "../utils/static-data";

export function ProductPage() {
  const { productID } = useParams()
  const { getProductById } = useApi()

  const [product, setProduct] = useState<Product>({} as Product)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    getProductById(productID).then(data => {
      console.log(data)
    }).catch(err => console.error(err))
  }, [product])

  return (
    <main className="pt-20 flex flex-col items-center gap-4">
      <div className="w-full bg-preto flex items-center p-4 gap-4">
        <p className="flex-1 text-branco text-2xl font-bold line-clamp-1">{product.title}</p>
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center bg-branco gap-2.5 px-4 py-2.5 rounded-full">
            <p className="text-preto">Buy</p>
            <ArrowRight className="text-preto size-5" />
          </button>
          <button>
            <ShoppingCart className="text-branco size-5" />
          </button>
        </div>
      </div>

      <img src={product.image} alt={product.title} className="h-[372px] w-full object-contain" />

      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="w-fit p-2.5 pl-0 text-cinza-800 text-xs text-left font-bold border-b border-cinza-800">PRICE</p>
          <p className="py-2.5 text-preto text-5xl font-bold">${product.price}</p>
        </div>
        <ProductSectionStyle title="category" content={product.category} />
        <ProductSectionStyle title="popularity" content={
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Star className="size-5 text-roxo" />
              <p>{product.rating.rate}</p>
            </div>
            -
            <p>{product.rating.count} reviews</p>
          </div>
        } />
        <ProductSectionStyle title="product description" content={product.description} />
        <ProductSectionStyle title="sizes" content={
          <div className="flex items-center gap-4">
            {sizes && sizes.map(size => (
              <div className="w-16 h-10 flex flex-col items-center justify-center bg-branco border-cinza-800 text-cinza-800 border border-x-cinza-800 rounded-md">{size}</div>
            ))}
          </div>
        } />
      </div>
    </main>
  );
}
