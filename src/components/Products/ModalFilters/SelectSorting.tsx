import React from "react";
import { useState } from "react";

export interface IRadioCategoryProps {
    sorting: string[]
    setInputChecked: (option: string) => void
}

export function SelectSorting({ sorting, setInputChecked }: IRadioCategoryProps) {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option === selectedOption ? null : option);
    };

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
                        className={`button ${option === selectedOption ? 'bg-roxo text-branco border border-roxo' : 'bg-branco text-preto border'} p-3 flex items-center justify-center rounded-md`}
                    >
                        {option}
                    </label>
                </React.Fragment>
            ))}
        </div>

    );
}
