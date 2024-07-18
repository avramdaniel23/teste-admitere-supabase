"use client";
import { useEffect, useState } from "react";

import LeaderboardCard from "@/components/Cards/LeaderboardCard";
import LeaderboardTopCard from "@/components/Cards/LeaderboardTopCard";
import {Placement} from "@/components/Cards/LeaderboardTopCard";
import LeaderboardNavigation from "@/components/Navigation/LeaderboardNavigation";


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
      const leaderboardData: Placement[] = [
        {
          name: "John",
          score: 9999,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "John",
          score: 9998,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "John",
          score: 9997,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "Lorem-ipsumstein",
          score: 9996,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "John",
          score: 9995,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "John",
          score: 9994,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "John",
          score: 9993,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "John",
          score: 9992,
          photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jurica-koletic-7YVZYZeITc8-unsplash.jpg"

        },
        {
          name: "John",
          score: 9991,
        }
      ]
          //await response.json();
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
  return (
      <div className={"w-full"}>
       <LeaderboardNavigation></LeaderboardNavigation>
        {leaderboard.length === 0 ? (
            <p>No leaderboard data available.</p>
        ) : (
            <div className={"flex justify-center"}>
              <div className={"w-full lg:w-3/4 xl:w-1/2 flex flex-col justify-center "}>
                <LeaderboardTopCard f1={leaderboard[0]} f2={leaderboard[1]} f3={leaderboard[2]}></LeaderboardTopCard>
                <div className={"w-full h-1 my-2 bg-gray-500"}></div>
                {leaderboard.slice(3).map((entry: Placement, index) => (
                    <LeaderboardCard place={index + 4} name={entry.name} score={entry.score}
                                     photo={entry.photo}></LeaderboardCard>
                ))}

              </div>
            </div>
        )}
      </div>
  );
}
