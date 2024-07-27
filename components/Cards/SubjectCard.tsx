"use client";

import Image, { StaticImageData } from "next/image";
// import { useEffect, useState } from "react";
// import { createClient } from "@/utils/supabase/client";
// import { IntegerType } from "mongodb";
// import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";

interface SubjectProps {
  title: string;
  icon: StaticImageData;
  chapters: string;
  subjectID: string;
  totalQuizzes: number;
  totalSolved: number;
}

const SubjectCard = ({
  title,
  icon,
  chapters,
  subjectID,
  totalQuizzes,
  totalSolved,
}: SubjectProps) => {
  //   const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
  //   const supabase = createClient();

  //   useEffect(() => {
  //     const fetchNumberOfQuestions = async () => {
  //       try {
  //         const { data: questionsData, error: questionsError } = await supabase
  //           .from("questions")
  //           .select("id")
  //           .eq("subcategory_id", categoryId);

  //         if (questionsError) {
  //           throw questionsError;
  //         }

  //         setNumberOfQuestions(questionsData.length);
  //       } catch (error) {
  //         console.error("Eroare la încărcarea numărului de întrebări:", error);
  //       }
  //     };

  //     fetchNumberOfQuestions();
  //   }, [categoryId]);

  let progress = Math.floor((100 * totalSolved) / totalQuizzes);

  return (
    <div className="relative flex h-fit w-full max-w-[20rem] flex-col gap-2 rounded-md bg-zinc-200 md:max-w-[24rem] lg:h-fit lg:min-w-[480px] lg:max-w-full lg:cursor-pointer lg:rounded-2xl lg:duration-200 lg:hover:scale-110">
      <div className="absolute -top-4 right-6 flex w-fit flex-row items-center rounded-xl border-4 border-white bg-zinc-300 p-2 lg:left-0 lg:right-0 lg:mx-auto lg:my-0 lg:rounded-2xl lg:border-8">
        <Image
          src={icon}
          alt={`${title} Icon`}
          className="h-8 w-8 lg:h-16 lg:w-16"
        />
      </div>

      <div className="absolute right-4 top-0 h-2 w-2 rounded-xl shadow-[-4px_-4px_rgba(255,255,255)] lg:right-[168px] lg:top-0 lg:h-6 lg:w-6 lg:rounded-md lg:shadow-[-6px_-6px_rgba(255,255,255)]"></div>
      <div className="absolute right-20 top-0 h-2 w-2 rounded-xl shadow-[4px_-4px_rgba(255,255,255)] lg:left-[168px] lg:top-0 lg:h-6 lg:w-6 lg:rounded-md lg:shadow-[6px_-6px_rgba(255,255,255)]"></div>

      <div className="flex h-full w-full flex-col gap-6 rounded-lg px-6 py-4 lg:items-center lg:pt-20">
        <div className="flex flex-col lg:w-fit">
          <h6 className="text-lg font-semibold lg:text-center lg:text-2xl">
            {title}
          </h6>
          <div className="flex flex-row text-sm font-light text-neutral-800 md:text-xs lg:text-center lg:text-base">
            {chapters}
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:w-full">
          {/* <p className="text-sm font-light text-slate-800">Progres:</p>       */}
          <div className="flex flex-col items-center gap-1">
            <div className="mx-auto flex h-2 w-full flex-row items-center justify-between rounded-2xl bg-blue-200 lg:h-3">
              <div
                style={{ width: `${progress}%` }}
                className="h-2 rounded-2xl bg-blue-400 lg:h-3"
              ></div>
              {/* <p className="text-xs font-thin">{progress}%</p> */}
            </div>
          </div>

          <div className="flex flex-row justify-between text-sm font-light lg:text-lg">
            <p>Ai exersat:</p>
            <p>
              {totalSolved}/{totalQuizzes}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
