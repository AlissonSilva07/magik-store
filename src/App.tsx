import { Categories } from "./components/Categories/Categories"
import { FlashSale } from "./components/FlashSale/FlashSale"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Spinner } from "./components/Spinner/Spinner"
import { TopBrands } from "./components/TopBrands/TopBrands"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Spinner />
      <Categories />
      <FlashSale />
      <TopBrands />
    </>
  )
}

export default App
