import PricingCard from "@/components/PricingCard";
import SparklesText from "@/components/ui/Sparkles";
import Image from "next/image";
import React from "react";

function Tournaments() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-center">
        <SparklesText
          text="Our Pricing Plans Are Simple."
          className="text-3xl sm:text-4xl py-4"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <p className="text-sm text-gray-400">
          Check out our reviews at the home page.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 items-center mt-12">
        <PricingCard
          plan="Basic"
          price={0}
          discription="Perfect for those who want to try it out."
          points={["12 matches per week.", "4 Maps.", "2 Matches per day."]}
        />
        <PricingCard
          plan="Premium"
          price={150}
          discription="Perfect for those who want a to win prizes."
          points={["12 matches per week.", "4 Maps.", "2 Matches per day."]}
        />
      </div>
    </div>
  );
}

export default Tournaments;
