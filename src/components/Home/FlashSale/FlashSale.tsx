import { useEffect, useMemo, useRef, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { FlashSaleSelector } from "./FlashSaleSelector";
import { Product } from "../../../@types/Product";
import { ProductCard } from "../../ProductCard";
import { ProductCardSkeleton } from "../../Skeletons/ProductCardSkeleton";

export function FlashSale() {
    const { categories, getProducts } = useApi()
    const [products, setProducts] = useState<Product[]>([])
    const [category, setCategory] = useState<string>('electronics')
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        getProducts().then(data => {
            setProducts(data)
            setLoading(false)
        })
            .catch(err => console.error(err))
    }, [])

    const handleCategory = (category: string): void => {
        setCategory(category)
    }

    const filteredProducts = useMemo(() => {
        return products?.filter(i => {
            return i.category.toLocaleLowerCase().includes(category.toLowerCase())
        }).slice(0, 3)
    }, [products, category])

    const productsRef = useRef(null);

    return (
        <section className="w-full p-4 md:p-8 flex flex-col items-center gap-4 md:gap-8 lg:p-16">
            <h2 className="text-4xl font-bold">FLASH SALE</h2>
            <FlashSaleSelector loading={loading} categories={categories} handleCategory={handleCategory} />
            <div ref={productsRef} className="w-full flex items-center lg:justify-center gap-8 lg:gap-16 overflow-x-scroll lg:overflow-hidden scroll-smooth">
                {!loading ? (
                    filteredProducts && filteredProducts.map(p => (
                        <ProductCard product={p} key={p.id} btnSize="fixed" />
                    ))
                ) : (
                    <>
                        <ProductCardSkeleton btnSize="fixed" />
                        <ProductCardSkeleton btnSize="fixed" />
                        <ProductCardSkeleton btnSize="fixed" />
                    </>
                )}
            </div>
            <div>
                <p className="lg:hidden text-sm text-cinza-800 italic"><span className="font-bold">hint:</span> swipe left to see more</p>
            </div>
        </section>
    );
}
