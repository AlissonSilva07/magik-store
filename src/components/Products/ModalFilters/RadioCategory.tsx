import { ChangeEvent, useRef, useState } from "react";

export interface IRadioCategoryProps {
    categories: string[]
    setInputChecked: () => void
}

export function RadioCategory({ categories, setInputChecked }: IRadioCategoryProps) {
    const categoriesRef = useRef(null);

    const [checked, setChecked] = useState<string>('')

    const onOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.value)
    }

    return (
        <div ref={categoriesRef} className="w-full flex items-center gap-4 overflow-x-scroll">
            {categories && categories.map(c => (
                <label
                    key={c}
                    className={`inline-flex shrink-0 items-center justify-center px-3 py-1 cursor-pointer rounded-full ${checked ? 'bg-roxo text-branco' : 'bg-branco text-cinza-100'}`}
                >
                    <input
                        type="radio"
                        className="hidden"
                        onChange={onOptionChange}
                        checked={checked === c}
                    />
                    {c}
                </label>
            ))}
        </div>

    );
}
