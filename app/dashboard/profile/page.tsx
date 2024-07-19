"use client";
import PastQuizzes from "@/components/PastQuizzes/PastQuizzes";
import PStats from "@/components/PastQuizzes/PStats";
import getUser from "@/libs/getUser/getUser";
import { Stats } from "fs";
import Link from "next/link";

export default function Profile() {
  let user = getUser();

  return (
    <section className="lg:mx-auto flex flex-col items-center">
      <h1 className="text-[36px] font-[900]  ">Profil</h1>
      <div className="flex">
          <p>{user.user_metadata?.firstName}</p>
          <p>{user.user_metadata?.lastName}</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-12 lg:grid lg:grid-cols-2 lg:gap-x-12">
        <p>Email: {user.email}</p>
        <p>Phone: {user.user_metadata?.phone}</p>
        <p>Class: {user.user_metadata?.userClass}</p>
        <p>Faculty of Interest: {user.user_metadata?.faculty}</p>
      </div>

      <div className="mt-16">
        <PStats />
        {/* <Link href="/dashboard/profile/past-quizzes">
          <div>Past Quizzes</div>
        </Link> */}
        <PastQuizzes />

        {/* <Link href="/dashboard/profile/stats">
          <div>Stats</div>
        </Link> */}
        <Link href="/dashboard/profile/profileSettings">
          <button className="bg-gray-400 font-bold text-white text-2xl rounded-lg p-2">Settings</button>
        </Link>
      </div>
    </section>
  );
}
