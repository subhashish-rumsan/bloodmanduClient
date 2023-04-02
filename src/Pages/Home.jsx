import React from "react";
import Navbar from "../components/Navbar-components/Navbar";
import Whatwecando from "../components/whatwecando/Whatwecando";
import Banner from "../components/banner-component/Banner";
import Bannercontainer from "../components/banner-container/Bannercontainer";
import Stats from "../components/Stats-section/Stats";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      {/* <Bannercontainer /> */}
      {/* <Stats /> */}
      <Whatwecando />
      <Footer />
    </div>
  );
};

export default Home;
