import React from "react";
import Image from "next/image";
import CoffeeIcon from "../../../public/images/coffee-icon.png";
const SubHeroFloat = () => {
  return (
    <div>
      <div className="bg-[#ECDAC4] rounded-[80px] md:w-[878px] md:h-[188px] py-7 px-24 flex justify-around items-center flex-col md:flex-row">
        <div className="flex justify-center items-center flex-col gap-4 w-[170px] h-12 text-center">
          <div className="bg-white bg-opacity-35 p-4 rounded-full">
            <Image src={CoffeeIcon} alt="Icon" />
          </div>
          <h2 className="text-3xl font-bold text-[#363031]">190+</h2>
          <p className="w-[80px]">Lorem ipsum dolor sit amet, consectetur</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-4 w-[170px] h-12 text-center">
          <div className="bg-white bg-opacity-35 p-4 rounded-full">
            <Image src={CoffeeIcon} alt="Icon" />
          </div>
          <h2 className="text-3xl font-bold text-[#363031]">123K</h2>
          <p className="w-[80px]">Lorem ipsum dolor sit amet, consectetur</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-4 w-[170px] h-12 text-center">
          <div className="bg-white bg-opacity-35 p-4 rounded-full">
            <Image src={CoffeeIcon} alt="Icon" />
          </div>
          <h2 className="text-3xl font-bold text-[#363031]">58</h2>
          <p className="w-[80px]">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </div>
  );
};

export default SubHeroFloat;
