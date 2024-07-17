import { useApi } from "../../../hooks/useApi";
import { CategoryButtonSkeleton } from "../../Skeletons/CategoryButtonSkeleton";
import { CategoryButton } from "./CategoryButton";

export function Categories() {
  const { categories } = useApi()
  
  return (
    <section className="w-full p-4 md:p-8 flex flex-col items-center gap-4 md:gap-8 lg:p-16">
      <h2 className="text-4xl font-bold">SHOP BY CATEGORY</h2>
      <div className="w-full flex flex-col lg:flex-row items-center gap-4">
        {categories ? categories.map(c => (
          <CategoryButton key={c} title={c} />
        )): (
          <CategoryButtonSkeleton />
        )}
      </div>
    </section>
  );
}
