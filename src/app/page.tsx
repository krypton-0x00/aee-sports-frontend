import { AboutUs } from "@/components/Aboutus";
import { Hero } from "@/components/Hero";
import Reviews from "@/components/Reviews";

export async function generateMetadata() {
  return {
    title: "NxS Esports",
    discription: "Join One of the Biggest Esport Community of Kashmir.",
  };
}
export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <AboutUs />
    </>
  );
}
