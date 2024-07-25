"use client";
import { useEffect, useState } from "react";
import LeaderboardPillar from "../../../components/Leaderboard/LeaderboardPillar";
import LeaderboardCard from "@/components/Leaderboard/LeaderboardCard";

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
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const sortedUsers = leaderboard.sort((a, b) => b.total_score - a.total_score);
  const ranking = sortedUsers.map((user, index) => ({
    ...user,
    place: index + 1,
  }));

  // const podiumRanking = [ranking[2], ranking[1], ranking[3]];

  return (
    <div>
      <h1 className="text-[36px] font-[900]  ">Leaderboard</h1>
      {ranking.length === 0 ? (
        <p>No leaderboard data available.</p>
      ) : (
        <div>
          <div className="relative justify-center  px-4 items-center flex mt-16 rounded-2xl shadow-lg shadow-slate-400 ">
            {/* <div className="absolute right-0 top-0  w-fit bg-blue-300  p-2 rounded-lg flex-row flex items-center justify-center text-black shadow-lg  text-sm lg:text-md font-bold m-2  dark:text-white dark:bg-blue-900  dark:shadow-blue-600 dark:shadow-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 lg:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="ml-1">02d 12h 20min</p>
        </div> */}

            <section className="w-full   grid grid-cols-3 gap-3 lg:gap-7  items-end mt-16 ">
              {ranking.slice(0, 3).map((user) => (
                <LeaderboardPillar
                  key={user.place}
                  place={user.place}
                  name={user.user_id}
                  avatar={""}
                  points={user.total_score}
                />
              ))}
            </section>
          </div>
          <div
            id="table"
            className="gap-2 flex flex-col  mt-4 text-white   rounded-lg dark:bg-gradient-to-b dark:from-violet-600 dark:to-violet-400 dark:border-violet-800 "
          >
            {ranking.slice(3, ranking.length).map((user) => (
              <LeaderboardCard
                key={user.place}
                name={user.user_id}
                place={user.place}
                points={user.total_score}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
