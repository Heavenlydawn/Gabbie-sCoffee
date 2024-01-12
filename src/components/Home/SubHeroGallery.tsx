import React from "react";
import SubHeroFloat from "./SubHeroFloat";
import Gallery from "./Gallery";
const SubHeroGallery = () => {
  return (
    <div>
      <div className="flex justify-center items-center -mb-24">
        <SubHeroFloat />
      </div>
      
      <div>
        <Gallery />
      </div>
    </div>
  );
};

export default SubHeroGallery;
