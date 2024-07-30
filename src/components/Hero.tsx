import Button from "./Button";
import AnimatedShinyText from "./ui/AnimatedShine";

export function Hero() {
  return (
    <div className="flex flex-col items-center  gap-6 px-3 mt-12 ">
      <div className="flex flex-col items-center w-[50vh] ">
        <AnimatedShinyText>
          <span className="text-xl"> ✨ Welcome to NxS Esports! </span>
        </AnimatedShinyText>
      </div>
      <h1 className="text-4xl lg:text-5xl font-extrabold text-center ">
        Where Legends Battle and Heroes Emerge.
      </h1>
      <p className="text-center w-[50vh] text-gray-300 m-auto lg:text-xl">
        Dive into the thrilling world of BGMI (Battlegrounds Mobile India)
        tournaments with NxS Esports. Join us to participate in exhilarating
        tournaments, win exciting prizes.
      </p>
      <div className="flex justify-center gap-4">
        <Button text="Get Started" />
        <Button
          text="Leaderboard"
          className="bg-white text-slate-900 hover:bg-gray-300"
          hover="grey"
          hovertext="black"
        />
      </div>
      <hr className="w-[90%] border-gray-500 text my-12" />
    </div>
  );
}
