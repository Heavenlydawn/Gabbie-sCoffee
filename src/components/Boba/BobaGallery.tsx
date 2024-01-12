import React from "react";
import Image from "next/image";
import BobaGallery1 from "../../../public/images/boba-row-1.png";
import BobaGallery2 from "../../../public/images/boba-row-2.png";
import BobaGallery3 from "../../../public/images/boba-row-3.png";

const BobaGallery = () => {
  return (
    <div>
      <div className="flex justify-around items-center md:flex-row flex-col gap-3">
        <div className="flex items-center justify-around gap-4 md:gap-8  bg-[#FFFDFC] w-[300px] md:w-[426px] md:h-[195px] rounded-full">
          <Image src={BobaGallery1} alt="Boba in a cup" />
          <div className="text-[#252525]">
            <h3 className="text-3xl md:text-5xl font-semibold">56</h3>
            <p className="text-lg md:text-xl my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around gap-4 md:gap-8  bg-[#FFFDFC] w-[300px] md:w-[426px] md:h-[195px] rounded-full">
          <Image src={BobaGallery2} alt="Boba in a cup" />
          <div className="text-[#252525]">
            <h3 className="text-3xl md:text-5xl font-semibold">88</h3>
            <p className="text-lg md:text-xl my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-around gap-4 md:gap-8  bg-[#FFFDFC] w-[300px] md:w-[426px] md:h-[195px] rounded-full">
          <Image src={BobaGallery3} alt="Boba in a cup" />
          <div className="text-[#252525]">
            <h3 className="text-3xl md:text-5xl font-semibold">23</h3>
            <p className="text-lg md:text-xl my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BobaGallery;
