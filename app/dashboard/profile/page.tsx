"use client";
import PastQuizzes from "@/components/PastQuizzes/PastQuizzes";
import PStats from "@/components/PastQuizzes/PStats";
import getUser from "@/libs/getUser/getUser";
import { Stats } from "fs";
import Link from "next/link";
import ProfileStats from "./stats/page";

export default function Profile() {
  let user = getUser();

  return (
    <section className="lg:mx-auto flex flex-col items-center">
      <h1 className="text-[36px] font-[900] my-4">Profile</h1>
      <div className="flex flex-col bg-stone-600 rounded-xl shadow-lg w-full items-start p-8 relative">
        <div className="absolute right-4 top-4">
          <Link href="/dashboard/profile/profileSettings">
            <button className="bg-blue-500 font-bold text-white text-ms rounded-lg shadow-lg p-2 lg:text-lg">Settings</button>
          </Link>
        </div>
        <div className="flex flex-col items-center self-center justify-self-center-center p-12">
          <div className="mt-6 mb-6">
            <span className="px-9 py-3 rounded-full bg-white text-8xl">{user.user_metadata?.firstName[0]}</span>
          </div>
          <p className="font-bold text-2xl text-white lg:text-3xl">{user.user_metadata?.firstName}</p>
          <p className="font-bold text-2xl text-white lg:text-3xl">{user.user_metadata?.lastName}</p>
        </div>
        <div className="p-4">
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Email: {user.email}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Phone: {user.user_metadata?.phone}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Highschool: {user.user_metadata?.highschool}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Class: {user.user_metadata?.userClass}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">County: {/*user.user_metadata?.selectedCounty*/}</p>
        </div>
      </div>

      <div className="mt-16 w-full mb-16">
        <h1 className="text-6xl font-bold">Profile Stats</h1>
        <ProfileStats/>
        <h1 className="text-6xl font-bold">Past Quizzes</h1>
        <PastQuizzes />

      </div>
    </section>
  );
}
