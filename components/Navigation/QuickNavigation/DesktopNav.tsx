'use client'

import { redirect } from "next/navigation";
// import { createClient } from "@/utils/supabase/server";
import Logo from "@/components/Logo/Logo";
import NavLink from "./NavLink";
// import AuthButton from "@/components/AuthButton";
import DarkModeBtn from "@/components/Buttons/DarkMode";
import Hamburger from "@/components/Buttons/Hamburger";

import React, { useState } from "react";


async function getTimeData() {
  const res = await fetch("https://api.sunrisesunset.io/json?lat=45&lng=25");
  return res.json();
}

const convertTime12to24 = (time12h: any) => {
  const [time, modifier] = time12h.split(" ");

  let [hours] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return hours;
};


export default function DesktopNav() {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };
  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   return redirect("/login");
  // }
  // const timeData = await getTimeData();
  // const sunrise = convertTime12to24(timeData.results.sunrise);
  // const sunset = convertTime12to24(timeData.results.sunset);

  return (
    <nav className={`font-[0.625rem] bg-white leading-[1rem] block w-full shadow-xl dark:bg-dark dark:border-t-[1px] fixed bottom-0 border-t mt-10 
                    lg:mt-0 lg:sticky lg:top-0 lg:block lg:bg-slate-400 lg:w-[20%] lg:h-screen lg:shadow-black lg:transition-all lg:duration-300 lg:ease-in-out
                    ${isSideBarOpen ? "lg:w-72" : "lg:w-[8%]"}`}>
      
      <div className="flex items-center justify-around w-full px-4 lg:items-center lg:flex lg:flex-col bg-slate-100 lg:px-4 lg:h-screen">
        <div className={`flex flex-row justify-center items-center`}>
          <p className={`overflow-hidden transition-all duration-300 ${isSideBarOpen ? "text-3xl font-bold w-40 mr-2" : "w-0"}`}>Dashboard</p>
          <Hamburger toggleSideBar={toggleSideBar} />
        </div>
        <NavLink
          href="/dashboard/notifications"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>
          }
          label="Notificari"
          isSidebarOpen={isSideBarOpen}
        />
        <NavLink
          href="/dashboard/leaderboard"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
              />
            </svg>
          }
          label="Leaderboard"
          isSidebarOpen={isSideBarOpen}
        />
        <NavLink
          href="/dashboard/quizzes"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
          }
          label="Quizzes"
          isSidebarOpen={isSideBarOpen}
        />
        <NavLink
          href="/dashboard/community"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          }
          label="Comunitate"
          isSidebarOpen={isSideBarOpen}
        />
        <NavLink
          href="/dashboard/profile"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          }
          label="Profil"
          isSidebarOpen={isSideBarOpen}
        />
        <hr className="w-full h-[2px] bg-slate-400" />

        <div className="flex flex-col gap-4">
          {/* <DarkModeBtn sunset={sunset} sunrise={sunrise}></DarkModeBtn> */}
          <div className="flex flex-row items-center w-full">
            <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover lg:contents">
              <svg className="hidden size-6 lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}