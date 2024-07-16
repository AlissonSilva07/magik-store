import { useState } from "react";
import { Product } from "../../@types/Product";
import { ProductCard } from "../ProductCard";
import { ProductsPagination } from "./ProductsPagination";
import { Filtering } from "../../@types/Filtering";

export interface IProductsListProps {
  filter: Filtering
  products: Product[]
}

export function ProductsList ({ products, filter }: IProductsListProps) {
    

    const itemsPerPage = 8
    const playlistLength: number | undefined = products?.length
    const [ current, setCurrent ] = useState<number>(1)

    const currentItems = products?.slice(
        (current - 1) * itemsPerPage,
        current * itemsPerPage
    )

  return (
    <section className="flex flex-col gap-4 lg:w-4/5 lg:p-4">
      <p className="text-center md:text-start lg:py-2 text-2xl font-bold">Showing: {filter.category || 'all products'}</p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
        {currentItems && currentItems.map(p => (
            <ProductCard product={p} key={p.id} btnSize="full" />
        ))}
      </div>
      {products.length > 8 && <ProductsPagination current={current} setCurrent={setCurrent} itemsPerPage={itemsPerPage} playlistLength={playlistLength} />}
    </section>
  );
}
