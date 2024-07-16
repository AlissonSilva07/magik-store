import { Filtering } from "../@types/Filtering";

export const DEFAULT_FILTER: Filtering = {
    category: "",
    sort_by: "",
    price: {
        "min": undefined,
        "max": undefined
    }
}