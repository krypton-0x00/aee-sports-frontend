"use client";

import { InfiniteMovingCards } from "../ui/infinte-cards";

interface TestimonialType {
  quote: string;
  name: string;
  title: string;
}

const testimonials: TestimonialType[] = [
  {
    quote:
      "NxS Esports has revolutionized how I organize tournaments. The platform is intuitive and powerful!",
    name: "Sarah Johnson",
    title: "Professional Esports Organizer",
  },
  {
    quote:
      "As a competitive gamer, NxS Esports has given me access to high-quality tournaments and a great community.",
    name: "Alex Chen",
    title: "Pro Gamer",
  },
  {
    quote:
      "The statistics and leaderboard features have added a new dimension to our local gaming scene. Absolutely love it!",
    name: "Mike Rodriguez",
    title: "Gaming Cafe Owner",
  },
  {
    quote:
      "NxS Esports' customer support is unparalleled. They're always there to help, making tournament management a breeze.",
    name: "Emily Patel",
    title: "Esports Team Manager",
  },
  {
    quote:
      "The platform's reliability during live tournaments is impressive. It's become an essential tool for our events.",
    name: "David Kim",
    title: "Esports Event Coordinator",
  },
];

function Reviews() {
  return (
    <div className="md:h-[40rem] h-[24rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-bold mb-8">What Our Users Say</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </div>
  );
}

export default Reviews;
