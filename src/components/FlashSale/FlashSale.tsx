import { useEffect, useMemo, useRef, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { FlashSaleSelector } from "./FlashSaleSelector";
import { Product } from "../../@types/Product";
import { ProductCard } from "../ProductCard";

export interface IFlashSaleProps {
}

export function FlashSale (props: IFlashSaleProps) {
    const {categories, getProducts} = useApi()
    const [products, setProducts] = useState<Product[]>([])
    const [category, setCategory] = useState<string>('electronics')

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
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

    const cardsRef = useRef(null);
  const currentIndex = useRef(0);

  return (
    <section className="w-full p-4 md:p-8 flex flex-col items-center gap-4 md:gap-8 lg:p-16">
        <h2 className="text-4xl font-bold">FLASH SALE</h2>
        <FlashSaleSelector categories={categories} handleCategory={handleCategory} />
        <div ref={cardsRef} className="w-full flex items-center lg:justify-center gap-8 lg:gap-16 overflow-x-scroll lg:overflow-hidden scroll-smooth">
            {filteredProducts && filteredProducts.map(p => (
                <ProductCard product={p} key={p.id} />
            ))}
        </div>
        <div>
            <p className="lg:hidden text-sm text-cinza-800 italic"><span className="font-bold">hint:</span> swipe left to see more</p>
        </div>
    </section>
  );
}
