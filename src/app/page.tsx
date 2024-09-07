import { AboutUs } from "@/components/Home/Aboutus";
import { Hero } from "@/components/Home/Hero";
import Reviews from "@/components/Home/Reviews";
import PricingPage from "@/components/Pricing/pricing";

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
      <PricingPage />
    </>
  );
}
