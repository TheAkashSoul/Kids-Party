import Image from "next/image";
import Link from "next/link";

export default function HeroPage() {
  return (
    <main className="md:max-w-[80%] w-full md:mx-auto bg-[#FFECDA] md:mt-10 md:rounded-3xl">
      <div className="px-7 py-5 flex flex-col gap-8">
        <div className="hidden md:flex flex-row items-start justify-between gap-4">
          <Link href={"/"} className="h-10 w-10 lg:h-20 lg:w-20">
            <Image
              src={
                "https://yombu.com/wp-content/uploads/2023/04/Yombu-Logo-TSP-Bkg-Web.png"
              }
              objectFit="contain"
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
          <div className="flex items-start justify-between gap-6">
            <Link
              href={"/"}
              className="text-black text-sm tracking-wider hover:text-[#978E85]"
            >
              Where we Work
            </Link>
            <Link
              href={"/"}
              className="text-black text-sm tracking-wider hover:text-[#978E85]"
            >
              Links
            </Link>
            <Link
              href={"/"}
              className="text-black text-sm tracking-wider hover:text-[#978E85]"
            >
              FAQ
            </Link>
            <button className="bg-[#FFC3C3] px-4 py-2 rounded-full text-white text-sm font-medium hover:shadow-md hover:shadow-slate-700/25">
              SIGNUP / LOGIN
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 mt-8 md:mt-0">
          <div className="flex items-center lg:justify-center lg:w-[50%]">
            <div className="flex flex-col gap-2">
              <p className="text-[#262626] md:text-2xl text-xl font-light">
                Kids Party Entertainment
              </p>
              <div>
                <h2 className="bg-gradient-to-r from-[#AFECFE] to-[#FEC3C7] text-transparent bg-clip-text font-bold md:text-6xl text-3xl">
                  Quality, Fun
                </h2>
                <h2 className="bg-gradient-to-r from-[#AFECFE] to-[#FEC3C7] text-transparent bg-clip-text font-bold md:text-6xl text-3xl">
                  Professional
                </h2>
              </div>
              <div className="hidden md:block">
                <p className="text-sm text-gray-500">
                  The place to find amazing
                </p>
                <p className="text-sm text-gray-500">
                  kids party entertainers..
                </p>
              </div>
            </div>
          </div>
          <div className="lg:rounded-[60px] rounded-3xl overflow-hidden -mb-14 items-center justify-center w-fit mx-auto lg:mx-0 z-10">
            <Image
              src={
                "https://yombu.com/wp-content/uploads/2022/09/Kids-Party-Entertainment-Yombu-Lion-Slider-Square.jpg"
              }
              alt="hero image"
              height={450}
              width={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
