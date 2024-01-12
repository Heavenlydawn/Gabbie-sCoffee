import React from "react";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div id="hero">
      <Header />
      <section className="flex justify-center items-center md:p-[289px] py-[100px] px-[50px]">
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
            Power Up With Coffee
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium pt-4">
            Start your exciting day with a cup of Brew Coffee
          </p>

          <div className="mt-8">
            <button className="w-full sm:w-[250px] h-[55px] bg-[#A0583C] text-white text-xl sm:text-2xl rounded-3xl">
              Explore Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

