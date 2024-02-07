import Image from "next/image";
import { IoIosStar } from "react-icons/io";

export default function HeroReviews() {
  return (
    <main className="hidden md:block md:max-w-[80%] w-full md:mx-auto md:mt-20 lg:mt-4">
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-row">
            <div className="h-16 w-16 border-white border-4 rounded-full items-center justify-center flex overflow-hidden">
              <Image
                src={
                  "https://yombu.com/wp-content/uploads/2022/10/Dora-Poloskei-Bazinga-Parties-Zurich.jpeg"
                }
                alt="reviewer image"
                height={80}
                width={80}
                objectFit="cover"
              />
            </div>
            <div className="h-16 w-16 border-white border-4 rounded-full items-center justify-center flex overflow-hidden -ml-5">
              <Image
                src={
                  "https://yombu.com/wp-content/uploads/2022/09/Maria-Liz-Bazinga-Parties-Zurich.jpeg"
                }
                alt="reviewer image"
                height={80}
                width={80}
                objectFit="cover"
              />
            </div>
            <div className="h-16 w-16 border-white border-4 rounded-full items-center justify-center flex overflow-hidden -ml-5">
              <Image
                src={
                  "https://yombu.com/wp-content/uploads/2022/09/Sarah-Foutz-Bazinga-Parties-Austin.jpg"
                }
                alt="reviewer image"
                height={80}
                width={80}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-light">Our Happy Customers</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <IoIosStar color="#FFCF6A" size={18} />
              <p className="text-sm font-light">4.8(2,265 reviews)</p>
            </div>
          </div>
        </div>
        <div className="z-20 flex flex-row items-center justify-center gap-2 bg-[#FFFFFF] px-3 py-1 rounded-full shadow-md lg:mr-24 cursor-pointer">
          <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src={
                "https://yombu.com/wp-content/uploads/2022/09/Yombu-Kids-Party-Entertainment-Happy-Icon.png"
              }
              alt="review logo"
              height={60}
              width={60}
              objectFit="cover"
            />
          </div>
          <div>
            <p className="font-medium text-sm">Guaranteed Fun</p>
            <p className="font-light text-xs">Entertinment</p>
          </div>
        </div>
      </div>
    </main>
  );
}
