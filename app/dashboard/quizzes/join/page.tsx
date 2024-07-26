"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getUser from "@/libs/getUser/getUser";
import QuestionCard from "@/components/QuizzComponents/QuestionCard";

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
  user_firstName: any;
  user_lastName: any;
  quizName: any;
  score: number;
  submission_answers: SubmissionAnswer[];
}

export default function QuizzesJoin() {
  const [isFlagged, setIsFlagged] = useState<boolean>(false);

  const [quizzesData, setQuizzes] = useState<any>([]);
  const [questionsData, setQuestions] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const quizID = searchParams.get("quizID");
  const router = useRouter();
  const subject = quizzesData[0]?.subject;
  const chapter = quizzesData[0]?.chapter;

  const user = getUser();

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

  const defaultConfiguration: Configuration = {
    _id: null,
    quiz_id: null,
    user_id: null,
    user_firstName: null,
    user_lastName: null,
    quizName: null,
    score: 0,
    submission_answers: [],
  };
  const [configuration, setConfiguration] =
    useState<Configuration>(defaultConfiguration);

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

  const handleChange = (name: any, value: any) => {
    // Find the current question based on the _id
    const currentQuestion = filteredQuestions.find((q) => q._id === name);

    // Check if the selected answer is correct
    const is_correct =
      currentQuestion && value === currentQuestion.correct_answer;

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
        quizName: quizzesData[0].name,
        user_id: user.id,
        user_firstName: user.user_metadata.firstName,
        user_lastName: user.user_metadata.lastName,
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
        user_firstName: user.user_metadata.firstName,
        user_lastName: user.user_metadata.lastName,
        subject: subject,
        chapter: chapter,
        total_score: configuration.score,
        total_quizzes: 1,
      };

      // Update the leaderboard
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

      // Navigate to the results page
      router.push(
        `/dashboard/quizzes/join/results?quizID=${quizID}&userID=${user.id}`
      );
    } catch (error) {
      console.error("Failed to submit answers");
    }
  };

  const imageQuestion = {
    answer_type: "string",
    question: "Menta-1,3,8-triena (A), p-cimenul (B) și timolul (C) sunt arome naturale. Atomi de carbon primari, secundari, terțiari și cuaternari se găsesc în:",
    images: ["https://i.postimg.cc/wM4qxJ2j/Screenshot-2024-07-23-183843.png"],
    question_answers: [
      "A) A",
      "B) B",
      "C) A si B",
      "D) A, B si C",
      "E) C",
      "F) B si C"
    ],
    correct_answer: "A) A"
  }

  const imageQuestion1 = {
    answer_type: "image",
    question: "Indicaţi formula corectă: ",
    images: [],
    question_answers: [
      {
        letter: "A) ",
        url: "https://i.postimg.cc/wMrZbQcj/Screenshot-24-7-2024-12621.jpg"
      },
      {
        letter: "B) ",
        url: "https://i.postimg.cc/Vv2ZFLmS/Screenshot-24-7-2024-12649.jpg"
      },
      {
        letter: "C) ",
        url: "https://i.postimg.cc/zvpnttfs/Screenshot-2024-07-24-133037.png"
      }
    ],
    correct_answer: "C) "
  }
 

  console.log(quizzesData)
  return (
    <div>
      <div className="font-medium">{quizzesData &&
        quizzesData.length > 0 &&
        quizzesData.map((quiz: any, index: any) => (
          <div className="flex flex-col items-center bg-blue-600 rounded-t-2xl shadow-xl p-4" key={index}>
            <div className="text-white text-4xl font-bold">{quiz.name}</div>
            <div className="text-white text-xl font-bold uppercase">{quiz.subject}</div>
            <div className="text-white font-bold">{quiz.chapter}</div>
          </div>
        ))}
      </div>

      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div
            key={index}
            className="border-2 rounded-lg p-4 border-slate-500 mt-4 shadow-lg"
          >
            <div className="py-2  rounded-t-lg">
              <div className=" flex justify-between pb-2 items-center ">
                <span className="flex items-center justify-center border-2 p-2 rounded-full size-8 ml-1 mr-2 border-gray-400 mb-2">
                  <p className="">{index + 1}</p>
                </span>
                <div
                  onClick={() => {
                    setIsFlagged(!isFlagged);
                  }}
                  className=" top-4 right-4 flex cursor-pointer transition-all duration-300 ease-linear"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    //   fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-6 ${
                      isFlagged ? "fill-red-500" : "fill-none"
                    } `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                </div>
              </div>

              <p className="px-2 text-justify text-[18px]  ">
                {question.question}
              </p>
            </div>
            <QuestionCard
              question={question}
              key={index}
              index={index + 1}
              name={question._id}
              onChange={handleChange}
              questionImage={
                (index + 1) % 2 == 0
                  ? "https://i.pinimg.com/564x/60/83/70/6083706875765e2f3d449a30238143bc.jpg"
                  : ""
              }
              anwserImage={
                index % 3 == 0
                  ? "https://i.pinimg.com/564x/1b/63/bf/1b63bfdeb6eac905c42442cf67c0f7f0.jpg"
                  : ""
              }
            />
          </div>
        ))}
      <button
        type="submit"
        onClick={submitBoth}
        className="w-full md:w-[200px] m-4 mb-[75px] py-3 mx-auto flex justify-center text-white bg-blue-600 hover:opacity-75 rounded-lg shadow-md"
      >
        Trimite răspunsul
      </button>
    </div>
  );
}
