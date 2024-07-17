"use client";
import { useEffect, useState } from "react";

import LeaderboardCard from "@/components/Cards/LeaderboardCard";
import LeaderboardTopCard from "@/components/Cards/LeaderboardTopCard";
import {Placement} from "@/components/Cards/LeaderboardTopCard";


export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch("/api/get/getLeaderboard", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const leaderboardData = await response.json();
      console.log("Fetched data:", leaderboardData); // Log fetched data
      return leaderboardData;
    } catch (error) {
      console.log("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const leaderboard = await fetchLeaderboardData();
        setLeaderboard(leaderboard);
        console.log("State updated with leaderboard:", leaderboard);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const f1: Placement = {
    name: "John",
    score: 9999,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"
  }


  return (
      <div>
        <h1>Leaderboard</h1>
        {leaderboard.length === 0 ? (
            <p>No leaderboard data available.</p>
        ) : (
            <div className={"flex justify-center"}>
              <div className={"w-full lg:w-3/4 xl:w-1/2 flex flex-col justify-center "}>
                <LeaderboardTopCard f1={f1} f2={f1} f3={f1}></LeaderboardTopCard>
                <div className={"w-full h-1 my-2 bg-gray-500"}></div>
                <LeaderboardCard place={4} name={"John"}
                                 photo={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"}
                                 score={9999}></LeaderboardCard>
                <LeaderboardCard place={5} name={"John"} photo={""} score={9999}></LeaderboardCard>
                <LeaderboardCard place={6} name={"John"} photo={""} score={9999}></LeaderboardCard>
                <LeaderboardCard place={7} name={"John"} photo={""} score={9999}></LeaderboardCard>
                <LeaderboardCard place={8} name={"John"} photo={""} score={9999}></LeaderboardCard>
                <LeaderboardCard place={9} name={"John"} photo={""} score={9999}></LeaderboardCard>

              </div>
            </div>
            // <ul>
            //   {leaderboard.map((entry, index) => (
            //     <li key={index}>
            //       {entry.user_id}: {entry.total_score} points
            //     </li>
            //   ))}
            // </ul>
        )}
      </div>
  );
}
