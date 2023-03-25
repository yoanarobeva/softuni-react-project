import './Home.css'
import { Banner } from "./Banner";
import { memo } from 'react';
// import { Categories } from "../Categories/Categories";

const Home = () => {
    return (
        <>
          <Banner />

          {/* <Categories /> */}

        </>
    );
};

export default memo(Home);