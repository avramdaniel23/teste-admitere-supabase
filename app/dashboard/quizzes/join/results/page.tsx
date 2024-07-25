"use client";

import getUser from "@/libs/getUser/getUser";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import QuizAnswerCard from "@/components/Cards/QuizAnswerCard";

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
        return <h1>No submission</h1>
    }

    return (
        <div>
            {quizData && (
                <div className="mb-5 font-medium">
                    <div className="text-center text-[28px]">Rezultatul testului {quizData.name}</div>
                    <p className="my-4 text-center text-[20px]">Scor: {thisSubmission?.score || 0}/{thisSubmission?.submission_answers.length * 10}</p>

                </div>
            )}

            {questionsData && (
                <div onClick={() => {console.log(questionsData); console.log(thisSubmission.submission_answers[0])}}>
                    {questionsData.map((question, index) => (
                        <div key={index} className="mb-7 shadow-md rounded-lg">
                            <QuizAnswerCard index={index} question={question} answers={question.question_answers}
                                            userAnswer={thisSubmission.submission_answers[index].selected_answer_id}
                                            correctAnswer={question.correct_answer}></QuizAnswerCard>
                            <div className="w-full p-2  rounded-b-lg bg-gray-300 opacity-50"><p>Răspunsul tau
                                este: {thisSubmission.submission_answers[index]?.selected_answer_id}</p></div>
                            <div className="w-full p-2  rounded-b-lg bg-gray-300 opacity-50"><p>Răspunsul corect
                                este: {question.correct_answer}</p></div>
                        </div>
                    ))}
                </div>
            )}


        </div>
    );
}
