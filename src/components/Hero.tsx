import Button from "./Button";
import AnimatedShinyText from "./ui/AnimatedShine";
import AnimatedGridPattern from "./ui/AnimatedGrid";
import Link from "next/link";
import WordPullUp from "./ui/WordPullUp";
import LetterPullup from "./ui/LetterPullup";

export function Hero() {
  return (
    <div className="flex flex-col items-center  gap-6 md:px-3 mt-40 lg:mb-70">
      <div className="flex flex-col items-center  ">
        <AnimatedShinyText>
          <span className="text-2xl"> ✨ Welcome to NxS Esports! </span>
        </AnimatedShinyText>
      </div>
      <WordPullUp
        className="text-4xl lg:text-5xl font-extrabold text-center py-4"
        words=" Where Legends Battle and Heroes Emerge."
      />
      <p className="text-center w-[60vh] text-gray-300 m-auto lg:text-xl py-4">
        Dive into the thrilling world of
        <b className="text-highlight"> BGMI </b> tournaments with NxS Esports.
        Join us to participate in exhilarating tournaments, win exciting prizes.
      </p>
      <div className="flex justify-center gap-4">
        <Button text="Get Started" />
        <Link href={"/leaderboard"}>
          <Button
            text="Leaderboard"
            className="bg-textColor text-slate-900"
            hover="grey"
          />
        </Link>
        <AnimatedGridPattern
          className="max-h-svh"
          numSquares={20}
          maxOpacity={0.1}
          duration={2}
          repeatDelay={1}
        />
      </div>
      {/* <hr className="w-[90%] border-gray-500 text my-12" /> */}
    </div>
  );
}
