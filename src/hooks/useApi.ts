import { Product } from "../@types/Product"
import { api } from "../http/api"

export const useApi = () => {
    const getCategories = async (): Promise<string[]> => {
        const data = await api.get('/products/categories')
        const resp = await data.data
        return resp
    }

    const getProducts = async (): Promise<Product[]> => {
        const data = await api.get('/products')
        const resp = await data.data
        return resp
    }

    const getProductById = async (id: string | undefined): Promise<Product> => {
        const data = await api.get(`/products/${id}`)
        const resp = await data.data
        return resp
    }

    return { getCategories, getProducts, getProductById }
}