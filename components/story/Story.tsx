import Image from "next/image";

export default function Story() {
  return (
    <main className="flex flex-col md:flex-row md:mt-32 mt-14 w-full md:w-[80%] mx-auto md:mb-20 mb-8 items-center justify-between gap-4 bg-[#FFECDA] md:bg-transparent">
      <div className="lg:w-[40%] md:w-[45%] w-full px-12 md:px-1 mt-10 md:mt-0">
        <h2 className="font-bold lg:text-6xl md:text-5xl text-4xl text-[#383838]">
          Our Story
        </h2>
        <p className="text-[#383838] font-light mt-3 text-sm">
          As a parent myself, I know that our Children&apos;s Birthday parties
          are one of the most important days of the year. But planning them can
          be stressful and challenging.., from finding the perfect themed cake
          to hiring a reliable entertainer to keep the little guests busy, there
          is lots to do.
        </p>
        <p className="text-[#383838] font-light mt-4 text-sm">
          Thats why we started Yomdi. To make hiring amazing kids party
          entertainment easy and fun. In the last year we have helped over 2,000
          parents throw memorable kids parties and can&apos;t wait to do the
          same for you.
        </p>
        <p className="text-[#383838] font-semibold mt-4 text-base">
          Rose Novotny
        </p>
        <p className="text-xs font-extralight ">Founder and CEO of Yomdi</p>
        <button className="bg-[#FFF] text-[#000000] shadow-md shadow-black/30 px-8 py-3 rounded-full mt-5 hidden md:block">
          MORE ABOUT US
        </button>
      </div>

      <div className="bg-[#FFECDA] lg:w-[48%] md:w-[45%] w-full py-8 rounded-3xl px-12 md:px-1 flex justify-center mb-4 md:mb-0">
        <div className="w-fit md:w-full overflow-hidden rounded-3xl md:rounded-[40px] md:-ml-20">
          <Image
            src={
              "https://yombu.com/wp-content/uploads/2022/09/Kids-Party-Entertainers-Yombu-Our-Story-Slider.png"
            }
            alt="Aunty Image"
            height={600}
            width={600}
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
