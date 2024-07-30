import React from "react";

function Heading() {
  return (
    <div className="flex gap-4 border text-sm w-[90%] bg-highlight sm:w-[500px]">
      <div className="border-l px-1 py-1 w-5">Sno.</div>
      <div className="border-l px-1 py-1 w-28">Team Name</div>
      <div className="border-l px-1 py-1 w-5">CD</div>
      <div className="border-l px-1 py-1 w-5">PP</div>
      <div className="border-l px-1 py-1 w-5">KP</div>
      <div className="border-l px-1 py-1 w-10">Total</div>
    </div>
  );
}

export default Heading;
