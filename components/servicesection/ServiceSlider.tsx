import ServiceCard from "./ServiceCard";

export default function ServiceSlider() {
  return (
    <main className="flex flex-col mt-14">
      <div className="flex flex-row gap-4 items-center">
        <ServiceCard />
        {/* <ServiceCard />
        <ServiceCard />
        <ServiceCard /> */}
      </div>
    </main>
  );
}
