import React from "react";
import Navbar from "../components/Navbar-components/Navbar";
import Banner from "../components/banner-component/Banner";
import Bannercontainer from "../components/banner-container/Bannercontainer";
import Stats from "../components/Stats-section/Stats";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      {/* <Bannercontainer /> */}
      <Stats />
    </div>
  );
};

export default Home;
