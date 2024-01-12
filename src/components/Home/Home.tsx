import React from "react";
import Header from "../Header/Header";
import Hero from "./Hero"
import SubHero from "./SubHero";
import SubHeroGallery from "./SubHeroGallery";
import Footer from "../Footer/Footer"
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SubHero />
      <SubHeroGallery />
      <Footer />
    </div>
  );
};

export default Home;