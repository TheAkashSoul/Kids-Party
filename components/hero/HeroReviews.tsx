import Image from "next/image";

export default function HeroReviews() {
  return (
    <main className="hidden md:block md:max-w-[80%] w-full md:mx-auto">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center justify-center">
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
          <div>fffdv</div>
        </div>
        <div className="z-20">bdfbdfbd</div>
      </div>
    </main>
  );
}
