import React from "react";
// import Header from "../Header/Header";
import Hero from "./Hero"
import SubHero from "./SubHero";
import SubHeroGallery from "./SubHeroGallery";
import BobaVibe from "../Boba/Boba";
import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <SubHero />
      <SubHeroGallery />
      <BobaVibe />
      <Footer />
    </div>
  );
};

export default Home;