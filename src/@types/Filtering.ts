export interface Filtering {
    category: string,
    sort_by: string,
    price: {
        min: string | number | readonly string[] | undefined,
        max: string | number | readonly string[] | undefined
    }
}