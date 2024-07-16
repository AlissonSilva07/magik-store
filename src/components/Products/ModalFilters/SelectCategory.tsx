import React from "react";
import { useRef, useState } from "react";

export interface IRadioCategoryProps {
    filterCategory: string
    categories: string[]
    setCategoryFilter: React.Dispatch<React.SetStateAction<string>>
}

export function SelectCategory({ filterCategory, categories, setCategoryFilter }: IRadioCategoryProps) {
    const categoriesRef = useRef(null);

    const [selectedOption, setSelectedOption] = useState<string | null>(filterCategory ? filterCategory : '');

    const handleOptionChange = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
        setCategoryFilter(option)
    };

    return (
        <div ref={categoriesRef} className="flex items-center gap-8 overflow-x-scroll">
            {categories.map((option) => (
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
                        className={`button ${option === selectedOption ? 'bg-roxo text-branco hover:bg-roxo hover:text-branco' : 'bg-branco text-cinza-800 lg:hover:text-preto'} shrink-0 px-3 py-1 flex items-center justify-center rounded-full cursor-pointer`}
                    >
                        {option}
                    </label>
                </React.Fragment>
            ))}
        </div>

    );
}
