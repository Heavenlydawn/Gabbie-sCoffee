import React from "react";
import Image from "next/image";
import CoffeeIcon from "../../../public/images/coffee-icon.png";
import CoffeeRow1 from "../../../public/images/coffee-row-1.png";
import CoffeeRow2 from "../../../public/images/coffee-row-2.png";
import CoffeeRow3 from "../../../public/images/coffee-row-3.png";
import CoffeeRow4 from "../../../public/images/coffee-row-4.png";
import CoffeeRow5 from "../../../public/images/coffee-row-5.png";
const Gallery = () => {
  return (
    <div className="flex justify-around items-center flex-col md:flex-row bg-[#363032] px-16 pt-[138px] pb-12 text-white text-center text-xl">
      <div>
        <Image src={CoffeeRow1} alt="Coffee" />
        <p className="my-6">Et integer facilisi eget</p>
      </div>
      <div>
        <Image src={CoffeeRow2} alt="Coffee" />
        <p className="my-6">Et integer facilisi eget</p>
      </div>
      <div>
        <Image src={CoffeeRow3} alt="Coffee" />
        <p className="my-6">Et integer facilisi eget</p>
      </div>
      <div>
        <Image src={CoffeeRow4} alt="Coffee" />
        <p className="my-6">Et integer facilisi eget</p>
      </div>
      <div>
        <Image src={CoffeeRow5} alt="Coffee" />
        <p className="my-6">Et integer facilisi eget</p>
      </div>
    </div>
  );
};

export default Gallery;
