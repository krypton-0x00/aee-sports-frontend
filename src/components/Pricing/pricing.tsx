import React from "react";
import Button from "../atomic/CustomButton";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "₹0/month",
    features: [
      "Can Create up to 2 tournaments",
      "Community forums access",
      "Basic player statistics",
      "No Tech support",
    ],
    buttonText: "Start Free",
  },
  {
    name: "Premium",
    price: "₹499/month",
    features: [
      "Create Unlimited tournaments",
      "Leaderboard",
      "Custom Forms",
      "Statistics",
      "24/7 customer support",
    ],
    buttonText: "Go Premium",
  },
];

const PricingCard: React.FC<PricingTier> = ({
  name,
  price,
  features,
  buttonText,
}) => (
  <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-300 bg-transparent rounded-lg border border-gray-700 shadow xl:p-8">
    <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
    <p className="font-light text-gray-400 sm:text-lg">
      {name === "Free"
        ? "Get started with basic features"
        : "Unlock all premium features"}
    </p>
    <div className="flex justify-center items-baseline my-8">
      <span className="mr-2 text-5xl font-extrabold">{price}</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button text={buttonText} type="button" className="w-full" />
  </div>
);

const PricingPage: React.FC = () => {
  return (
    <section className="bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Choose Your Plan
          </h2>
          <p className="mb-5 font-light text-gray-400 sm:text-xl">
            Join AEE SPORTS and elevate your gaming experience with our flexible
            pricing plans.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
