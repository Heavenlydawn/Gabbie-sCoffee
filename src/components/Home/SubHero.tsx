import React from "react";
import Image from "next/image";
import Coffee from "../../../public/images/Coffee-1.png";

const SubHero = () => {
  return (
    <div className="my-8 sm:my-16 md:my-24 lg:my-32">
      <div className="flex flex-col-reverse items-center justify-around sm:flex-row">
        <div className="text-center sm:text-left sm:mr-8 lg:mr-16 xl:mr-24">
          <div className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight lg:leading-[100px]">
            <h2>Your Coffee</h2>
            <h2>Your Vibe</h2>
            <h2>Your Energy</h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 sm:w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            in libero risus semper habitant arcu eget. Et integer facilisi
            eget.
          </p>
          <div className="mt-6 sm:mt-9">
            <button className="w-full sm:w-[200px] h-[55px] bg-[#ce704a] text-white text-xl rounded-3xl">
              Explore Us
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-0">
          <Image src={Coffee} alt="Coffee Image" width="500" height="500" />
        </div>
      </div>
    </div>
  );
};

export default SubHero;
