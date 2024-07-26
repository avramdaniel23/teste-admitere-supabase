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

    thisSubmission = submissions.find((submission: any) => submission.user_id === user.id);
}
else {
    return <h1>Loading submission...</h1>
}

    return (

<div>
            {quizData && (
                <div className="font-medium">
                    <div className="text-center text-[28px]">Rezultatul testului {quizData.name}</div>
                    <p className="my-4 text-center text-[20px]">Scor: {thisSubmission.score}/{thisSubmission.submission_answers.length * 10}</p>

                </div>
            )}

            {questionsData && (
                <div>
                    {questionsData.map((question, index) => (
                        <div key={index} className="mb-7 shadow-md rounded-lg">
                            <div className="flex flex-col bg-gray-500 rounded-t-lg">
                                <p className="p-8 text-justify text-[18px] text-white font-bold">{index + 1}. {question.question}</p>
                                <div className="flex justify-center">
                                    <img className={`w-[60%] rounded-lg shadow-xl ${question.images.length === 1 ? "mb-10" : "mb-10"}`} src="https://i.postimg.cc/wM4qxJ2j/Screenshot-2024-07-23-183843.png" />
                                </div>
                            </div>
                            {thisSubmission && thisSubmission.submission_answers[index] && (
                                <div>
                                    <div key={index} className={`p-6 ${thisSubmission.submission_answers[index].is_correct == false ? "bg-red-300" : "bg-green-300"}`}>Răspunsul tău: <span className={`font-bold`}>{thisSubmission.submission_answers[index].selected_answer_id}</span></div>
                                </div>
                            )}
                            <div className="w-full p-6 rounded-b-lg bg-gray-300"><p>Răspunsul corect este: <span className="font-bold">{question.correct_answer}</span></p></div>
                        </div>
                    ))}
                </div>
            )}





        </div>
    );
}