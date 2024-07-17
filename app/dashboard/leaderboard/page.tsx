"use client";
import LeaderboardSection from "@/components/Sections/LeaderboardSection";
import { useEffect, useState } from "react";

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

  return (
    <div className="mx-auto">
      <LeaderboardSection></LeaderboardSection>
    </div>
  );
}
