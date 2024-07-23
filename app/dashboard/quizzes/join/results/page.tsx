"use client";

import { SubmitButton } from "@/app/login/submit-button";
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
        <div>
            {quizData && (
                <div className="mb-5 font-medium">
                    <div className="text-center text-[28px]">Rezultatul testului {quizData.name}</div>
                    <p className="my-4 text-center text-[20px]">Scor: {thisSubmission.score}/{thisSubmission.submission_answers.length * 10}</p>

                </div>
            )}

            {questionsData && (
                <div>
                    {questionsData.map((question, index) => (
                        <div key={index} className="mb-7 shadow-md rounded-lg">
                            <p className="p-4 text-justify text-[18px] text-white bg-red-600 rounded-t-lg">{index + 1}. {question.question}</p>
                            {thisSubmission && thisSubmission.submission_answers[index] && (
                                <div>
                                    <div key={index} className="p-4">Răspunsul tău: <span className={`${thisSubmission.submission_answers[index].is_correct == false ? "text-red-600" : "text-black"}`}>{thisSubmission.submission_answers[index].selected_answer_id}</span></div>
                                </div>
                            )}
                            <div className="w-full p-4  rounded-b-lg bg-green-300 opacity-50"><p>Răspunsul corect este: {question.correct_answer}</p></div>
                        </div>
                    ))}
                </div> 
            )}



        </div>
    );
}
