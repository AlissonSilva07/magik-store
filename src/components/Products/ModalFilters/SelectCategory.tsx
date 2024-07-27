import React, { useEffect } from "react";
import { useState } from "react";
import { SelectCategorySkeleton } from "../../Skeletons/SelectCategorySkeleton";

export interface IRadioCategoryProps {
    loading: boolean
    filterCategory: string
    categories: string[]
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>
}

export function SelectCategory({ loading, filterCategory, categories, setCategoryFilter }: IRadioCategoryProps) {

    const [selectedOption, setSelectedOption] = useState<string | null>(filterCategory || '');

    const handleOptionChange = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
        setCategoryFilter(option)
    };

    useEffect(() => {
        setSelectedOption(filterCategory);
    }, [filterCategory]);

    return (
        <div className="flex flex-wrap items-center gap-4">
            {!loading ?
                categories.map(option => (
                    <React.Fragment key={option}>
                        <input
                            type="radio"
                            id={option}
                            name="options"
                            value={option}
                            checked={option === selectedOption}
                            onChange={() => handleOptionChange(option)}
                            className="hidden"
                        />
                        <label
                            htmlFor={option}
                            onTouchStart={() => handleOptionChange(option)}
                            className={`${option === selectedOption ? 'bg-roxo text-branco hover:bg-roxo hover:text-branco' : 'bg-branco text-cinza-800 lg:hover:text-preto'} px-3 py-1 flex items-center justify-center rounded-full cursor-pointer shadow-md`}
                        >
                            {option}
                        </label>
                    </React.Fragment>
                )) : (
                    <>
                        <SelectCategorySkeleton />
                        <SelectCategorySkeleton />
                        <SelectCategorySkeleton />
                        <SelectCategorySkeleton />
                    </>
                )
            }
        </div>

    );
}
