import "./globals.css"
import Image from "next/image"

export default function Home() {
  return (
    <main className="background pb-20">
      <section className="pt-10 mx-5 px-6">
        <h2 className="text-center text-Neutral-600 text-base font-semibold tracking-24%">EXPLORE THE</h2>
        <h1 className="mt-2 multicolortext text-center text-7xl tablet:text-8xl  font-black">TECH <span className="text-Neutral-900">ZONE</span></h1>
        <p className="text-center text-Neutral-600 text-base mt-6 font-semibold">Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</p>
        <article className="flex gap-x-2.5 justify-baseline justify-center mt-10 background-button w-full border tablet:px-12 py-5 rounded-3xl text-white tablet:text-base text-xs">
          <button>
            VIEW ALL PRODUCTS
          </button>
          <div className="my-auto">
            <Image
              src="/assets/images/down.png"
              alt="down-arrow"
              width={12}
              height={12}
            />
          </div>

        </article>
      </section>

    </main>
  )
}
