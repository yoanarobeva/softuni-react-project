import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TopHeader } from "./components/TopHeader";

function App() {
  return (
    <>
      <TopHeader />

      <Header />

      <Banner />

      <Categories />

      <FeaturedProducts />

      <Footer />
    </>
  );
}

export default App;
