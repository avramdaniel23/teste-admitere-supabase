"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getUser from "@/libs/getUser/getUser";
import AnswersSection from "@/components/Quizz/AnswersSection";

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
  const [configuration, setConfiguration] =
    useState<Configuration>(defaultConfiguration);
  const [quizzesData, setQuizzes] = useState<any>([]);
  const [questionsData, setQuestions] = useState<any[]>([]);
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

  console.log(quizzesData);

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
            <div key={index} className="flex gap-2 items-center justify-center">
              <div className="font-semibold ">
                {quiz.name.charAt(0).toUpperCase() + quiz.name.slice(1)}
              </div>
              <div className="font-semibold">
                Materie:{" "}
                {quiz.subject.charAt(0).toUpperCase() + quiz.subject.slice(1)}
              </div>
              <div className="font-semibold">
                Capitol: {""}
                {quiz.chapter.charAt(0).toUpperCase() + quiz.chapter.slice(1)}
              </div>
            </div>
          ))}
      </div>

      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div
            key={index}
            className="border-2 rounded-lg p-4 border-slate-500 mt-4 shadow-lg"
          >
            {/* <div className=" flex items-stretch justify-start "> */}
            <span className="flex items-center justify-center border-2 p-2 rounded-full size-8 mr-2 border-gray-400 mb-2">
              <p className="">{index + 1}</p>
            </span>

            <p>{question.question}</p>
            <div className="flex items-center justify-center  mt-2 rounded-sm w-full">
              <img
                className="h-38 w-52 border-2 border-slate-400"
                src={
                  (index + 1) % 2 == 0
                    ? "https://mquest.ro/textcurriculum/9/image3.png"
                    : ""
                }
              ></img>
            </div>
            {/* </div> */}
            <AnswersSection
              questionAnswer={question.question_answers}
              name={question._id}
              onChange={handleChange}
              answerImage={
                index % 3 == 0
                  ? "https://www.math.md/school/formule/trigonom/trigonom36x.gif"
                  : ""
              }
            ></AnswersSection>
            {/* <fieldset>
              {question.question_answers.map((answer: any, i: any) => (
                <div key={i} className="flex py-[2px] text-[16px] items-center">
                  <input
                    required
                    type="radio"
                    value={answer}
                    id={answer}
                    name={question._id}
                    onChange={handleChange}
                  />
                  <label htmlFor={answer} className="ml-2">{answer}</label>
                </div>
              ))}
            </fieldset> */}
          </div>
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
