"use client";
import PastQuizzes from "@/components/PastQuizzes/PastQuizzes";
import PStats from "@/components/PastQuizzes/PStats";
import getUser from "@/libs/getUser/getUser";
import { Stats } from "fs";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile() {
  let user = getUser();
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

  let userLeaderboard = leaderboard.filter((lead) => lead.user_id == user.id);

  return (
    <section className="mb-[70px]">
      <h1 className="text-[36px] font-[900]  ">Profil</h1>
      <div className="mt-8 gap-8  text-xl rounded-xl border-2 shadow-lg p-8 pt-4">
        <div className={"justify-end w-full flex"}>
          <Link href="/dashboard/profile/profileSettings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </Link>
        </div>
        <div className={"grid md:grid-cols-2 gap-8"}>
          <div>
            <span className={"font-bold"}>Prenume: </span>{" "}
            <span>{user?.user_metadata?.firstName}</span>
          </div>
          <div>
            <span className={"font-bold"}>Nume: </span>{" "}
            {user?.user_metadata?.lastName}
          </div>
          <div>
            <span className={"font-bold"}>Email: </span> {user.email}
          </div>
          <div>
            <span className={"font-bold"}>Telefon: </span>
            {user?.user_metadata?.phone}
          </div>
          <div>
            <span className={"font-bold"}>Liceu: </span>
            {user?.user_metadata?.highschool}
          </div>
          <div>
            <span className={"font-bold"}>Clasa: </span>
            {user?.user_metadata?.userClass}
          </div>
        </div>
      </div>

      <h2 className="text-[28px] font-[900] mt-12 mb-4">Statistici</h2>

      <div className={"gap-8  text-xl rounded-xl border-2 shadow-lg p-4"}>
        <div className={"flex w-full justify-between text-xl px-4 py-4 pb-0"}>
          <span className="">Scor total</span>
          {userLeaderboard[0] && <span>{userLeaderboard[0].total_score}</span>}
        </div>
        <div className={"flex w-full justify-between text-xl px-4 py-4"}>
          <span>Teste finalizate</span>
          {userLeaderboard[0] && (
            <span>{userLeaderboard[0].total_quizzes}</span>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-[28px] font-[900] mt-8 mb-4">Teste rezolvate</h1>
        <div className="overflow-y-scroll h-[500px] mb-4">
          <PastQuizzes />
        </div>

        {/* <Link href="/dashboard/profile/profileSettings">
          <div>Settings</div>
        </Link> */}
      </div>
    </section>
  );
}
