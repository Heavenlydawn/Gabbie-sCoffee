import React from "react";
import ExploreData, { ExploreItem } from "./ExploreData";
import Image from "next/image";
const ExploreCoffee = () => {
  return (
    <div className="bg-[#FFFADA]">
<div>
<h1 className="text-3xl text-center">Explore The Coffee World</h1>
</div>
      <div>
        {ExploreData.map((item: ExploreItem) => (
          <div key={item.id}>
            <Image src={`/images/${item.image}`} alt={`${item.name}-Image`} width={240} height={250}/>
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCoffee;
