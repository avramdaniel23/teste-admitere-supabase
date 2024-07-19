'use client'
import { useEffect, useState } from 'react'

import LeaderboardNav from '@/components/Leaderboard/LeaderboardNav'
import Podium from '@/components/Leaderboard/Podium'
import Table from '@/components/Leaderboard/Table'

const users = [
  {
    id: 1,
    name: 'Ana',
    score: 5000,
  },
  {
    id: 2,
    name: 'Girbi',
    score: 4000,
  },
  {
    id: 3,
    name: 'Tyson',
    score: 3000,
  },
  {
    id: 4,
    name: 'Teo',
    score: 2846,
  },
  {
    id: 5,
    name: 'Theresa',
    score: 2472,
  },
  {
    id: 6,
    name: 'Jamel',
    score: 2186,
  },
  {
    id: 7,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 8,
    name: 'Cineva',
    score: 1956,
  },
  {
    id: 9,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 10,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 11,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 12,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 13,
    name: 'Leif',
    score: 1956,
  },
]

export default function Leaderboard() {
  /* 
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
    <div>
      <h1>Leaderboard</h1>
      {leaderboard.length === 0 ? (
        <p>No leaderboard data available.</p>
      ) : (
        <ul>
          {leaderboard.map((entry, index) => (
            <li key={index}>
              {entry.user_id}: {entry.total_score} points
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  */
  return (
    <section>
      <LeaderboardNav />
      <Podium users={users.slice(0, 3)} />
      <Table users={users.slice(3)} />
    </section>
  )
}
