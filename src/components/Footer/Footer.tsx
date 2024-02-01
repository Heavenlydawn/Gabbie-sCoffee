import React from "react";
import Image from "next/image";
import Line from "../../../public/images/Line.png";
import Insta from "../../../public/images/Insta.png";
import Fb from "../../../public/images/Fb.png";
import Twitter from "../../../public/images/twitter.png";
import Pinterest from "../../../public/images/pinterest.png";
const Footer = () => {
  return (
    <footer className="bg-[#363032] text-white py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col justify-between items-center sm:flex-row p-4 sm:p-8">
        <Image src={Line} alt="Line" />
        <h3 className="text-2xl text-[#FFFADA]">Get In Touch With Us</h3>
        <Image src={Line} alt="Line" />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 py-8 sm:py-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Merchandise</h3>
          <p className="text-[#FfFADA text-xl pt-4]">T-shirts</p>
          <p className="text-[#FfFADA text-xl pt-4]">Caps</p>
          <p className="text-[#FfFADA text-xl pt-4]">Masks</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Franchise</h3>
          <p className="text-[#FfFADA text-xl pt-4]">Coffee Outlet</p>
          <p className="text-[#FfFADA text-xl pt-4]">Coffee Vending Machine</p>
          <p className="text-[#FfFADA text-xl pt-4]">Contact Us</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-[#FfFADA text-xl pt-4]">Promotions</p>
          <p className="text-[#FfFADA text-xl pt-4]">Customer Care</p>
          <p className="text-[#FfFADA text-xl pt-4]">Legal Information</p>
          <p className="text-[#FfFADA text-xl pt-4]">Achievements</p>
          <p className="text-[#FfFADA text-xl pt-4]">Careers</p>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-4">Follow Us</h1>
          <div className="flex">
            <Image src={Insta} alt="Insta" />
            <Image src={Fb} alt="Fb" />
            <Image src={Twitter} alt="Twitter" />
            <Image src={Pinterest} alt="Pinterest" />
          </div>
        </div>
      </div>

      <div className="border-t-4 border-[#FFFADA] flex justify-center items-center py-4 text-xl">
        <p> &#169; Riellah's Cafe All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
