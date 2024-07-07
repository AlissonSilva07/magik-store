import { useEffect, useState } from "react"

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

    useEffect(() => {
        getCategories()
    }, [])

    return {categories}
}