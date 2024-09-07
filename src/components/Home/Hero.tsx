"use client";
import Button from "../atomic/CustomButton";
import AnimatedShinyText from "../ui/AnimatedShine";
import AnimatedGridPattern from "../ui/AnimatedGrid";
import Link from "next/link";
import WordPullUp from "../ui/WordPullUp";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 md:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <AnimatedShinyText>
            <span className="text-xl sm:text-2xl md:text-3xl">
              ✨ Welcome to AEE SPORTS!
            </span>
          </AnimatedShinyText>
        </div>

        <WordPullUp
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center"
          words="Where Legends Battle and Heroes Emerge."
        />

        <p className="text-center text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Dive into the thrilling world of
          <b className="text-highlight"> PUBG, BGMI, Valorant </b> tournaments
          with AEE SPORTS. Join us to participate in exhilarating tournaments,
          win exciting prizes.
        </p>

        <div className="flex flex-row justify-center items-center gap-4">
          <Link href="/tournaments">
            <Button text="Get Started" type="button" className="w-auto" />
          </Link>
          <Link href="/login">
            <Button
              text="Join Now"
              type="button"
              className="w-auto bg-textColor text-slate-900 hover:bg-gray-400"
            />
          </Link>
        </div>

        <AnimatedGridPattern
          className="absolute inset-0 z-0 pointer-events-none"
          numSquares={20}
          maxOpacity={0.1}
          duration={2}
          repeatDelay={1}
        />
      </div>
    </div>
  );
}
