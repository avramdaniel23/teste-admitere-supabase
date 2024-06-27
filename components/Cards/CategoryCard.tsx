"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Props {
  title: string;
  categoryId: string;
}

const CategoryCard = ({ title, categoryId }: Props) => {
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
    <div className=" rounded-lg shadow-xl">
      <div className="w-full ">
        <div className="py-4 flex flex-row-reverse">
          <span className="uppercase bg-gradient-to-r from-[#4062BB] to-[#5200AE] text-white p-3 rounded-l-full px-[2rem] font-bold tracking-wider">
            {title}
          </span>
        </div>
        <div className="px-4 pb-6">
          <div className="text-xs flex flex-col">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4062BB"
                className="size-5 mr-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="flex items-center">
                {numberOfQuestions} întrebări
              </span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4 w-full">
          <div className="w-full uppercase bg-gradient-to-r from-[#4062BB] to-[#5200AE] text-white py-2 rounded-full text-center tracking-wider">
            Vezi categoria
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
