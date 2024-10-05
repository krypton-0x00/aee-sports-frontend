"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SERVER_URI } from "@/constants";
import { TournamentType } from "@/types/FetchTournamentData";
import useFetch from "@/hooks/useFetchData";
import { SkeletonCard } from "@/components/atomic/Loading";

 

interface Data {
  tournaments: TournamentType[];
}

const OngoingTournaments: React.FC = () => {
  const [tournaments, setTournaments] = useState<TournamentType[]>([]);

  const { data, isLoading, error } = useFetch(`${SERVER_URI}tournament/get-tournaments`);

  useEffect(() => {
    if (data) {
      setTournaments((data as unknown as Data).tournaments);
    }
  }, [data]);

  
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ongoing Esports Tournaments</h1>
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
              <CardContent>
                <p className="mb-2 font-semibold">{tournament.game}</p>
                <p className="mb-2">Participants: {tournament.slots}</p>
                <p className="mb-2">Start Date: {tournament.startDate}</p>
                <p className="mb-4">End Date: {tournament.endDate}</p>
                <Button className="w-full text-white bg-highlight hover:bg-highlight/90">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No tournaments available.</p>
        )}
      </div>
    </div>
  );
};

export default OngoingTournaments;
