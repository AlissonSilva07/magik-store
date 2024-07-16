import { Filtering } from "../@types/Filtering";

export const countFilter = (filter: Filtering): number => {
    let counter = 0

    for (const key in filter) {
        if (Object.prototype.hasOwnProperty.call(filter, key)) {
            const value = filter[key as keyof Filtering];

            if (typeof value === 'string' && value.length > 0) {
                counter++;
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                for (const insideKey in value) {
                    if (Object.prototype.hasOwnProperty.call(value, insideKey)) {
                        const insideValue = value[insideKey as keyof typeof value];

                        if (typeof insideValue === 'number' && insideValue !== 0) {
                            counter++;
                        }
                    }
                }
            }
        }
    }

    return counter
}