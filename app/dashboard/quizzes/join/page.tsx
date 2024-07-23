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
    <div>
      {quizzesData &&
        quizzesData.length > 0 &&
        quizzesData.map((quiz: any, index: any) => (
          <div className="flex flex-col items-center bg-red-600 rounded-t-2xl shadow-xl p-4" key={index}>
            <div className="text-white text-4xl font-bold">{quiz.name}</div>
            <div className="text-white text-xl font-bold uppercase">{quiz.subject}</div>
            <div className="text-white font-bold">{quiz.chapter}</div>
          </div>
        ))}
      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div key={index} className="flex flex-col p-8 bg-white shadow-xl">
            <div className="flex mb-4">
              <p className="mr-2 font-bold text-xl lg:text-2xl">{index + 1}.</p>
              <p className="font-bold text-xl lg:text-2xl">{question.question}</p>
            </div>
            <fieldset>
              {question.question_answers.map((answer: any, i: any) => (
                <div key={i} className="ml-6 mb-4 flex items-center">
                  <input
                    className="mr-2 w-5 h-5"
                    type="radio"
                    value={answer}
                    id={answer}
                    name={`question-${question._id}`}
                  />
                  <label htmlFor={answer}>{answer}</label>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
    </div>
  );
}
