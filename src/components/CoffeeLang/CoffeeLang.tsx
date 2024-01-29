import React from "react";
import Image from "next/image";
import Coffee1 from "../../../public/images/coffeee-1.png";
import Coffee2 from "../../../public/images/coffeee-2.png";
const CoffeeLang = () => {
  return (
    <div>
      <section id="CoffeeLang" className="md:py-[105px]  flex justify-around items-center md:flex-row flex-col">
        <div>
          <h2 className="md:text-8xl text-2xl text-white md:text-black md:w-[464px] leading-[100px]">Coffee is a language in itself</h2>
          <p className="md:text-xl text-2xl text-[#3f3f3f] md:text-black md:w-[446px] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus
            nec gravida ipsum pulvinar vel.
          </p>
          <div>
            <button className="text-2xl text-white py-6 px-14 rounded-[40px] bg-black my-8">
              Explore
            </button>
          </div>
        </div>

        <div>
          <div className="flex gap-4 md:flex-row flex-col">
            <div>
              <h3 className="md:text-white text-3xl font-bold">128</h3>
            </div>
            <div className="flex flex-col gap-8 w-[332px] text-2xl" >
              <Image src={Coffee1} alt="Coffee" />
              <p className="md:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet,
              </p>
            </div>
          </div>

          <div className="flex gap-4 md:flex-row flex-col">
            <div>
              <h3 className="md:text-white text-3xl font-bold">47K</h3>
            </div>
            <div className="flex flex-col gap-8 w-[332px] text-2xl" >
              <Image src={Coffee2} alt="Coffee" />
              <p className="md:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet,
              </p>
            </div>
          </div>


          
        </div>
      </section>
    </div>
  );
};

export default CoffeeLang;
