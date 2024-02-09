import Image from "next/image";

type blogposts = {
  image: string;
  title: string;
  caption: string;
};

export default function ({ image, title, caption }: blogposts) {
  return (
    <main className="bg-[#FFF] shadow-lg shadow-[#000000]/20 px-4 py-6 rounded-xl flex flex-col items-center h-full justify-between">
      <div className="w-fit bg-black overflow-hidden rounded-3xl hover:scale-105 transition duration-100">
        <Image src={image} alt="Blog post image" height={260} width={260} />
      </div>
      <h3 className="font-bold text-xl mt-3 text-[#383838] text-center">
        {title}
      </h3>
      <p className="text-sm font-light mt-4 mb-2 h-6 text-center hidden lg:flex items-center">
        {caption}
      </p>
    </main>
  );
}
