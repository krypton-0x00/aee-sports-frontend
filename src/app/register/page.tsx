import PlayerDetails from "@/components/forms/PlayerDetails";
import TeamDetails from "@/components/forms/TeamDetails";
import AnimatedShinyText from "@/components/ui/AnimatedShine";

function page() {
  return (
    <div className="relative rounded-lg px-8 py-8 flex flex-col items-center">
      <AnimatedShinyText>
        <span className="text-2xl"> ✨Weekly War Season 3</span>
      </AnimatedShinyText>
      <p className="text-gray-400 text-sm">By NxS Esports</p>
      <TeamDetails />
      <div>
        <PlayerDetails />
      </div>
      <div className="flex justify-between w-full items-center px-6 mt-4 max-w-[300px]">
        <button className="text-5xl active:text-gray-400">+</button>
        <button className=" px-4 py-2 rounded-md bg-highlight hover:bg-orange-400 active:bg-highlight active:scale-95 text-white">
          Register
        </button>
      </div>
    </div>
  );
}

export default page;
