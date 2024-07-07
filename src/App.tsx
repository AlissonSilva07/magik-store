import { Categories } from "./components/Categories/Categories"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Spinner } from "./components/Spinner/Spinner"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Spinner />
      <Categories />
    </>
  )
}

export default App
