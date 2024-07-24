"use client";
import QuestionCard from "@/components/Quizz/QuestionCard";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getUser from "@/libs/getUser/getUser";

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
  const [configuration, setConfiguration] =
    useState<Configuration>(defaultConfiguration);
  const [quizzesData, setQuizzes] = useState<any>([]);
  const [questionsData, setQuestions] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const quizID = searchParams.get("quizID");
  const router = useRouter();

  let user = getUser();
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
        console.log(questionsData);
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

      console.log(newSubmissionAnswer);

      const updatedSubmissionAnswers = [
        ...prevConfig.submission_answers.filter(
          (answer) => answer.question_id !== name
        ),
        newSubmissionAnswer,
      ];
      // console.log(updatedSubmissionAnswers);

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
      console.error("Failed to submit answers");
    }
  };

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

      console.log(newSubmissionAnswer);

      const updatedSubmissionAnswers = [
        ...prevConfig.submission_answers.filter(
          (answer) => answer.question_id !== name
        ),
        newSubmissionAnswer,
      ];
      // console.log(updatedSubmissionAnswers);

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
      console.error("Failed to submit answers");
    }
  };

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

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
      console.error("Failed to submit answers");
    }
  };

  console.log(quizzesData);
  return (
    <div>
      <div className="mb-5 font-medium">
        {quizzesData &&
          quizzesData.length > 0 &&
          quizzesData.map((quiz: any, index: any) => (
            <div key={index}>
              <div className=" rounded-lg p-2 px-4 flex justify-center items-center">
                <h1 className=" text-lg font-bold">
                  {quiz.name.charAt(0).toUpperCase() + quiz.name.slice(1)}
                </h1>
              </div>
              <div>
                <div>
                  Materie:{" "}
                  {quiz.subject.charAt(0).toUpperCase() + quiz.subject.slice(1)}
                </div>
                <div>
                  Capitol:{" "}
                  {quiz.chapter.charAt(0).toUpperCase() + quiz.chapter.slice(1)}
                </div>
              </div>
            </div>
          ))}
      </div>

      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
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
                ? "https://i.pinimg.com/564x/31/8d/5a/318d5ad2c866f6c4998b986f248567c1.jpg"
                : ""
            }
          />
        ))}
      <button
        type="submit"
        onClick={submitAnswer}
        className="w-full md:w-[200px] m-4 mb-[75px] py-3 mx-auto flex justify-center text-white bg-blue-600 hover:opacity-75 rounded-lg shadow-md"
      >
        Trimite răspunsul
      </button>
    </div>
  );
}
