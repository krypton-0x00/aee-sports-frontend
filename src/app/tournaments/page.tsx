"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Tournament {
  id: number;
  name: string;
  game: string;
  participants: number;
  startDate: string;
  endDate: string;
  imageUrl: string;
}

const OngoingTournaments: React.FC = () => {
  // Mock data for ongoing esports tournaments
  const tournaments: Tournament[] = [
    {
      id: 1,
      name: "League of Legends World Championship",
      game: "League of Legends",
      participants: 24,
      startDate: "2023-09-25",
      endDate: "2023-11-19",
      imageUrl: "/arcane.jpg",
    },
    {
      id: 2,
      name: "The International 2023",
      game: "Dota 2",
      participants: 20,
      startDate: "2023-10-12",
      endDate: "2023-10-29",
      imageUrl: "/valorant.png",
    },
    {
      id: 3,
      name: "VALORANT Champions Tour 2023",
      game: "VALORANT",
      participants: 16,
      startDate: "2023-08-06",
      endDate: "2023-08-26",
      imageUrl: "/valorant.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ongoing Esports Tournaments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={tournament.imageUrl}
                alt={tournament.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{tournament.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-semibold">{tournament.game}</p>
              <p className="mb-2">Participants: {tournament.participants}</p>
              <p className="mb-2">Start Date: {tournament.startDate}</p>
              <p className="mb-4">End Date: {tournament.endDate}</p>
              <Button className="w-full text-white bg-highlight hover:bg-highlight/90">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OngoingTournaments;
