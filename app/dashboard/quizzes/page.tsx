"use client";

import Link from "next/link";
import { useState } from "react";

export default function Quizzes() {
  const [quizID, setQuizzID] = useState("");

  const handleSearch = (e: any) => {
    const id = parseInt(quizID);
    if (e.key === "Enter") {
      window.location.href = `/dashboard/quizzes/join?quizID=${quizID}`;
    }
  };
  return (
    <section className=" flex flex-col items-center  max-w-[80rem] ">
      <Link
        href="/dashboard/quizzes/configure"
        className="w-full flex justify-center  "
      >
        <div className="w-[90%] lg:w-[66%] h-[200px]  md:h-[300px] bg-gray-200 flex justify-center align-middle items-center ">
          <div>
            <p>Configurare Quiz</p>
          </div>
        </div>
      </Link>
      <div className="w-full mt-8  flex justify-center ">
        <div className="w-[90%] lg:w-[66%] bg-gray-100  flex justify-center align-middle items-center  rounded-2xl ">
          <div className="block items-center py-4 px-2 lg:p-8 w-[96%] h-[89%] rounded-xl bg-gradient-to-r  from-[#0172f0] to-[#005587] ">
            <p className="text-center my-2 font-[900] text-[32px]  lg:text-[48px] leading-[1.2] text-white ">
              Alatura-te unui quiz
            </p>
            <p className=" px-8 text-center mt-4 mb-4 text-white ">
              Daca quiz-ul este deja facut, doar intru id-ul si conecteaza-te
            </p>
            <form className="flex relative w-full justify-center mb-10">
              <div className="relative w-full  lg:w-[75%] ">
                <input
                  type="search"
                  id="id_quiz"
                  name="id_quiz"
                  placeholder="Introdu id-ul quiz-ului"
                  className="relative flex justify-center text-gray-400 py-4 rounded-full pl-4 w-full !focus-visible:outline-0"
                  onChange={(e) => setQuizzID(e.target.value)}
                  onKeyDown={handleSearch}
                />

                <Link
                  href={{
                    pathname: "/dashboard/quizzes/join",
                    query: { quizID },
                  }}
                  className="absolute right-[1.5%] lg:right-[0.5%] top-[6%] flex flex-col h-[50px] w-[50px]  justify-center p-4 bg-[#0172f0] rounded-full "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
