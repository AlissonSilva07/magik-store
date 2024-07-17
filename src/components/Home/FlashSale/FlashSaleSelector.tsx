export interface IFlashSaleSelectorProps {
  loading: boolean
  categories: string[]
  handleCategory: (category: string) => void
}

export function FlashSaleSelector({ loading, categories, handleCategory }: IFlashSaleSelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleCategory(e.target.value)
  }
  return (
    <select onChange={handleChange} className="w-full lg:w-fit p-2.5 border-b-2 border-b-roxo text-roxo font-bold">
      {!loading ? (
        categories && categories.map(c => (
          <option key={c} value={c}>
            {c.toLocaleUpperCase()}
          </option>
        ))
      ):(
        <option>
            Loading categories
          </option>
      )}
    </select>
  );
}
