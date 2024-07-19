import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { Product } from "../@types/Product";
import { Star } from "lucide-react";
import { ProductSectionStyle } from "../components/Product/ProductSectionStyle";
import { sizes } from "../utils/static-data";
import { ProductHeader } from "../components/Product/ProductHeader";
import { ProductRelatedItem } from "../components/Product/ProductRelatedItem";
import { ProductPageSkeleton } from "../components/Skeletons/ProductPageSkeleton";

export function ProductPage() {
  const { productId } = useParams()

  const { getProductById, getProducts } = useApi()

  const [product, setProduct] = useState<Product>({} as Product)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    getProductById(productId).then(data => {
      setLoading(false)
      setProduct(data)
    }).catch(err => console.error(err))

    getProducts().then(data => {
      setLoading(false)
      setRelatedProducts(data)
    }).catch(err => console.error(err))
  }, [])

  return (
    <main className="w-full pt-20">
      {loading ? (
        <ProductPageSkeleton />
      ) :
        product && (
          <div key={product.id} className="flex flex-col items-center gap-4 md:gap-8">
            <div className="sticky top-20 w-full lg:hidden">
              <ProductHeader title={product.title} />
            </div>
  
            <div className="w-full flex flex-col items-center lg:flex-row lg:w-full">
              <div className="flex flex-col items-center justify-center h-full md:w-1/2 lg:w-2/5 shrink-0 p-4 md:p-8">
                <img src={product.image} alt={product.title} className="h-96 w-96 object-contain object-center" />
              </div>
              <div className="w-full flex flex-col border-t lg:border-l lg:border-t-0 border-cinza-border/20">
                <div className="sticky top-20 w-full hidden lg:flex">
                  <ProductHeader title={product.title} />
                </div>
  
                <div className="flex flex-col p-4 md:p-8 gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="w-fit p-1 pl-0 text-roxo/80 text-xs text-left font-bold border-b border-roxo/80">PRICE</p>
                    <p className="py-2.5 text-preto text-6xl font-bold">${product.price}</p>
                  </div>
                  <ProductSectionStyle title="category" content={product.category} />
                  <ProductSectionStyle title="popularity" content={
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Star className="size-5 text-roxo" />
                        <p>{product.rating?.rate}</p>
                      </div>
                      -
                      <p>{product.rating?.count} reviews</p>
                    </div>
                  } />
                  <ProductSectionStyle title="product description" content={product.description} />
                  <ProductSectionStyle title="sizes" content={
                    <div className="flex items-center gap-4">
                      {sizes && sizes.map(size => (
                        <div key={size} className="w-16 h-10 flex flex-col items-center justify-center bg-branco border-cinza-800 text-cinza-800 border border-x-cinza-800 rounded-md">{size}</div>
                      ))}
                    </div>
                  } />
                  <ProductSectionStyle title="related products" content={
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {relatedProducts.length > 0 && relatedProducts.filter(rp => rp.category === product.category && rp.id !== product.id).slice(0, 2).map(rp => (
                        <ProductRelatedItem key={rp.id} rp={rp} />
                      ))}
                    </div>
                  } />
                </div>
              </div>
            </div>
          </div>
        )}
    </main>
  );
}
