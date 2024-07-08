import { Categories } from "../components/Home/Categories/Categories";
import { FlashSale } from "../components/Home/FlashSale/FlashSale";
import { Hero } from "../components/Home/Hero/Hero";
import { Spinner } from "../components/Home/Spinner/Spinner";
import { TopBrands } from "../components/Home/TopBrands/TopBrands";

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
