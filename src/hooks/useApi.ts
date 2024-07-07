import { useEffect, useState } from "react"
import { Product } from "../@types/Product"

export const useApi = () => {
    const [categories, setCategories] = useState<string[]>([])

    const getCategories = (): void => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(resp => resp.json())
        .then(data => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }

    const getProducts = async (): Promise<Product[]> => {
        const data = await fetch('https://fakestoreapi.com/products')
        const resp = await data.json()
        return resp
    }

    useEffect(() => {
        getCategories()
    }, [])

    return {categories, getProducts}
}