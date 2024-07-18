import { Product } from "../@types/Product"

export const useApi = () => {
    const getCategories = async (): Promise<string[]> => {
        const data = await fetch('https://fakestoreapi.com/products/categories')
        const resp = await data.json()
        return resp
    }

    const getProducts = async (): Promise<Product[]> => {
        const data = await fetch('https://fakestoreapi.com/products')
        const resp = await data.json()
        return resp
    }

    return {getCategories, getProducts}
}