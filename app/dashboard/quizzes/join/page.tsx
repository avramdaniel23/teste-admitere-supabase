"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getUser from "@/libs/getUser/getUser";
import QuizQuestionCard from "@/components/Cards/QuizQuestionCard";

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
  score: number;
  submission_answers: SubmissionAnswer[];
}

interface LeaderboardConfig {
  _id: any;
  user_id: any;
  user_firstName: any;
  user_lastName: any;
  subject: string | null;
  chapter: string | null;
  total_score: number;
  total_quizzes: number;
}

const defaultConfiguration: Configuration = {
  _id: null,
  quiz_id: null,
  user_id: null,
  user_firstName: null,
  user_lastName: null,
  score: 0,
  submission_answers: [],
};

const defLeaderboardConfig: LeaderboardConfig = {
  _id: null,
  user_id: null,
  user_firstName: null,
  user_lastName: null,
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

      console.log(`Question ${name} set to ${value}`)

      return {
        ...prevConfig,
        quiz_id: quizID,
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

  const submitLeaderboard = async (event: any) => {
    event.preventDefault();

    try {
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
      console.error("Failed to submit leaderboard data", error);
    }
  };

  return (
    <div>
      <div className="mb-5 font-medium">{quizzesData &&
        quizzesData.length > 0 &&
        quizzesData.map((quiz: any, index: any) => (
          <div key={index}>
            <div className="text-center text-[28px]">{quiz.name}</div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:mr-5 text-[18px] text-gray-700 capitalize">Materie: {quiz.subject}</div>
              <div className="text-[18px] text-gray-700 capitalize">Capitol: {quiz.chapter}</div>
            </div>

          </div>
        ))}
      </div>

      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
            <QuizQuestionCard index={index} question={question} answers={question.question_answers} onAnswer={handleChange}></QuizQuestionCard>
        ))}
        <button
        type="submit"
        onClick={submitLeaderboard}
        className="w-full md:w-[200px] m-4 mb-[75px] py-3 mx-auto flex justify-center text-white bg-blue-600 hover:opacity-75 rounded-lg shadow-md"
      >
        Trimite răspunsul
      </button>
    </div>
  );
}
