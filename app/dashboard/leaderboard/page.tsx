"use client";
import { useEffect, useState } from "react";

import Materii from "@/components/Leaderboard/Materii";
import Podium from "@/components/Leaderboard/Podium";
import Table from "@/components/Leaderboard/Table";

const data = [
  {
    id: 1,
    name: "Teut",
    score: 2800,
  },
  {
    id: 2,
    name: "Roxi",
    score: 2000,
  },
  {
    id: 3,
    name: "Girbi",
    score: 1900,
  },

  {
    id: 4,
    name: "Tibi",
    score: 1800,
  },
  {
    id: 5,
    name: "Mario",
    score: 1500,
  },
  {
    id: 6,
    name: "Bogdan",
    score: 1400,
  },
  {
    id: 7,
    name: "Avram",
    score: 1200,
  },
  {
    id: 8,
    name: "Maria",
    score: 1100,
  },
  {
    id: 9,
    name: "Leif",
    score: 900,
  },
  {
    id: 10,
    name: "Leif",
    score: 800,
  },
  {
    id: 11,
    name: "Leif",
    score: 750,
  },
  {
    id: 12,
    name: "Leif",
    score: 700,
  },
  {
    id: 13,
    name: "Leif",
    score: 600,
  },
  {
    id: 14,
    name: "Leif",
    score: 500,
  },
];

const materii = [
  {
    categorie: "Matematica",
    subcategorii: ["Algebra", "Geometrie", "Trigonometrie"],
  },
  {
    categorie: "Fizica",
    subcategorii: ["Mecanica", "Optica", "Termodinamica", "Electrica"],
  },
  {
    categorie: "Chimie",
    subcategorii: ["Organica", "Anorganica"],
  },
  {
    categorie: "Biologie",
    subcategorii: [
      "Anatomie si Fiziologie Umana",
      "Genetica",
      "Botanica",
      "Biologie celulara",
      "Zoologie",
    ],
  },
  {
    categorie: "Economie",
  },
  {
    categorie: "Informatica",
  },
];

export default function Leaderboard() {
  return (
    <div>
      <Materii materii={materii} />
      <Podium data={data} />
      <Table data={data} />
    </div>
  );
  // const [leaderboard, setLeaderboard] = useState<any[]>([]);

  // const fetchLeaderboardData = async () => {
  //   try {
  //     const response = await fetch("/api/get/getLeaderboard", {
  //       method: "GET",
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const leaderboardData = await response.json();
  //     console.log("Fetched data:", leaderboardData); // Log fetched data
  //     return leaderboardData;
  //   } catch (error) {
  //     console.log("Error fetching data:", error);
  //     throw error;
  //   }
  // };

  // useEffect(() => {
  //   const fetchLeaderboard = async () => {
  //     try {
  //       const leaderboard = await fetchLeaderboardData();
  //       setLeaderboard(leaderboard);
  //       console.log("State updated with leaderboard:", leaderboard);
  //     } catch (error) {
  //       console.error("Error fetching leaderboard data:", error);
  //     }
  //   };

  //   fetchLeaderboard();
  // }, []);

  // return (
  //   <div>
  //     <h1>Leaderboard</h1>
  //     {leaderboard.length === 0 ? (
  //       <p>No leaderboard data available.</p>
  //     ) : (
  //       <ul>
  //         {leaderboard.map((entry, index) => (
  //           <li key={index}>
  //             {entry.user_id}: {entry.total_score} points
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );
}
