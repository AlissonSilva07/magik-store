import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { FlashSaleSelector } from "./FlashSaleSelector";
import { Product } from "../../@types/Product";
import { ProductCard } from "../ProductCard";

export interface IFlashSaleProps {
}

export function FlashSale (props: IFlashSaleProps) {
    const {categories, getProducts} = useApi()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts().then(data => {
            console.log(data)
            setProducts(data)
        })
        .catch(err => console.error(err))
    }, [])
  return (
    <section className="w-full p-4 md:p-8 flex flex-col items-center gap-4 md:gap-8 lg:p-16">
        <h2 className="text-4xl font-bold">FLASH SALE</h2>
        <FlashSaleSelector categories={categories} />
        <div className="w-full flex flex-col lg:flex-row items-center gap-4">
          {products && products.map(p => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
    </section>
  );
}
