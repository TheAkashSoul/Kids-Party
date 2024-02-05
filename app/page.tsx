import HeroPage from "@/components/hero/HeroPage";
import HeroReviews from "@/components/hero/HeroReviews";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#FFFEF9] w-full mx-auto">
      <section>
        <HeroPage />
        <HeroReviews />
      </section>
    </main>
  );
}
