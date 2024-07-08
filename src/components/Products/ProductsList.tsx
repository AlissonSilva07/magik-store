import { useEffect, useState } from "react";
import { Product } from "../../@types/Product";
import { useApi } from "../../hooks/useApi";
import { ProductCard } from "../Home/ProductCard";
import { ProductsPagination } from "./ProductsPagination";

export interface IProductsListProps {
}

export function ProductsList (props: IProductsListProps) {
    const {getProducts} = useApi()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data)
        })
        .catch(err => console.error(err))
    }, [])

    const itemsPerPage = 10
    const playlistLength: number | undefined = products?.length
    const [ current, setCurrent ] = useState<number>(1)

    const currentItems = products?.slice(
        (current - 1) * itemsPerPage,
        current * itemsPerPage
    )

  return (
    <section className="flex flex-col gap-4">
      <p className="text-2xl font-bold">Showing: All Products</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
        {currentItems && currentItems.map(p => (
            <ProductCard product={p} key={p.id} />
        ))}
      </div>
      <ProductsPagination current={current} setCurrent={setCurrent} itemsPerPage={itemsPerPage} playlistLength={playlistLength} />
    </section>
  );
}
