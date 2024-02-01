import React from "react";
import Image from "next/image";
import BobaVibe from "../../../public/images/bobavida-hero.png";
import BobaIllustration from "../../../public/images/boba-illustration.png";
import BobaGallery from "./BobaGallery";
import Link from "next/link";

const Boba = () => {
  return (
    <div className="bg-[#E8D9D6]  pb-[96px] px-4">
      <div className="flex items-center justify-center md:flex-row flex-col">
        <div>
          <Image src={BobaIllustration} alt="Bobavida" />
          <h2 className=" text-[#271908] font-bold text-8xl">Boba Vibe</h2>
          <p className="text-[#272727] text-2xl w-[300px] md:w-[500px] my-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper
          </p>
          <div>
            <button className="text-xl text-white bg-[#271908] rounded-[40px] px-10 py-6">
              <Link href="/explore"> Browse Menu</Link>
            </button>
          </div>
        </div>

        <div>
          <Image src={BobaVibe} alt="Coffee" width={700} height={700} />
        </div>
      </div>

      <BobaGallery />
    </div>
  );
};

export default Boba;
