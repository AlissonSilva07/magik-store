import React, { useEffect } from "react";
import { useState } from "react";

export interface IRadioCategoryProps {
    filterSort: string,
    sorting: string[]
    setSortingFilter: React.Dispatch<React.SetStateAction<string>>
}

export function SelectSorting({ filterSort, sorting, setSortingFilter }: IRadioCategoryProps) {

    const [selectedOption, setSelectedOption] = useState<string | null>(filterSort || '');

    const handleOptionChange = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
        setSortingFilter(option)
    };

    useEffect(() => {
        setSelectedOption(filterSort);
    }, [filterSort]);

    return (
        <div className="flex flex-wrap gap-3">
            {sorting.map((option) => (
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
                        className={`button ${option === selectedOption ? 'bg-roxo text-branco border border-roxo' : 'bg-branco text-cinza-800 border border-x-cinza-800 hover:text-preto hover:border-preto'} p-3 flex items-center justify-center rounded-md cursor-pointer`}
                    >
                        {option}
                    </label>
                </React.Fragment>
            ))}
        </div>

    );
}
