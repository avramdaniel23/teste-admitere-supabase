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

const SubjectCard = ({ title, icon, chapters, subjectID, totalQuizzes, totalSolved }: SubjectProps) => {
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

  let progress = Math.floor((100*totalSolved)/totalQuizzes);

  return (
  <div className="relative flex flex-col gap-2 w-full h-fit bg-zinc-200 rounded-md max-w-[20rem] md:max-w-[24rem] lg:duration-200 lg:cursor-pointer lg:hover:scale-110 lg:max-w-full lg:min-w-[480px] lg:h-fit lg:rounded-2xl">

    <div className="absolute right-6 -top-4 flex flex-row items-center w-fit p-2 bg-zinc-300 border-4 border-white rounded-xl lg:right-0 lg:left-0 lg:my-0 lg:mx-auto lg:rounded-2xl lg:border-8"> 
      <Image src={icon} alt={`${title} Icon`} className="w-8 h-8 lg:w-16 lg:h-16" />
    </div>

    <div className="absolute w-2 h-2 top-0 right-4 rounded-xl shadow-[-4px_-4px_rgba(255,255,255)] lg:rounded-md lg:w-6 lg:h-6 lg:top-0 lg:right-[168px] lg:shadow-[-6px_-6px_rgba(255,255,255)]"></div>
    <div className="absolute w-2 h-2 top-0 right-20 rounded-xl shadow-[4px_-4px_rgba(255,255,255)] lg:rounded-md lg:w-6 lg:h-6 lg:top-0 lg:left-[168px] lg:shadow-[6px_-6px_rgba(255,255,255)]"></div>

    <div className="flex flex-col gap-6 w-full h-full px-6 py-4 rounded-lg lg:items-center lg:pt-20">
      <div className="flex flex-col lg:w-fit">
        <h6 className="text-lg font-semibold lg:text-center lg:text-2xl">{title}</h6>
        <div className="flex flex-row text-sm font-light text-neutral-800 md:text-xs lg:text-center lg:text-base">
            {chapters}
        </div>
      </div>

      <div className="flex flex-col gap-1 lg:w-full">
        {/* <p className="text-sm font-light text-slate-800">Progres:</p>       */}
        <div className="flex flex-col items-center gap-1">
          <div className=" flex flex-row items-center justify-between mx-auto w-full h-2 rounded-2xl bg-blue-200 lg:h-3">
            <div style={{ width: `${progress}%` }} className="h-2 rounded-2xl bg-blue-400 lg:h-3"></div>
            {/* <p className="text-xs font-thin">{progress}%</p> */}
          </div>
        </div>

        <div className="flex flex-row justify-between text-sm font-light lg:text-lg">
          <p>Ai exersat:</p>
          <p>{totalSolved}/{totalQuizzes}</p>
        </div>
      </div>
      
    </div>

  </div>

  );
};

export default SubjectCard;
