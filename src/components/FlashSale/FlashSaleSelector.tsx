export interface IFlashSaleSelectorProps {
    categories: string[]
}

export function FlashSaleSelector ({ categories }: IFlashSaleSelectorProps) {
  return (
    <select className="w-full p-2.5 border-b-2 border-b-roxo text-roxo font-bold">
      {categories && categories.map(c => (
        <option key={c} value={c}>
            {c.toLocaleUpperCase()}
        </option>
      ))}
    </select>
  );
}
