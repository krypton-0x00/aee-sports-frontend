import React from "react";
import { BorderBeam } from "../ui/BorderBeam";
import { MdDelete } from "react-icons/md";

function PlayerDetails() {
  return (
    <div className="relative flex flex-col items-center gap-4 mt-4 px-4 py-4 rounded-md shadow-sm shadow-white">
      <BorderBeam duration={3} />
      <div className="flex items-center justify-between  w-full">
        <h1 className="text-sm">Player 1</h1>
        <div className="text-2xl text-red-600">
          <MdDelete />
        </div>
      </div>
      <input
        type="text"
        placeholder="In Game Name (IGN)"
        className="px-2 py-2 rounded-md  placeholder:text-zinc-600 bg-transparent  border border-gray-300"
      />
      <input
        type="text"
        placeholder="In Game Id (IGID)"
        className="px-2 py-2 rounded-md  placeholder:text-zinc-600 bg-transparent  border border-gray-300"
      />
    </div>
  );
}

export default PlayerDetails;
