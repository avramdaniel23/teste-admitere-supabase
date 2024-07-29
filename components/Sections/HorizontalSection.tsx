"use client";
import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";
import getAllQuizzes from "@/libs/getAllQuizzes/getAllQuizzes";
import QuizCard from "../Cards/QuizCard";

interface Props {
  categoryName: string;
  subcategories: any[];
}

const HorizontalSection = () => {
  const quizzes: any[] = getAllQuizzes();

  return (
    <section className="mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[1rem] md:p-[2.5rem] md:pt-0 lg:px-[1rem] xl:px-0 mb-[70px] ">
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="relative text-[1.5rem] md:text-[2.25rem] font-[900] uppercase">
          {/* {categoryName.toUpperCase()} */}
          Dashboard
        </h2>
      </header>
      <div
        className={` auto-rows-auto grid gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto  lg:gap-y-[1.5rem]`}
      >
        {quizzes &&
          quizzes.map((quiz, index) => {
            return (
              <div key={index}>
                <QuizCard quiz={quiz} color={"blue"} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default HorizontalSection;
