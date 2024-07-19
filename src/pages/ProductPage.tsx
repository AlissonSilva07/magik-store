import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { Product } from "../@types/Product";
import { ChevronLeft, ExternalLink, Star } from "lucide-react";
import { ProductSectionStyle } from "../components/Product/ProductSectionStyle";
import { ProductHeader } from "../components/Product/ProductHeader";
import { ProductRelatedItem } from "../components/Product/ProductRelatedItem";
import { ProductPageSkeleton } from "../components/Skeletons/ProductPageSkeleton";
import { ProductContext } from "../context/product-context";
import { sizes } from "../utils/static-data";

export function ProductPage() {
  const { productId } = useParams()

  const { getProductById, getProducts } = useApi()

  const [product, setProduct] = useState<Product>({} as Product)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { updateFilter } = useContext(ProductContext)

  const navigate = useNavigate()

  const goToCategory = () => {
    setFilters(product.category)
    navigate('/products')
  }

  const setFilters = (category: string) => {
    updateFilter({
      category: `${category}`,
      sort_by: 'Popularity',
      price: {
        min: undefined,
        max: undefined
      }
    })
  }

  useEffect(() => {
    setLoading(true)
    getProductById(productId).then(data => {
      setLoading(false)
      setProduct(data)
    }).catch(err => console.error(err))

    getProducts().then(data => {
      setRelatedProducts(data)
    }).catch(err => console.error(err))
  }, [])

  return (
    <main className="w-full pt-20">
      {loading ? (
        <ProductPageSkeleton />
      ) :
        product && (
          <div key={product.id} className="relative flex flex-col items-center">
            <Link to='/products' className="absolute top-24 left-2 lg:top-4 lg:left-8 md:left-4 flex items-center justify-center bg-branco border border-cinza-border/20 hover:bg-cinza-100 gap-2.5 py-3 px-4 rounded-full shadow-lg">
              <ChevronLeft className="size-5" />
              <p className="hidden md:block">Back</p>
            </Link>
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
                  <ProductSectionStyle title="category" content={
                    <button onClick={() => goToCategory()} className="flex items-center gap-2 hover:underline hover:decoration-solid">
                      {product.category}
                      <ExternalLink className="size-4" />
                    </button>
                  } />
                  <ProductSectionStyle title="popularity" content={
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Star className="size-5 text-amarelo fill-amarelo" />
                        <p className="font-bold">{product.rating?.rate}</p>
                      </div>
                      -
                      <p>{product.rating?.count} reviews</p>
                    </div>
                  } />
                  <ProductSectionStyle title="product description" content={product.description} />
                  <ProductSectionStyle title="sizes" content={
                    <div className="flex items-center gap-4">
                      {sizes && sizes.map(i => (
                        <div key={i.size} className={`w-16 h-10 flex flex-col items-center justify-center bg-branco ${i.available ? 'bg-preto text-branco' : 'border border-cinza-border/20 text-cinza-border/20'} font-bold rounded-md`}>{i.size}</div>
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
