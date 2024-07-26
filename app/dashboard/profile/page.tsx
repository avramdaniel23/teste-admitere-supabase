"use client";
import PastQuizzes from "@/components/PastQuizzes/PastQuizzes";
import PStats from "@/components/PastQuizzes/PStats";
import getUser from "@/libs/getUser/getUser";
import { Stats } from "fs";
import Link from "next/link";

export default function Profile() {
  let user = getUser(); 

  let username = 'user';


  return (
    <section className="flex flex-col gap-6 text-slate-800 p-1">
      <div className="flex gap-2 items-center bg-white shadow-md shadow-gray-300 rounded-lg p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <h1 className="text-3xl font-semibold font-mono">Profil</h1>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center bg-white shadow-md shadow-gray-300 rounded-lg w-full h-fit p-2">
        <div className="flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full border-2 border-blue-400">
          <p className="capitalize text-4xl font-mono font-bold">{username[0]}</p>
        </div>
        <h1 className="font-semibold text-lg bg-white rounded-lg px-2">{username}</h1>
      </div>
      <div className=" flex flex-col gap-6">
        <PStats />
        {/* <Link href="/dashboard/profile/past-quizzes">
          <div>Past Quizzes</div>
        </Link> */}
        <PastQuizzes />

        {/* <Link href="/dashboard/profile/stats">
          <div>Stats</div>
        </Link> */}
        <Link href="/dashboard/profile/profileSettings">
          <div>Settings</div>
        </Link>
      </div>
    </section>
  );
}
