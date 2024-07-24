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
            const response = await fetch(`/api/get/findSubmission?quizID=${quizID}&userID=${user.id}`, {
                method: "GET",
            });
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

    return (
        <div className="mb-20">
            {quizData && (
                <div className="mb-5 font-medium rounded-md shadow-grey-3 shadow-md">
                    <div className="text-center text-[28px]">Rezultatul testuloui {quizData.name}</div>
                    <p className="my-4 text-center text-[20px]">Scor: {thisSubmission.score}/{thisSubmission.submission_answers.length * 10}</p>
                </div>
            )}

            {questionsData && (
                <div className="flex flex-col gap-10">
                    {questionsData.map((question, index) => (
                        <div key={index} className="flex flex-col gap-4 p-4 shadow-grey-3 shadow-md rounded-lg">
                            <p className="p-2 text-justify">{index + 1}. {question.question}</p>
                            <div className="h-1 w-full bg-zinc-300"></div>
                            {thisSubmission && thisSubmission.submission_answers[index] && (
                                <div>
                                    <div key={index} className={`p-2 rounded-md ${thisSubmission.submission_answers[index].is_correct == false ? "bg-red-300" : "bg-green-300"}`}>Răspunsul tău: <span>{thisSubmission.submission_answers[index].selected_answer_id}</span></div>
                                </div>
                            )}
                            <div className={` ${thisSubmission.submission_answers[index].is_correct ? "" : "text-black"} bg-zinc-200 w-full p-2 rounded-lg`}><p>Răspunsul corect este: {question.correct_answer}</p></div>
                        </div>
                    ))}
                </div>
            )}



        </div>
    );
}
