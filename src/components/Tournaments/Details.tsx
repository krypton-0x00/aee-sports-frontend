import React from "react";
import { TournamentType } from "@/types/FetchTournamentData";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface DetailsProps {
  tournament: TournamentType;
}

const Details: React.FC<DetailsProps> = ({ tournament }) => {
  return (
    <div className="bg-black text-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl">
        {/* Banner Image */}
        <div className="w-full h-64 rounded-sm sm:h-80 md:h-96 lg:h-112 xl:h-128 relative overflow-hidden">
          <Image
            src={tournament.logo}
            alt={`${tournament.name} banner`}
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
        <div>
          {/* stats */}
          <div className="text-gray-200 body-font border rounded-sm">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    {tournament.slots}
                  </h2>
                  <p className="leading-relaxed">Total slots</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    5
                  </h2>
                  <p className="leading-relaxed">Slots left</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    ₹ 30000
                  </h2>
                  <p className="leading-relaxed">Prize Pool</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    ₹ 100
                  </h2>
                  <p className="leading-relaxed">Registration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
