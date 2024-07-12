"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface gradient {
    from: string;
    to: string;

}
interface Props {
    title: string;
    className: string;
    categories: JSX.Element;
}

const SubjectCard = ({ title, className, categories}: Props) => {
    const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
    const supabase = createClient();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    //
    // useEffect(() => {
    //     const fetchNumberOfQuestions = async () => {
    //         try {
    //             const { data: questionsData, error: questionsError } = await supabase
    //                 .from("questions")
    //                 .select("id")
    //                 .eq("subcategory_id", categoryId);
    //
    //             if (questionsError) {
    //                 throw questionsError;
    //             }
    //
    //             setNumberOfQuestions(questionsData.length);
    //         } catch (error) {
    //             console.error("Eroare la încărcarea numărului de întrebări:", error);
    //         }
    //     };
    //
    //     fetchNumberOfQuestions();
    // }, [categoryId]);

    return (
        <div className={`w-full h-fit rounded-lg shadow-xl bg-gradient-to-r ${className}`} onClick={toggleExpansion} >

                <div className="py-4 flex justify-center">
          <p className="w-full uppercase p-6 text-white m-3 text-center shadow-2xl backdrop-blur font-bold tracking-wider">
            {title}
          </p>
                </div>
                {isExpanded && <div>{categories}</div>}
            </div>
    );
};

export default SubjectCard;
