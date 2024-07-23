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
      <h1 className="text-[36px] font-[900] my-4">Profile</h1>
      <div className="flex flex-col bg-orange-400 rounded-xl shadow-lg w-full items-center relative">
        <div className="absolute right-4 top-4">
          <Link href="/dashboard/profile/profileSettings">
            <button className="bg-blue-500 font-bold text-white text-ms rounded-lg shadow-lg p-2 lg:text-lg">Settings</button>
          </Link>
        </div>
        <div className="flex flex-col items-center  p-12">
          <img className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] rounded-full mb-4" src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png" />
          <p className="font-bold text-2xl text-white lg:text-3xl">{/*user.user_metadata?.firstName*/}</p>
          <p className="font-bold text-2xl text-white lg:text-3xl">{/*user.user_metadata?.lastName*/}</p>
        </div>
        <div className="p-6">
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Email: {/*user.email*/}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Phone: {/*user.user_metadata?.phone*/}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Highschool: {/*user.user_metadata?.highschool*/}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">Class: {/*user.user_metadata?.userClass*/}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl">County: {/*user.user_metadata?.selectedCounty*/}</p>
          <p className="font-bold text-sm text-white md:text-md lg:text-xl ">Faculty of Interest: {/*user.user_metadata?.faculty*/}</p>
        </div>
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
        
      </div>
    </section>
  );
}
