import Image from "next/image";

export default function ServiceCard() {
  return (
    <div className="bg-[#FFF] p-4 flex flex-col items-center rounded-2xl">
      <div className="rounded-2xl overflow-hidden">
        <Image
          src={
            "https://yombu.com/wp-content/uploads/2022/09/Face-Painting-Kids-Party-Entertainment-Yombu.jpg"
          }
          alt="img"
          height={300}
          width={300}
          objectFit="cover"
        />
      </div>
      <button className="bg-[#FFC3C3] text-[#FFF] px-6 py-2 rounded-full -mt-5 font-semibold shadow-md shadow-black/20">
        BOOK US
      </button>
      <h3 className="text-lg mt-5">Face-Painting</h3>
    </div>
  );
}
