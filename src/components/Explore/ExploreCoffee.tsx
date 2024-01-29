import React from "react";
import ExploreData, { ExploreItem } from "./ExploreData";
import Image from "next/image";
import Line from "../../../public/images/LineDark.png";
const ExploreCoffee = () => {
  return (
    <div className="bg-[#FFFADA] p-12">
      <div className="flex justify-around items-center">
        <Image src={Line} alt="Line" />
        <h1 className="text-4xl text-center text-[#C08267] font-bold">
          Explore The Coffee World
        </h1>
        <Image src={Line} alt="Line" />
      </div>

      <div className="flex justify-around flex-col md:flex-row text-white my-12">
        {ExploreData.map((item: ExploreItem) => (
          <div key={item.id} className="w-[260px] p-8 bg-[#C08267] h-[450px] rounded-xl">
            <Image
              src={`/images/${item.image}`}
              alt={`${item.name}-Image`}
              width={240}
              height={250}
              className="rounded-[10px]"
            />
            <h2 className=" text-3xl font-bold py-8">{item.name}</h2>
            <p className="text-[#FFFADA] text-xl pb-8">{item.description}</p>

            <div className="flex items-center justify-between ">
              <p className="text-2xl font-bold">Price: ${item.price}</p>

              <button className="bg-[#A0583C] rounded-xl text-2xl py-4 px-2 cursor-pointer">Order Now!</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCoffee;
