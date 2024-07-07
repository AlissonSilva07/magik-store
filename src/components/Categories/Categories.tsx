import { useApi } from "../../hooks/useApi";
import { CategoryButton } from "./CategoryButton";

export interface ICategoriesProps {
}

export function Categories (props: ICategoriesProps) {
  const {categories} = useApi()
  return (
    <section className="w-full p-4 flex flex-col items-center gap-4">
        <h2 className="text-4xl font-bold">FLASH SALE</h2>
        <div className="w-full flex flex-col items-center gap-4">
          {categories && categories.map(c => (
            <CategoryButton title={c} />
          ))}
        </div>
    </section>
  );
}
