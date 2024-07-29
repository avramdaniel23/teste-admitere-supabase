"use client";
import PastQuizzes from "@/components/PastQuizzes/PastQuizzes";
import PStats from "@/components/PastQuizzes/PStats";
import getUser from "@/libs/getUser/getUser";
import { Stats } from "fs";
import Link from "next/link";

export default function Profile() {
  let user = getUser();

  return (
    <section>
      <h1 className="text-[36px] font-[900]  flex items-center justify-center border-b-4 w-fit border-[#66A5AD]">
        Profil
      </h1>

      <div className=" flex-col mt-3 flex border-2  items-center justify-center w-full p-5 h-full rounded-xl border-gray-300 shadow-lg">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-slate-200 shadow-xl border-2 border-[#66A5AD]"></div>
        <p className="mt-2 text-[20px] font-semibold">Username</p>
      </div>

      <div className="mt-16">
        <PStats />
        {/* <Link href="/dashboard/profile/past-quizzes">
          <div>Past Quizzes</div>
        </Link> */}
      </div>
      <div className="mt-16">
        <PastQuizzes />
        {/* <Link href="/dashboard/profile/stats">
          <div>Stats</div>
        </Link> */}
      </div>
      <Link href="/dashboard/profile/profileSettings">
        <div>Settings</div>
      </Link>
    </section>
  );
}
