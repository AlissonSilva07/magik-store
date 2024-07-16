import { Filtering } from "../@types/Filtering";
import { Product } from "../@types/Product";

export const applyFilters = (products: Product[], filters: Filtering) => {
    const filteredProducts = [...products];

    switch (filters.sort_by) {
        case 'Popularity':
            return filteredProducts
                .sort((a, b) => b.rating.rate - a.rating.rate)
                .filter(p => filters.category ? p.category === filters.category : p)
                .filter(p => filters.price.max && filters.price.min ? p.price > Number(filters.price.min) && p.price < Number(filters.price.max) : p)
        case 'A-Z':
            return filteredProducts
                .sort((a, b) => a.title.localeCompare(b.title))
                .filter(p => filters.category ? p.category === filters.category : p)
                .filter(p => filters.price.max && filters.price.min ? p.price > Number(filters.price.min) && p.price < Number(filters.price.max) : p)
        case 'Z-A':
            return filteredProducts.
                sort((a, b) => b.title.localeCompare(a.title))
                .filter(p => filters.category ? p.category === filters.category : p)
                .filter(p => filters.price.max && filters.price.min ? p.price > Number(filters.price.min) && p.price < Number(filters.price.max) : p)
        case 'High Price':
            return filteredProducts
                .sort((a, b) => b.price - a.price)
                .filter(p => filters.category ? p.category === filters.category : p)
                .filter(p => filters.price.max && filters.price.min ? p.price > Number(filters.price.min) && p.price < Number(filters.price.max) : p)
        case 'Low Price':
            return filteredProducts
                .sort((a, b) => a.price - b.price)
                .filter(p => filters.category ? p.category === filters.category : p)
                .filter(p => filters.price.max && filters.price.min ? p.price > Number(filters.price.min) && p.price < Number(filters.price.max) : p)
        default:
            break;
    }

    return filteredProducts;
};