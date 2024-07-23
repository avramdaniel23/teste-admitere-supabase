"use client";
import { useEffect, useState } from "react";

import LeaderboardComp from "@/components/Leaderboard/leaderboard";
import Scoreboard from "@/components/Leaderboard/scoreboard";
import PopoverNav from "@/components/Leaderboard/navleader";

export default function Leaderboard() {
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
  return (
    <div>
      <PopoverNav />
      <LeaderboardComp />
      <Scoreboard />
    </div>
  );
}
