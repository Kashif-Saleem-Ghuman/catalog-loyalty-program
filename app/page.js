import "./globals.css";
import Image from "next/image";
import illustration from "@/public/assets/images/Illustration.png";
import down from "@/public/assets/images/down.png";
import Illustartion from "@/components/Illustration";

export default function Home() {
  return (
    <>
      <main className="background xl:mt-20 pb-28 md:pb-72 xl:pb-0">
        <section className="xl:pb-24 xl:flex xl:ms-12vw xl:me-7.5vw ">
          <div className=" pt-10 xl:pt-8 mx-5 px-6 md:mx-auto md:w-5/12 xl:flex xl:flex-col xl:max-w-[30vw] xl:ps-0 xl:pe-0 xl:mx-0 xl:justify-items-end">
            <h2 className="text-center text-Neutral-600 text-base font-semibold tracking-24% xl:text-start xl:text-1-vw">
              EXPLORE THE
            </h2>
            <h1 className="mt-2 multicolortext text-center text-mob-25 font-black leading-mob md:text-tab-9 md:leading-tab xl:text-start xl:text-10xl xl:leading-desktop">
              TECH <span className="text-Neutral-900">ZONE</span>
            </h1>
            <p className="text-center text-Neutral-600 text-base mt-6 font-semibold xl:text-start xl:text-1-vw">
              Here you’ll be able to redeem all of your hard-earned Aeropoints
              and exchange them for cool tech.
            </p>
            <article className="flex gap-x-2.5 justify-baseline justify-center mt-10 py-5 background-button text-4vw w-full border rounded-3xl text-white md:text-base md:px-10 xl:max-w-fit font-semibold hover:scale-105 transition duration-500 ease-in-out">
              <button>VIEW ALL PRODUCTS</button>
              <div className="p-1">
                <Image src={down} alt="arrow" width={12} height={14} />
              </div>
            </article>
          </div>
          <div className="hidden xl:flex xl:flex-1 xl:relative xl:pt-4 ">
            <Image
              src={illustration}
              alt="hero"
              className=" xl:w-[100%] xl:max-w-[750px] xl:absolute xl:bottom-0 xl:right-0"
              width={null}
              height={null}
            />
          </div>
        </section>
      </main>
      <Illustartion />
    </>
  );
}
