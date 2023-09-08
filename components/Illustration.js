"use client";

import illustationImage from "@/public/assets/images/hero-desktop.png";
import Image from "next/image";
import intro1 from "@/public/assets/images/Intro-card.png";

const Illustartion = () => {
  return (
    <div
      className="flex justify-center
    w-full background-color h-[1716px] relative "
    >
      <Image
        src={illustationImage}
        alt="hero"
        className="xl:hidden overflow-x-auto absolute bottom-[80%] md:bottom-[89%] w-full md:w-[57%]"
      />

      <Image
        src={intro1}
        alt="intro-card"
        className="absolute top-[15%] md:top-[5%] hover:scale-105 transition duration-500 ease-in-out w-full md:w-1/3"
        onClick={() => console.log("click")}
      />
      <Image
        src={intro1}
        alt="intro-card"
        className="absolute top-[45%] md:top-[5%] md:right-0 hover:scale-105 transition duration-500 ease-in-out w-full md:w-1/3"
        onClick={() => console.log("click")}
      />
      <Image
        src={intro1}
        alt="intro-card"
        className="absolute top-[75%] md:top-[5%] md:left-0 hover:scale-105 transition duration-500 ease-in-out w-full md:w-1/3"
        onClick={() => console.log("click")}
      />
    </div>
  );
};

export default Illustartion;
