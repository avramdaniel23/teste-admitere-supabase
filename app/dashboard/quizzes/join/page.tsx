"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function QuizzesJoin() {
  const [quizzesData, setQuizzes] = useState<any>([]);
  const [questionsData, setQuestions] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const quizID = searchParams.get("quizID");

  const fetchQuizData = async () => {
    try {
      const response = await fetch(`/api/get/findQuiz?quizID=${quizID}`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} `);
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
        setQuizzes([quiz]); // Ensure the quiz data is set correctly
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    if (quizID) {
      fetchQuiz();
    }
  }, [quizID]);

  const fetchQuestionsData = async () => {
    try {
      const response = await fetch("/api/get/allQuestions", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const questions = await response.json();
      return questions;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = await fetchQuestionsData();
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching questions data:", error);
      }
    };

    fetchQuestions();
  }, []);

  let filteredQuestions: any[] = [];

  if (quizzesData.length > 0 && quizzesData[0].questions) {
    filteredQuestions = questionsData.filter((question: any) =>
      quizzesData[0].questions.filter((q: any) => q._id === question._id)
    );
  }

  return (
    <div className="flex flex-col gap-4 mb-14">

      <div className="rounded-md">
      {quizzesData &&
        quizzesData.length > 0 &&
        quizzesData.map((quiz: any, index: any) => (
          <div className="flex flex-col gap-2 rounded-md shadow-md p-2 uppercase" key={index}>
            <div className="text-4xl font-bold">{quiz.name}</div>
            <div className="w-full h-0.5 bg-blue-400 rounded-full"></div>
            <div className="flex flex-row justify-between">
              <div>{quiz.subject}</div>
              <div>{quiz.chapter}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md lg:p-8" key={index}>
            <p className="">{question.question}</p>
            <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
            <fieldset className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
              {question.question_answers.map((answer: any, i: any) => (
                <div className="flex items-center gap-1 bg-slate-100 rounded-md p-1 hover:bg-blue-100 duration-100" key={i}>
                  <input
                    type="radio"
                    value={answer}
                    id={answer}
                    name={`question-${question._id}`}
                    className="w-4 h-4"
                  />
                  <label className="w-full h-full" htmlFor={answer}>{answer}</label>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
      </div>

    </div>
  );
}
