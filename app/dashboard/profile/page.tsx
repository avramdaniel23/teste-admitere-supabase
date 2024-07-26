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
      <h1 className="text-[36px] font-[900]  ">Profil</h1>

      <div className="mt-16">
        <PStats />
        {/* <Link href="/dashboard/profile/past-quizzes">
          <div>Past Quizzes</div>
        </Link> */}
        <h1 className="text-[28px] font-[900] mt-8 ">Teste rezolvate</h1>

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
