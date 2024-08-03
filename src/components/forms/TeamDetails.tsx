import Image from "next/image";
import { BorderBeam } from "../ui/BorderBeam";

function TeamDetails() {
  return (
    <div className="relative flex flex-col items-center gap-4 rounded-md shadow-sm shadow-white mt-4 px-4 py-4 ">
      <BorderBeam duration={3} />
      <div className="relative bg-zinc-400 w-24 h-24 rounded-full">
        <BorderBeam duration={6} />
        <Image
          className="rounded-full"
          src={"/esports.jpg"}
          alt="team-logo"
          width={100}
          height={40}
        />
      </div>
      <input
        type="text"
        placeholder="Team Name*"
        className="px-2 py-2 rounded-md  placeholder:text-zinc-600 bg-transparent  border border-gray-300"
      />
      <input
        type="number"
        placeholder="Phone no.*"
        className="px-2 py-2 rounded-md  placeholder:text-zinc-600 bg-transparent  border border-gray-300"
      />
      <input
        type="email"
        placeholder="Email"
        className="px-2 py-2 rounded-md  placeholder:text-zinc-600 bg-transparent  border border-gray-300"
      />
    </div>
  );
}

export default TeamDetails;
