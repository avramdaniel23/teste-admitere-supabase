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

  <div className="relative flex flex-col gap-1 w-full max-w-[20rem] h-fit">

    <div className="absolute right-6 -top-4 flex flex-row items-center w-fit p-2 bg-zinc-300  border-4 border-white rounded-xl"> 
      <Image src={icon} alt={`${title} Icon`} style={{ width: "32px", height: "32px" }} />
    </div>

    <div className="absolute w-2 h-2 top-0 right-4  rounded-xl shadow-[-4px_-4px_rgba(255,255,255)]"></div>
    <div className="absolute w-2 h-2 top-0 right-20  rounded-xl shadow-[4px_-4px_rgba(255,255,255)]"></div>

    <div className="flex flex-col gap-6 bg-zinc-200 px-6 py-4 rounded-lg">
      <div className="flex flex-col">
        <h6 className="text-lg font-semibold">{title}</h6>
        <div className="flex flex-row text-sm italic font-light text-neutral-800">
            {chapters}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        {/* <p className="text-sm font-light text-slate-800">Progres:</p>       */}
        <div className="flex flex-col items-center gap-1">
          <div className=" flex flex-row items-center justify-between mx-auto w-full h-2 rounded-2xl bg-blue-200">
            <div style={{ width: `${progress}%` }} className="h-2 rounded-2xl bg-blue-400"></div>
            {/* <p className="text-xs font-thin">{progress}%</p> */}
          </div>
        </div>

        <div className="flex flex-row justify-between italic text-sm font-light">
          <p>Ai exersat:</p>
          <p>{totalSolved}/{totalQuizzes}</p>
        </div>
      </div>
      
    </div>

  </div>

  );
};

export default SubjectCard;
