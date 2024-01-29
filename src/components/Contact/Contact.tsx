import React from "react";
import Hero from "../Home/Hero";
import ContactDets from "./ContactDets";
import SubHero from "../Home/SubHero";
import SubHeroGallery from "../Home/SubHeroGallery";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <div>
      <Hero />
      <ContactDets />
      <SubHero />
      <SubHeroGallery />
      <Footer />
    </div>
  );
};

export default Contact;
