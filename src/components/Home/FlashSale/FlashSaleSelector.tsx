export interface IFlashSaleSelectorProps {
    categories: string[]
    handleCategory: (category: string) => void
}

export function FlashSaleSelector ({ categories, handleCategory }: IFlashSaleSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleCategory(e.target.value)
  }
  return (
    <select onChange={handleChange} className="w-full lg:w-fit p-2.5 border-b-2 border-b-roxo text-roxo font-bold">
      {categories && categories.map(c => (
        <option key={c} value={c}>
            {c.toLocaleUpperCase()}
        </option>
      ))}
    </select>
  );
}
