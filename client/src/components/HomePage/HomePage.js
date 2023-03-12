import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { FeaturedProducts } from "./FeaturedProducts";

export const HomePage = () => {
    return (
        <>
          <Banner />

          <Categories />

          <FeaturedProducts />
        </>
    );
};