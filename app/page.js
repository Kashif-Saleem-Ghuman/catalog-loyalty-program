import "./globals.css"
import Image from "next/image"
import illustration from "@/public/assets/images/Illustration.png"

export default function Home() {
  return (
    <main className="background pb-20">
      <section className="xl:flex xl:mx-56 ">


        <div className="pt-10 mx-5 px-6 md:mx-auto md:w-5/12 xl:flex xl:flex-col  xl:w-6/12 xl:ps-0 xl:pe-0 xl:mx-0 ">
          <h2 className="text-center text-Neutral-600 text-base font-semibold tracking-24% xl:text-start xl:text-1-vw">EXPLORE THE</h2>
          <h1 className="mt-2 multicolortext text-center text-mob-25 font-black leading-mob md:text-tab-9 md:leading-tab xl:text-start xl:text-10xl xl:leading-desktop">TECH <span className="text-Neutral-900">ZONE</span></h1>
          <p className="text-center text-Neutral-600 text-base mt-6 font-semibold xl:text-start xl:text-1-vw">Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</p>
          <article className="flex gap-x-2.5 justify-baseline justify-center mt-10 py-5 background-button text-xs w-full border rounded-3xl text-white md:text-base md:px-10 xl:max-w-fit">
            <button>
              VIEW ALL PRODUCTS
            </button>
            <div className="my-auto">
              <Image
                src={"/assets/images/down.png"}
                alt="down-arrow"
                width={12}
                height={12}

              />
            </div>

          </article>
        </div>
        <div className="flex flex-1">

          <Image
            src={illustration}
            alt="Illustration"
         
            layout="responsive"
          
            style={{ objectFit: "cover" }}
          />

        </div>




      </section>

    </main>
  )
}
