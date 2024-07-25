"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getUser from "@/libs/getUser/getUser";

import QuizzTimer from "@/components/Diverse/QuizzTimer";

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

interface SubmissionAnswer {
  question_id: any;
  selected_answer_id: any;
  is_correct: boolean;
}

interface Configuration {
  _id: any;
  quiz_id: any;
  user_id: any;
  score: number;
  submission_answers: SubmissionAnswer[];
}

const defaultConfiguration: Configuration = {
  _id: null,
  quiz_id: null,
  user_id: null,
  score: 0,
  submission_answers: [],
};

export default function QuizzesJoin() {
  const [configuration, setConfiguration] = useState<Configuration>(defaultConfiguration);
  const [quizzesData, setQuizzes] = useState<any>([]);
  const [questionsData, setQuestions] = useState<any[]>([]);
  const [timerOn, setTimerOn] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const searchParams = useSearchParams();
  const quizID = searchParams.get("quizID");
  const router = useRouter();

  let user = getUser();

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

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    // Find the current question based on the _id
    const currentQuestion = filteredQuestions.find(q => q._id === name);

    // Check if the selected answer is correct
    const is_correct = currentQuestion && value === currentQuestion.correct_answer;

    // Update configuration state
    setConfiguration((prevConfig) => {
      const newSubmissionAnswer = {
        question_id: name,
        selected_answer_id: value,
        is_correct,
      };

      const updatedSubmissionAnswers = [
        ...prevConfig.submission_answers.filter(
          (answer) => answer.question_id !== name
        ),
        newSubmissionAnswer,
      ];

      return {
        ...prevConfig,
        quiz_id: quizID,
        user_id: user.id,
        submission_answers: updatedSubmissionAnswers,
        score: is_correct ? prevConfig.score + 10 : prevConfig.score,
      };
    });
  };

  const submitAnswer = async (event: any) => {
    event.preventDefault();

    const response = await fetch("/api/post/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(configuration),
    });

    if (response.ok) {
      router.push(`/dashboard/quizzes/join/results?quizID=${quizID}`);
    } else {
      console.error('Failed to submit answers')
    }
  };

  const startTimer = () => {
    setTimerOn((prevTimerState) => !prevTimerState);
  };

  const displayTimer = () => {
    setShowTimer((prevTimerState) => !prevTimerState);
  }

  return (
    <div className="relative flex flex-col gap-10 lg:p-6 lg:gap-16 ">
      <div className="bg-white rounded-md">
      {quizzesData &&
        quizzesData.length > 0 &&
        quizzesData.map((quiz: any, index: any) => (
          <div className="flex flex-col gap-2 rounded-md shadow-grey-3 shadow-md px-8 py-2 uppercase" key={index}>
            <div className="text-4xl font-medium lg:text-6xl">{quiz.name}</div>
            {/* <div className="w-full h-1 bg-blue-400 rounded-full"></div> */}
            <div className="flex items-center text-sm gap-1 lg:text-xl">
              <div>{quiz.subject}</div> <div className="bg-blue-400 w-3 h-3 rounded-full"></div> <div>{quiz.chapter}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* <div className="bg-blue-400 rounded-full w-fit p-2">
        <svg className="size-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>


      <div className="sticky top-4 flex w-fit mx-auto p-2 gap-4 items-center justify-around rounded-lg bg-blue-400 lg:mx-0 lg:ml-auto lg:mr-8">
        <QuizzTimer timerOn={timerOn} />
        <div className="w-0.5 h-9 bg-white rounded-full"></div>
        <div onClick={startTimer} className="flex items-center bg-white p-1 rounded-md cursor-pointer">
          <svg className={`${timerOn ? "hidden" : "size-7 block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          <svg className={`${timerOn ? "size-7 block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
          </svg>
        </div>
      </div> */}

      <div className="flex flex-col gap-10 lg:gap-16">
      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div className="flex flex-col gap-6 bg-white p-4 rounded-xl shadow-grey-4 shadow-md lg:gap-8 lg:p-8" key={index}>
            <div className=""><p className="px-2 text-justify lg:text-lg">{question.question}</p>
              {!question.image ?
                <div className="w-[70%] h-[auto md:w-[45%] lg:w-[500px] flex mx-auto mt-2 bg-pink-300 rounded-lg">
                </div> : <div className="hidden"></div>
              }
            </div>
            <div className="h-0.5 w-full bg-zinc-300 rounded-full"></div>
            <fieldset className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8">
              {question.question_answers.map((answer: any, i: any) => (
                <div className="flex items-center gap-1 bg-zinc-200 rounded-md hover:bg-blue-400 duration-100" key={i}>
                  <label className="px-4 flex gap-2 items-center w-full h-12" htmlFor={answer}>
                    <input
                      required
                      type="radio"
                      value={answer}
                      id={answer}
                      name={`question-${question._id}`}
                      className="w-4 h-4 lg:w-5 lg:h-5"
                    />
                    <p className="">{answer}</p>
                  </label>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
      <button type="submit" onClick={submitAnswer} className="w-full md:w-[200px] m-4 mb-[75px] py-3 mx-auto flex justify-center text-white bg-blue-400 hover:opacity-75 rounded-lg shadow-md">Trimite răspunsul</button>
      </div>

    </div>
  );
}
