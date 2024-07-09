import React from "react";
import { ChangeEvent, useRef, useState } from "react";

export interface IRadioCategoryProps {
    categories: string[]
    setInputChecked: (option: string) => void
}

export function SelectCategory({ categories, setInputChecked }: IRadioCategoryProps) {
    const categoriesRef = useRef(null);

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

    return (
        <div ref={categoriesRef} className="flex items-center gap-4 overflow-x-scroll">
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
                        className={`button ${option === selectedOption ? 'bg-roxo text-branco hover:bg-roxo hover:text-branco' : 'bg-branco text-cinza-800 hover:text-preto'} shrink-0 px-3 py-1 flex items-center justify-center rounded-full cursor-pointer`}
                    >
                        {option}
                    </label>
                </React.Fragment>
            ))}
        </div>

    );
}
