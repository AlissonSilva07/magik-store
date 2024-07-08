import { Categories } from "../components/Categories/Categories";
import { FlashSale } from "../components/FlashSale/FlashSale";
import { Hero } from "../components/Hero/Hero";
import { Spinner } from "../components/Spinner/Spinner";
import { TopBrands } from "../components/TopBrands/TopBrands";

export function Home () {
  return (
    <main>
      <Hero />
      <Spinner />
      <Categories />
      <FlashSale />
      <TopBrands />
    </main>
  );
}
