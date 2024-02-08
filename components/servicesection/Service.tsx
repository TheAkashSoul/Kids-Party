import ServiceContent from "./ServiceContent";
import ServiceSlider from "./ServiceSlider";

export default function Service() {
  const serviceSlider = [
    {
      id: 1,
      img: "https://yombu.com/wp-content/uploads/2022/09/Face-Painting-Kids-Party-Entertainment-Yombu.jpg",
      title: "Face-Painting",
    },
    {
      id: 2,
      img: "https://yombu.com/wp-content/uploads/2022/09/Kids-Magic-Show-Yombu-Kids-Party-Entertainment.jpg",
      title: "Magic Shows",
    },
    {
      id: 3,
      img: "https://yombu.com/wp-content/uploads/2022/09/Balloon-Art-Yombu-Kids-Party-Entertainment.jpg",
      title: "Balloon Art",
    },
    {
      id: 3,
      img: "https://yombu.com/wp-content/uploads/2022/09/Carachter-Dress-Up-Yombu-Kids-Party-Entertainers.jpeg",
      title: "Characters",
    },
  ];
  return (
    <main className="flex flex-col items-center mt-32 w-[80%] mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-[#F2C9F1] font-semibold text-2xl">The Services</h2>
        <p className="text-xl text-center mt-1">
          Stress Free Kids Parties for Busy Parents.
        </p>
      </div>
      <ServiceSlider />
      <ServiceContent />
    </main>
  );
}
