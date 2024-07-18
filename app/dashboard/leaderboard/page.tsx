"use client";
import { useEffect, useState } from "react";

import Placement from "@/components/Leaderboard/Placement";
import TopPlacement from "@/components/Leaderboard/TopPlacement";
import NavLB from "@/components/Leaderboard/NavLB";

//? Mock subjects 
const subjects = new Map([
  ['Matematica', ['General', 'Algebra', 'Geometrie']],
  ['Fizica', ['General', 'Mecanica', 'Electricitate', 'Termodinamica']],
  ['Chimie', ['General', 'Organica', 'Anorganica']],
  ['Informatica', ['General', 'Struct. Ciclice', 'Algoritmi']],
  ['Economie', ['1', '2']]
]);

const subjectKeys = Array.from(subjects.keys());
const subjectValues = Array.from(subjects.values());

//? Mock leaderboard data
const mockLeaderboardData = new Map([
  [1, { username: "Nicu Guta", points: 940 }],
  [2, { username: "Yamal", points: 789 }],
  [3, { username: "Username", points: 628 }],
  [4, { username: "User4", points: 500 }],
  [5, { username: "User5", points: 480 }],
  [6, { username: "User6", points: 470 }],
  [7, { username: "User7", points: 460 }],
  [8, { username: "User8", points: 450 }],
  [9, { username: "User9", points: 440 }],
  [10, { username: "User10", points: 430 }],
  [11, { username: "User11", points: 420 }],
  [12, { username: "User12", points: 410 }],
  [13, { username: "User13", points: 400 }],
  [14, { username: "User14", points: 390 }],
  [15, { username: "User15", points: 380 }],
  [16, { username: "User16", points: 370 }],
  [17, { username: "User17", points: 360 }],
  [18, { username: "User18", points: 350 }],
  [19, { username: "User19", points: 340 }],
  [20, { username: "User20", points: 330 }],
]);

const mockLeaderboardArray = Array.from(mockLeaderboardData, ([place, { username, points }]) => ({ place, username, points }));


export default function Leaderboard() {

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  //? chestii Avram
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


  const top3 = mockLeaderboardArray.slice(0, 3);
  const remainingPlacements = mockLeaderboardArray.slice(3);

  return(
    <div className="flex flex-col items-center gap-4 pb-24 w-full md:gap-6 lg:py-20 lg:gap-10">
      <div className="flex flex-row items-center text-lg font-semibold px-4 py-1 rounded-xl text-slate-800 bg-white shadow-md md:text-3xl lg:text-5xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-yellow-300 size-8 md:size-10 lg:size-16">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
        </svg>
        <h1>Leaderboard {activeCategory || "General"}</h1>
      </div>

      <div className="relative items-center flex flex-col w-[100%] rounded-2xl shadow-[0px_25px_20px_-20px_rgba(0,0,0,0.45)] md:w-[80%] lg:w-[80%]">
        <NavLB category={subjectKeys} activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
        <div className="flex flex-row h-96 w-[100%] rounded-2xl bg-gradient-to-t from-neutral-300 to-gray-50 lg:h-[32rem]"> 
          
          <div className="justify-end flex flex-col gap-2 w-full h-full">
            <TopPlacement
            username={top3[1].username}
            place={top3[1].place}
            points={top3[1].points}
            />
            <div className="flex flex-col items-center gap-4 w-full h-[35%] bg-zinc-200 rounded-l-2xl">
              <div className="w-full h-6 rounded-tl-md bg-zinc-100"></div>
              <div className="flex justify-center items-center w-12 h-12 bg-zinc-300 rounded-full shadow-inner shadow-slate-400 font-bold text-xl text-zinc-100 lg:w-16 lg:h-16">
                <p className="text-slate-400 lg:text-3xl">{top3[1].place}</p>
              </div>
            </div>
          </div>

          <div className="justify-end flex flex-col gap-2 w-full h-full">
            <TopPlacement
            username={top3[0].username}
            place={top3[0].place}
            points={top3[0].points}
            />
            <div className="z-10 flex flex-col items-center gap-4 w-full h-[50%] rounded-t-lg bg-yellow-300">
              <div className="w-full h-6 rounded-t-md bg-yellow-200"></div>
              <div className="flex justify-center items-center w-14 h-14 bg-yellow-400 rounded-full shadow-inner shadow-yellow-600 font-bold text-xl text-zinc-100 lg:w-20 lg:h-20">
                <p className="text-yellow-600 text-3xl lg:text-5xl">{top3[0].place}</p>
              </div>
            </div>
          </div>
          
          <div className="justify-end flex flex-col gap-2 w-full h-full">
            <TopPlacement
            username={top3[2].username}
            place={top3[2].place}
            points={top3[2].points}
            />
            <div className="flex flex-col items-center gap-4 w-full h-[30%] rounded-r-2xl bg-amber-600">
              <div className="w-full h-6 rounded-tr-md bg-amber-500"></div>
              <div className="flex justify-center items-center w-12 h-12 bg-amber-700 rounded-full shadow-inner shadow-amber-900 font-bold text-xl text-zinc-100 lg:w-16 lg:h-16">
              <p className="text-amber-900 lg:text-3xl">3</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CLASAMENT GENERAL */}
      <div className="flex flex-col items-center gap-3 py-4 w-[95%] md:gap-4 md:w-[80%]">
        {remainingPlacements.map(({ place, username, points }) => (
            <Placement key={place} username={username} place={place} points={points} />
        ))}
      </div>

    </div>
  );
}
