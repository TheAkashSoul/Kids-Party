import Image from "next/image";

export default function Work() {
  return (
    <main className="flex flex-row justify-between mt-32 w-full md:w-[80%] mx-auto mb-20">
      <div className="hidden w-[45%] md:flex bg-[#FFECDA] lg:rounded-[40px] md:rounded-3xl py-8 items-start justify-center">
        <div className="w-full bg-black lg:rounded-[60px] md:rounded-3xl overflow-hidden -mr-20">
          <Image
            src={
              "https://yombu.com/wp-content/uploads/2022/11/Kids-Party-Entertainer-Balloon-Twister-Yombu.png"
            }
            alt="aunty image"
            width={550}
            height={550}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-full md:w-[45%] px-12 md:px-1 py-4 flex flex-col items-start bg-[#FFECDA] md:bg-transparent">
        <h2 className="font-bold md:text-6xl text-4xl text-[#383838] mt-6 md:mt-0">
          Work at Yomdi
        </h2>
        <p className="text-[#262626] font-normal mt-3 mb-6 text-sm">
          We are always on the lookout for talented and fun individuals or
          companies to collaborate with, aiming to provide amazing experiences
          for kids across the US. Here&apos;s why working with Yomdi is a
          no-brainer for hundreds of talented entertainers.
        </p>
        <h3 className="font-bold text-lg text-[#262626]">
          How Easy is it to Work with Yomdi?
        </h3>
        <p className="text-[#262626] font-normal my-2 text-sm">
          Super easy! With the Yomdi app you can receive booking requests
          on-the-go, chat with the client and have all the important party
          details at your finger tips.
        </p>
        <h3 className="font-bold text-lg text-[#262626]">
          What About my Other Bookings?
        </h3>
        <p className="text-[#262626] font-normal my-2 text-sm">
          When a booking comes in that you are matched to you can simply accept
          or decline if you are available. Which means you can book around your
          schedule and fill up your slow times.
        </p>
        <h3 className="font-bold text-lg text-[#262626]">
          I Love it.. How Can I Join?
        </h3>
        <p className="text-[#262626] font-normal my-2 text-sm">
          Click the button below.. Fill in your details and upload some
          pictures. Our community manager will be in touch as soon as we have
          reviewed your application.
        </p>
        <button className="md:bg-[#FFC3C3] bg-[#FFF] px-10 py-3 md:py-4 rounded-full mt-4 md:text-[#FFF] text-[#000000] w-full md:w-fit mb-10 md:mb-0">
          JOIN THE TEAM
        </button>
      </div>
    </main>
  );
}
