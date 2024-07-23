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
          <div className="flex flex-col items-center bg-red-600 rounded-t-2xl shadow-xl p-4" key={index}>
            <div className="text-white text-4xl font-bold">{quiz.name}</div>
            <div className="text-white text-xl font-bold uppercase">{quiz.subject}</div>
            <div className="text-white font-bold">{quiz.chapter}</div>
          </div>
        ))}
      </div>

      {filteredQuestions &&
        filteredQuestions.map((question, index) => (
          <div key={index} className="flex flex-col p-8 bg-white shadow-xl">
            <div className="flex mb-4">
              <p className="mr-2 font-bold text-xl lg:text-2xl">{index + 1}.</p>
              <p className="font-bold text-xl lg:text-2xl">{question.question}</p>
            </div>
            <fieldset>
              {question.question_answers.map((answer: any, i: any) => (
                <div key={i} className="ml-6 mb-4 flex items-center">
                  <input
                    className="mr-2 w-5 h-5"
                    type="radio"
                    value={answer}
                    id={answer}
                    name={question._id}
                    onChange={handleChange}
                  />
                  <label htmlFor={answer} className="ml-2">{answer}</label>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
      <button type="submit" onClick={submitAnswer} className="w-full md:w-[200px] m-4 mb-[75px] py-3 mx-auto flex justify-center text-white bg-blue-600 hover:opacity-75 rounded-lg shadow-md">Trimite răspunsul</button>
    </div>
  );
}
