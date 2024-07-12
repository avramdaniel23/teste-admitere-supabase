"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { IntegerType } from "mongodb";

interface Props {
  title: string;
  subjectID: string;
  numbOfQuizzes: string;
  numbSolved: string;
  // subgCathArray: Array;
}

const SubjectCard = ({ title, subjectID, numbOfQuizzes, numbSolved }: Props) => {
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

  return (
    <div className="flex flex-col justify-between w-full max-w-[20rem] h-36 bg-slate-200 border-2 border-slate-200 rounded-md">
        <div className="flex flex-row items-center px-1 bg-slate-50 rounded-t-md">
            <div className="text-xl font-bold">{title}</div>
            
        </div>

        <div className="flex flex-row items-center justify-between px-1 bg-slate-50 rounded-b-md">
            <p>Quizuri: {numbOfQuizzes}</p>
            <p>Rezolvate: {numbSolved}</p>
        </div>
    </div>
  );
};

export default SubjectCard;
