import React from "react";
import { TournamentType } from "@/types/tournament.type.js";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Button from "../atomic/CustomButton";

interface DetailsProps {
  tournament: TournamentType;
}

const Details: React.FC<DetailsProps> = ({ tournament }) => {
  return (
    <div className="bg-black text-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Banner Image */}
        <div className="w-full h-64 rounded-sm sm:h-80 md:h-96 lg:h-112 xl:h-128 relative overflow-hidden mb-8">
          <Image
            src={tournament.logo}
            alt={`${tournament.name} banner`}
            layout="fill"
            objectFit="cover"
            className="object-center"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 border border-gray-700  p-8 rounded-sm">  {/* prize pool distribution */}
            <h2 className="text-2xl font-bold mb-4">Prize Pool Distribution</h2>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-white">Position</TableHead>
                    <TableHead className="text-white">Prize</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1st</TableCell>
                    <TableCell>₹{tournament.prizePoolDisturbution.ist}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2nd</TableCell>
                    <TableCell>₹{tournament.prizePoolDisturbution.second}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3rd</TableCell>
                    <TableCell>₹{tournament.prizePoolDisturbution.third}</TableCell>
                  </TableRow>
                  {tournament.prizePoolDisturbution.forth && (
                    <TableRow>
                      <TableCell>4th</TableCell>
                      <TableCell>₹{tournament.prizePoolDisturbution.forth}</TableCell>
                    </TableRow>
                  )}
                  <TableRow>
                    <TableCell>MVP</TableCell>
                    <TableCell>₹{tournament.prizePoolDisturbution.mvp}</TableCell>
                  </TableRow>
                  {tournament.prizePoolDisturbution.pwmk && (
                    <TableRow>
                      <TableCell>PWMK</TableCell>
                      <TableCell>₹{tournament.prizePoolDisturbution.pwmk}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="lg:w-1/2 border border-gray-700  p-8 rounded-sm ">  {/* Tournament description */}
            <h2 className="text-2xl font-bold mb-4">Tournament Description</h2>
            <p className="text-gray-300">
              Welcome to {tournament.name}, an exciting {tournament.game} tournament organized by {tournament.orgName}. 
              This high-stakes competition offers a thrilling opportunity for gamers to showcase their skills and compete for a substantial prize pool of ₹{tournament.prizePool}.
              With {tournament.slots} total slots and only {tournament.slotsLeft} remaining, make sure to secure your place quickly!
              The tournament is set to begin on {new Date(tournament.startDate).toLocaleDateString()} and will conclude on {new Date(tournament.endDate).toLocaleDateString()}.
              Don&apos;t miss this chance to prove your worth in the gaming world and potentially walk away with a significant cash prize!
            </p>
          </div>
        </div>
        {/* stats */}
        <div className="mt-12">
          <div className="text-gray-200 body-font border border-gray-700 rounded-sm">
            <div className="container px-5 py-12 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    {tournament.slots}
                  </h2>
                  <p className="leading-relaxed">Total slots</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    {tournament.slotsLeft}
                  </h2>
                  <p className="leading-relaxed">Slots left</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    ₹{tournament.prizePool}
                  </h2>
                  <p className="leading-relaxed">Prize Pool</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-highlight">
                    ₹{tournament.registrationFee}
                  </h2>
                  <p className="leading-relaxed">Registration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <Button 
            text="Register Now" 
            type="submit" 
            className="bg-highlight hover:bg-highlight-dark text-black font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
