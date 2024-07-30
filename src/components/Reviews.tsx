import { InfiniteMovingCards } from "./ui/infinte-cards";
interface testimonialTypes {
  quote: string;
  name: string;
  title: string;
}
const testimonials: testimonialTypes[] = [
  { quote: "mazedar", name: "akash", title: "me hu akash" },
  { quote: "bhut badhiya", name: "insane", title: "me hu insane" },
  { quote: "are bhai mza aa gya", name: "marco", title: "me hu marco" },
  { quote: "are bhai kya baat h ", name: "krypton", title: "me hu krypton" },
];
function Reviews() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={false}
      />
    </div>
  );
}

export default Reviews;
