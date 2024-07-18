"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ShareQuizzButton from "@/components/Buttons/ShareQuizzButton";

interface QuizType {
  _id: any;
  name: string;
  user_id: any;
  subject: string;
  chapter: string;
  difficulty: number;
  privacy: boolean;
  points: number;
  questions: any[];
}

export default function GeneratedQuizz() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const quizID = searchParams.get("quizID");
  const [quizData, setQuizData] = useState<QuizType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = () => {
    router.push(`/dashboard/quizzes/join?quizID=${quizID}`);
  };

  const fetchQuizData = async () => {
    try {
      const response = await fetch(`/api/get/findQuiz?quizID=${quizID}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const quiz = await response.json();
      return quiz;
    } catch (error) {
      console.log("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quiz = await fetchQuizData();
        setQuizData(quiz);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setError("Failed to load quiz data");
        setLoading(false);
      }
    };

    if (quizID) {
      fetchQuiz();
    }
  }, [quizID]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!quizData) {
    return <div>No quiz data available</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl bg-gradient-to-r from-[#0172f0] to-[#005587] text-white">
        <h1 className="text-center my-2 font-[900] text-[32px] lg:text-[48px] leading-[1.2] text-white">
          Quizz-ul a fost generat cu succes!
        </h1>
        <div className="mt-4">
          <p>Nume: {quizData.name}</p>
          <p>Materie: {quizData.subject}</p>
          <p>Capitol: {quizData.chapter}</p>
          <p>Tip quizz: {quizData.privacy ? "Privat" : "Public"}</p>
          <p>Numar de intrebari: {quizData.questions.length}</p>
          <p>Dificultate: {quizData.difficulty}</p>
        </div>
        {quizData.privacy ? (
          <div className="mt-4">
            <ShareQuizzButton slug={quizID} />
          </div>
        ) : null}
      </div>

      <button
        onClick={handleSearch}
        className="text-[1.125rem] hover:bg-[#005587] p-4 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl bg-neon-blue text-white">
        Acceseaza quizz-ul!
      </button>
    </div>
  );
}
