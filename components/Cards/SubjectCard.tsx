"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
  title: string;
  categoryId: string;
  imageUrl: string
}

const SubjectCard = ({ title, categoryId, imageUrl }: Props) => {
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
  const supabase = createClient();
  

  useEffect(() => {
    const fetchNumberOfQuestions = async () => {
      try {
        const { data: questionsData, error: questionsError } = await supabase
          .from("questions")
          .select("id")
          .eq("subcategory_id", categoryId);

        if (questionsError) {
          throw questionsError;
        }

        setNumberOfQuestions(questionsData.length);
      } catch (error) {
        console.error("Eroare la încărcarea numărului de întrebări:", error);
      }
    };

    fetchNumberOfQuestions();
  }, [categoryId]);

  return (
    <div className=" rounded-xl shadow-xl w-[300px] lg:w-[300px]">
        <div className="flex flex-col">
            <img className="rounded-t-xl h-[150px] w-[300px] lg:h-[150px] lg:w-[300px]" src={imageUrl} alt="imageUrl"/>
            <div className="bg-white p-4 text-md rounded-xl flex">
                <span className="font-bold">
                    {title} 
                </span>
                <span className="flex ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mt-1 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
               </svg>
                {numberOfQuestions} întrebări
                </span>
            </div>
        </div>
    </div>
  );
};

export default SubjectCard;