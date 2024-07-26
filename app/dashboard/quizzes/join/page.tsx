"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import getUser from "@/libs/getUser/getUser";
import QuizLoader from "@/components/Loaders/QuizLoader";

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

interface LeaderboardConfig {
  _id: any;
  user_id: any;
  subject: string | null;
  chapter: string | null;
  total_score: number;
  total_quizzes: number;
}

const defaultConfiguration: Configuration = {
  _id: null,
  quiz_id: null,
  user_id: null,
  score: 0,
  submission_answers: [],
};

const defLeaderboardConfig: LeaderboardConfig = {
  _id: null,
  user_id: null,
  subject: null,
  chapter: null,
  total_score: 0,
  total_quizzes: 0,
};

export default function QuizzesJoin() {
  const [configuration, setConfiguration] =
    useState<Configuration>(defaultConfiguration);
  const [leaderboardConfig, setLeaderboardConfig] =
    useState<LeaderboardConfig>(defLeaderboardConfig);
  const [quizzesData, setQuizzes] = useState<any>([]);
  const [questionsData, setQuestions] = useState<any[]>([]);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(true);
  const searchParams = useSearchParams();
  const quizID = searchParams.get("quizID");
  const router = useRouter();
  const subject = quizzesData[0]?.subject;
  const chapter = quizzesData[0]?.chapter;

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
        setIsLoadingQuiz(true);
        const quiz = await fetchQuizData();
        setQuizzes([quiz]); // Ensure the quiz data is set correctly
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      } finally {
        setIsLoadingQuiz(false);
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
      quizzesData[0].questions.filter((q: any) => q._id === question._id),
    );
  }
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    // Find the current question based on the _id
    const currentQuestion = filteredQuestions.find(q => q._id === name);

    // Check if the selected answer is correct
    const is_correct =
      currentQuestion && value === currentQuestion.correct_answer;

    // Update configuration state
    setConfiguration(prevConfig => {
      const newSubmissionAnswer = {
        question_id: name,
        selected_answer_id: value,
        is_correct,
      };

      const updatedSubmissionAnswers = [
        ...prevConfig.submission_answers.filter(
          answer => answer.question_id !== name,
        ),
        newSubmissionAnswer,
      ];

      return {
        ...prevConfig,
        quiz_id: quizID,
        user_id: user.id,
        subject: subject,
        chapter: chapter,
        submission_answers: updatedSubmissionAnswers,
        score: is_correct ? prevConfig.score + 10 : prevConfig.score,
      };
    });
  };

  const submitBoth = async (event: any) => {
    event.preventDefault();

    try {
      // Submit answers first
      const answerResponse = await fetch("/api/post/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(configuration),
      });

      if (!answerResponse.ok) {
        throw new Error("Failed to submit answers");
      }

      // Prepare leaderboard data
      const leaderboardData = {
        user_id: user.id,
        subject: subject,
        chapter: chapter,
        total_score: configuration.score,
        total_quizzes: 1,
      };

      // If answer submission is successful, update the leaderboard
      const leaderboardResponse = await fetch("/api/post/leaderboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leaderboardData),
      });

      if (!leaderboardResponse.ok) {
        throw new Error("Failed to update leaderboard");
      }

      // If both are successful, navigate to the results page
      router.push(
        `/dashboard/quizzes/join/results?quizID=${quizID}}&userID=${user.id}`,
      );
    } catch (error) {
      console.error("Failed to submit answers");
    }
  };

  console.log(quizzesData);
  return (
    <>
      {isLoadingQuiz ? (
        <QuizLoader />
      ) : (
        <>
          <div className="mb-5 font-medium">
            {quizzesData &&
              quizzesData.length > 0 &&
              quizzesData.map((quiz: any, index: any) => (
                <div key={index}>
                  <div className="mb-5 text-center text-[28px]">
                    {quiz.name}
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="text-[18px] text-gray-700 lg:mr-5">
                      Materie: {quiz.subject}
                    </div>
                    <div className="text-[18px] text-gray-700">
                      Capitol: {quiz.chapter}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {filteredQuestions &&
            filteredQuestions.map((question, index) => (
              <div key={index} className="mb-8 rounded-lg shadow-md">
                <div className="rounded-t-lg bg-blue-600 p-3 leading-5">
                  <p className="px-2 text-justify text-[18px] text-white">
                    {question.question}
                  </p>
                  {question.image ? (
                    <div className="h-[auto mx-auto mt-2 flex w-[70%] rounded-lg bg-pink-300 md:w-[45%] lg:w-[500px]"></div>
                  ) : (
                    <div className="hidden"></div>
                  )}
                </div>
                <fieldset
                  className={`p-2 ${
                    question.answer_type == "string"
                      ? "grid grid-cols-1 gap-3 p-5 lg:grid-cols-2"
                      : "block"
                  } `}
                >
                  {question.question_answers.map((answer: any, i: any) => (
                    <label
                      htmlFor={answer}
                      key={i}
                      className="flex w-full cursor-pointer items-center rounded-xl border-2 border-gray-200 bg-white transition-colors has-[:checked]:border-blue-400 has-[:checked]:bg-blue-100"
                    >
                      <span className="ml-5 w-full cursor-pointer py-4">
                        {answer}
                      </span>
                      <input
                        required
                        type="radio"
                        value={answer}
                        id={answer}
                        name={question._id}
                        onChange={handleChange}
                        className="mr-5 box-content size-2 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-300 transition-colors checked:border-blue-500 checked:ring-blue-500"
                      />
                    </label>
                  ))}
                </fieldset>
              </div>
            ))}
          <button
            type="submit"
            onClick={submitBoth}
            className="m-4 mx-auto mb-[75px] flex w-full justify-center rounded-lg bg-blue-600 py-3 text-white shadow-md hover:opacity-75 md:w-[200px]"
          >
            Trimite răspunsul
          </button>
        </>
      )}
    </>
  );
}
