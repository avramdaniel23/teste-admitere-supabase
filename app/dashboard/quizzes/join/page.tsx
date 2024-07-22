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
          <div key={index} className={"flex flex-col items-center"}>
            <div className={"font-extrabold text-2xl"}>{quiz.name}</div>
            <div className={"font-bold capitalize text-xl"}>{quiz.subject} -{">"} {quiz.chapter}</div>
          </div>
        ))}
      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div key={index} className={"shadow-lg bg-gray-200 my-24 rounded-lg"}>
            <p className={"h-fit min-h-20 bg-neon-blue text-white rounded-t-lg text-lg font-bold p-2"}>{index+1}. {question.question}</p>
            <fieldset>
              <div className={"grid grid-cols-1 md:grid-cols-2"}>
              {question.question_answers.map((answer: any, i: any) => (
                <div key={i} className={"my-2 px-4 py-2"}>
                  <input
                      className={"p-4"}
                    type="radio"
                    value={answer}
                    id={answer}
                    name={`question-${question._id}`}
                  />
                  <label className={"p-4 m-4"} htmlFor={answer}>{answer}</label>
                </div>
              ))}
              </div>
            </fieldset>
          </div>
        ))}
    </div>
  );
}
