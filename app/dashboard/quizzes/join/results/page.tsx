"use client";

import getUser from "@/libs/getUser/getUser";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Results() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [quizData, setQuizData] = useState<any>(null);
  const [questionsData, setQuestions] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const quizID = searchParams.get("quizID");
  let user = getUser();

  const fetchSubmissions = async () => {
    try {
      const response = await fetch(
        `/api/get/findSubmission?quizID=${quizID}&userID=${user.id}`,
        {
          method: "GET",
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const submissions = await response.json();
      return submissions;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const submissions = await fetchSubmissions();
        setSubmissions(submissions);
      } catch (error) {
        console.error("Error fetching submission data:", error);
      }
    };

    fetchSubmission();
  }, [quizID, user.id]);

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
        setQuizData(quiz); // Ensure the quiz data is set correctly
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

  if (quizData && quizData.questions) {
    filteredQuestions = questionsData.filter((question: any) =>
      quizData.questions.some((q: any) => q._id === question._id),
    );
  }

  let thisSubmission: any = null;

  if (user.id && submissions.length > 0) {
    thisSubmission = submissions.find(
      (submission: any) => submission.user_id === user.id,
    );
  }

  return (
    <div>
      {quizData && (
        <div className="mb-5 font-medium">
          <div className="text-center text-[28px]">
            Rezultatul testuloui {quizData.name}
          </div>
          <p className="my-4 text-center text-[20px]">
            Scor: {thisSubmission?.score}/
            {thisSubmission.submission_answers.length * 10}
          </p>
        </div>
      )}

      {questionsData && (
        <div>
          {questionsData.map((question, index) => (
            <div key={index} className="mb-8 rounded-lg shadow-md">
              <p className="rounded-t-lg bg-blue-600 p-3 text-justify text-[18px] text-white">
                {index + 1}. {question.question}
              </p>

              {thisSubmission && thisSubmission.submission_answers[index] && (
                <div className="flex w-full flex-col justify-between">
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-4 ${thisSubmission.submission_answers[index].is_correct ? "bg-green-300" : "bg-red-300"}`}
                  >
                    {thisSubmission.submission_answers[index].is_correct ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    Răspunsul tău:{" "}
                    <span className="font-medium">
                      {
                        thisSubmission.submission_answers[index]
                          .selected_answer_id
                      }
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-b-lg p-4">
                    {thisSubmission.submission_answers[index].is_correct ? (
                      <span className="font-medium">
                        Răspunsul tău este corect
                      </span>
                    ) : (
                      <p>
                        Răspunsul corect este:{" "}
                        <span className="font-medium">
                          {question.correct_answer}
                        </span>{" "}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
