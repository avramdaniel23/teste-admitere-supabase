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
    <div className="rounded-lg shadow-xl">
      <div className="w-full">
        <div className="flex flex-row-reverse py-4">
          <span className="rounded-l-full bg-gradient-to-r from-[#4062BB] to-[#5200AE] p-3 px-[2rem] font-bold uppercase tracking-wider text-white">
            {title}
          </span>
        </div>
        <div className="px-4 pb-6">
          <div className="flex flex-col text-xs">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4062BB"
                className="mr-1 size-5"
              >
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
        <div className="w-full px-4 pb-4">
          <div className="w-full rounded-full bg-gradient-to-r from-[#4062BB] to-[#5200AE] py-2 text-center uppercase tracking-wider text-white">
            Vezi categoria
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
