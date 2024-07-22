"use client";
import { useRouter, useSearchParams } from "next/navigation";
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

export default function QuizzesJoin() {
  const [configuration, setConfiguration] = useState<Configuration>(defaultConfiguration);
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

  console.log(quizzesData)
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
          <div key={index} className="mb-5 shadow-md rounded-lg">
            <div className="py-2 bg-blue-600 rounded-t-lg"><p className="px-2 text-justify text-[18px] text-white ">{question.question}</p>
              {!question.image ?
                <div className="w-[70%] h-[auto md:w-[45%] lg:w-[500px] flex mx-auto mt-2 bg-pink-300 rounded-lg">
                </div> : <div className="hidden"></div>}</div>
            <fieldset className={`p-2 ${question.answer_type
              == "string" ? "grid grid-cols-2 md:grid-cols-3" : "block"} `}>
              {question.question_answers.map((answer: any, i: any) => (
                <div key={i} className="flex py-[2px] text-[16px] items-center">
                  <input
                    required
                      className={"p-4"}
                    type="radio"
                    value={answer}
                    id={answer}
                    name={question._id}
                    onChange={handleChange}
                  />
                  <label className={"p-4 m-4"} htmlFor={answer}>{answer}</label>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
      <button type="submit" onClick={submitAnswer} className="w-full md:w-[200px] m-4 mb-[75px] py-3 mx-auto flex justify-center text-white bg-blue-600 hover:opacity-75 rounded-lg shadow-md">Trimite răspunsul</button>
    </div>
  );
}
