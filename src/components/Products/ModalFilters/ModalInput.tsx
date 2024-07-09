import { ChangeEvent, useState } from "react";

export interface IModalInputProps {
    placeholder: string
}

export function ModalInput ({ placeholder }: IModalInputProps) {
    const [price, setPrice] = useState<string | number | readonly string[] | undefined>(undefined)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPrice(e.target.value)
    }

  return (
    <input type="number" step={0.01} min={0.01} placeholder={placeholder} value={price} onChange={e => handleChange(e)} className="w-full p-3 text-cinza-800 border border-cinza-800 rounded-lg" />
  );
}
