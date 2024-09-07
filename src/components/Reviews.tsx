"use client"
import { InfiniteMovingCards } from "./ui/infinte-cards";
interface testimonialTypes {
  quote: string;
  name: string;
  title: string;
}
const testimonials: testimonialTypes[] = [
  {
    quote:
      "nice ",
    name: "akash",
    title: "",
  },
  {
    quote: "Really helped me with my tounaments",
    name: "insane",
    title: "me hu insane",
  },
  // {
  //   quote: "Krypton bhai yeh dekho na bhasika ma error aa raha ",
  //   name: "marco",
  //   title: "me hu marco",
  // },
  // { quote: "Arya Bhai Sun Na ", name: "krypton", title: "me hu krypton" },
];
function Reviews() {
  return (
    <div className="md:h-[30rem]  h-[18rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl font-semibold">Reviews</h1>
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
