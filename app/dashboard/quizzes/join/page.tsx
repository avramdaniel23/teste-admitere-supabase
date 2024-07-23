"use client";
import AnswersSection from "@/components/Quizz/AnswersSection";
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
          <div key={index} className="flex gap-2 items-center justify-center">
            <div className="font-semibold ">
              {quiz.name.charAt(0).toUpperCase() + quiz.name.slice(1)}
            </div>
            <div className="font-semibold">
              {quiz.subject.charAt(0).toUpperCase() + quiz.subject.slice(1)}
            </div>
            <div className="font-semibold">
              {quiz.chapter.charAt(0).toUpperCase() + quiz.chapter.slice(1)}
            </div>
          </div>
        ))}
      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div
            key={index}
            className="border-2 rounded-lg p-4 border-black mt-4 shadow-lg"
          >
            {/* <div className=" flex items-stretch justify-start "> */}
            <span className="flex items-center justify-center border-2 p-2 rounded-full size-8 mr-2 border-gray-400">
              <p className="">{index + 1}</p>
            </span>

            <p>{question.question}</p>
            {/* </div> */}
            <AnswersSection
              questionAnswer={question.question_answers}
            ></AnswersSection>
            {/* <fieldset>
              {question.question_answers.map((answer: any, i: any) => (
                <div key={i}>
                  <input
                    type="radio"
                    value={answer}
                    id={answer}
                    name={`question-${question._id}`}
                  />
                  <label htmlFor={answer}>{answer}</label>
                </div>
              ))}
            </fieldset> */}
          </div>
        ))}
    </div>
  );
}
