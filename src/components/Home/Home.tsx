import React from "react";
// import Header from "../Header/Header";
import Hero from "./Hero"
import SubHero from "./SubHero";
import SubHeroGallery from "./SubHeroGallery";
import BobaVibe from "../Boba/Boba";
import CoffeeLang from "../CoffeeLang/CoffeeLang";
import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <BobaVibe />
      <SubHero />
      <SubHeroGallery />
      <CoffeeLang />
      <Footer />
    </div>
  );
};

export default Home;