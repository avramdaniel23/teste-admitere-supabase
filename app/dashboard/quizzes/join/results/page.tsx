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
        }
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
      quizData.questions.some((q: any) => q._id === question._id)
    );
  }

  let thisSubmission: any = null;

  if (user.id && submissions.length > 0) {
    thisSubmission = submissions.filter(
      (submission: any) => submission.user_id === user.id
    );
  } else {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      {questionsData && (
        <div className="mb-5 font-medium">
          <div className="text-center text-[28px]">
            Rezultatul testului {quizData.name}
          </div>
          {thisSubmission[thisSubmission.length - 1] && (
            <p className="my-4 text-center text-[20px]">
              Scor: {thisSubmission[thisSubmission.length - 1].score}/
              {thisSubmission[thisSubmission.length - 1].submission_answers
                .length * 10}
            </p>
          )}
        </div>
      )}

      {questionsData && (
        <div>
          {questionsData.map((question, index) => (
            <div
              key={index}
              className="mb-7  relative shadow-md border border-black rounded-lg p-2 py-4"
            >
              <div className=" flex justify-between  items-center ">
                <span className="flex items-center justify-center border-2 p-2  rounded-full size-8 ml-1 mr-2 border-gray-400 ">
                  <p className="">{index + 1}</p>
                </span>
              </div>
              <p className="p-2 text-justify text-[18px] text-black font-bold  rounded-t-lg">
                {question.question}
              </p>
              {thisSubmission[thisSubmission.length - 1] &&
                thisSubmission[thisSubmission.length - 1].submission_answers[
                  index
                ] && (
                  <div>
                    <div
                      key={index}
                      className={`p-2 rounded-md shadow-md flex items-center  ${
                        thisSubmission[thisSubmission.length - 1]
                          .submission_answers[index].is_correct == false
                          ? "bg-red-300 "
                          : "bg-green-200 my-2"
                      }`}
                    >
                      {thisSubmission[thisSubmission.length - 1]
                        .submission_answers[index].is_correct == false ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 28 28"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 m-[2px] mt-[5px] "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 28 28"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6 m-[2px] mt-[5px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      )}
                      <p className="mr-2  ">Răspunsul tău: </p>
                      <div className={`text- black `}>
                        {
                          thisSubmission[thisSubmission.length - 1]
                            .submission_answers[index].selected_answer_id
                        }
                      </div>
                    </div>
                  </div>
                )}
              {thisSubmission[thisSubmission.length - 1].submission_answers[
                index
              ].is_correct == false && (
                <div className="w-full p-2 mt-2  rounded-md opacity-50  font-bold">
                  <p className="ml-1  ">
                    Răspunsul corect este: {question.correct_answer}
                  </p>
                </div>
              )}
              {/* <div className="relative -bottom-2 left-[98%]">
               Rezolvare 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 hover:text-blue-400 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}