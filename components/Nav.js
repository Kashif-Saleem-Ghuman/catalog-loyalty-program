import Image from "next/image"
import "/app/globals.css"

const Nav = () => {
  return (
    <nav className="flex flex-1 justify-between py-10 px-5 w-full xl:px-12vw">
      <div className="xl:hidden p-1 ">
        <Image
          src="/assets/images/top.png"
          alt="lgog-aeroLab"
          width={39}
          height={36}

        />
      </div>
      <div className="hidden xl:flex">
        <Image
          src="/assets/images/Aerolab-logo.png"
          width={126}
          height={48}
          alt="lgog-aeroLab"

        />
      </div>



      <section className="flex justify-between align-center border border-Neutral-300 rounded-2xl w-36 h-10 py-2 px-4 ">
        <div className="flex w-20 gap-2 ">
          <Image src="/assets/images/Icons.png" alt="logo" width={24} height={24} />
          <span className="text-base multicolortext">1000</span>
        </div>
        <div className="align-baseline my-auto">
          <Image src="/assets/images/up.png" alt="logo" width={20} height={15} />
        </div>
      </section>
    </nav>
  )
}

export default Nav