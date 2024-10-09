"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SERVER_URI } from "@/constants";
import { TournamentType } from "@/types/FetchTournamentData";
import useFetch from "@/hooks/useFetchData";
import { SkeletonCard } from "@/components/atomic/Loading";
import { useRecoilState } from "recoil";
import { tournamentAtom } from "@/Recoil/atoms/tournamentAtom";
import Details from "@/components/Tournaments/Details";
import { FaArrowLeft, FaUsers } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";

interface Data {
  tournaments: TournamentType[];
}

const OngoingTournaments: React.FC = () => {
  const [tournaments, setTournaments] = useRecoilState(tournamentAtom);
  const [selectedTournament, setSelectedTournament] = useState<TournamentType | null>(null);

  const { data, isLoading, error } = useFetch(`${SERVER_URI}tournament/get-tournaments`);

  useEffect(() => {
    if (data) {
      setTournaments((data as unknown as Data).tournaments);
    }
  }, [data, setTournaments]);

  if (isLoading) {
    return <div className="flex md:flex-row flex-col justify-center items-center h-screen gap-5">
      <SkeletonCard  />
      <SkeletonCard  />
      <SkeletonCard  />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleViewDetails = (tournament: TournamentType) => {
    setSelectedTournament(tournament);
  };

  const handleCloseDetails = () => {
    setSelectedTournament(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ongoing Esports Tournaments</h1>
      {selectedTournament ? (
        <div>
          <Button 
            onClick={handleCloseDetails}
            className="mb-4 bg-highlight text-gray-800 hover:bg-orange-500"
          >
            <FaArrowLeft/>
          </Button>
         
          <Details tournament={selectedTournament} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(tournaments) && tournaments.length > 0 ? (
            tournaments.map((tournament) => (
              <Card key={tournament.id} className="shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={tournament.logo}
                    alt={tournament.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{tournament.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="space-y-4">
                    <p className="text-xl font-bold text-highlight">{tournament.game}</p>
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center">
                        <FaUsers className="mr-2" />
                        {tournament.slots} Participants
                      </span>
                      <span className="text-sm bg-highlight/20 text-highlight px-2 py-1 rounded-full">
                        {tournament.slots} slots
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <p>Starts: {new Date(tournament.startDate).toLocaleDateString()}</p>
                      <p>Ends: {new Date(tournament.endDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-6 text-white bg-highlight hover:bg-highlight/90 transition-all duration-300 transform hover:scale-105"
                    onClick={() => handleViewDetails(tournament)}
                  >
                    <FaInfoCircle className="mr-2" /> View Details
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No tournaments available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default OngoingTournaments;
