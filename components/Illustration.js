"use client"

import illustationImage from "@/public/assets/images/hero-desktop.png";
import Image from "next/image";
import intro1 from "@/public/assets/images/Intro-card.png"

const Illustartion = () => {
  return (
    <div className="flex justify-center
    w-full background-color h-[1716px] relative">
      <Image
        src={illustationImage}
        alt="hero"
        width={500}
        height={500}
        className="absolute bottom-[80%] md:bottom-[89%]"
      />
      <div className="flex justify-center">
      <Image src={intro1} 
      alt = "intro-card"
  
     layout="responsive"
      className="absolute top-[15%] md:top-[5%] hover:scale-105 transition duration-500 ease-in-out w-full md:w-1/2"
      onClick={() => console.log("click")}
      />

      </div>
     
    </div>
  );
};

export default Illustartion;
