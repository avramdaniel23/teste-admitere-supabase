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
          <div key={index} className="flex flex-col p-8 bg-white shadow-xl">
            <div className="flex mb-4">
              <p className="mr-2 font-bold text-xl lg:text-2xl">{index + 1}.</p>
              <p className="font-bold text-xl lg:text-2xl">{question.question}</p>
            </div>
            <div className="flex justify-center mb-4">
              <img src={question.images[0]}/>
            </div>
            <fieldset className="grid grid-cols-2 mr-6 items-center ">
              {question.question_answers.map((answer: any, i: any) => (
                <div key={i} className="ml-6 mb-4">
                  <div className="flex items-center">
                    <input
                      className="mr-2 w-5 h-5"
                      type="radio"
                      value={answer}
                      id={answer}
                      name={question._id}
                      onChange={handleChange}
                    />
                    <label htmlFor={answer} className="ml-2 font-bold">{answer}</label>
                  </div>
                </div>
              ))}
            </fieldset>
          </div>
        ))}
        <div className="flex flex-col p-8 bg-white shadow-xl">
          <div className="flex mb-4">
              <p className="mr-2 font-bold text-xl lg:text-2xl">6.</p>
              <p className="font-bold text-xl lg:text-2xl">{imageQuestion.question}</p>
          </div>
          <div className="flex justify-center mb-4">
            <img src={imageQuestion.images[0]}/>
          </div>
          <fieldset className="grid grid-cols-2 mr-6 items-center ">
              {imageQuestion.answer_type === "string" && imageQuestion.question_answers.map((answer: any, i: any) => (
                <div key={i} className="ml-6 mb-4">
                  <div className="flex items-center">
                    <input
                      className="mr-2 w-5 h-5"
                      type="radio"
                      value={answer}
                      id={answer}
                    />
                    <label htmlFor={answer} className="ml-2 font-bold">{answer}</label>
                  </div>
                </div>
              ))}
            </fieldset>
        </div>
        <div className="flex flex-col p-8 bg-white shadow-xl">
          <div className="flex mb-4">
              <p className="mr-2 font-bold text-xl lg:text-2xl">7.</p>
              <p className="font-bold text-xl lg:text-2xl">{imageQuestion1.question}</p>
          </div>
          <div className="flex justify-center mb-4">
            <img src={imageQuestion1.images[0]}/>
          </div>
          <fieldset className="grid grid-cols-2 mr-6 items-center ">
              {imageQuestion1.answer_type === "image" && imageQuestion1.question_answers.map((answer: any, i: any) => (
                <div key={i} className="ml-6 mb-4">
                  <div className="flex items-center">
                    <input
                      className="mr-2 w-5 h-5"
                      type="radio"
                      value={answer}
                      id={answer}
                    />
                    <p className="ml-2 mr-2 font-bold">{answer.letter}</p>
                    <img className="w-[75px] md:w-[150px] lg:w-[200px]" src={answer.url} />
                  </div>
                </div>
              ))}
            </fieldset>
        </div>
        <div className="bg-white p-4 rounded-b-2xl shadow-xl">
          <button type="submit" onClick={submitBoth} className="w-[200px] m-4 mb-[75px] py-3 mx-auto flex justify-center text-white bg-blue-600 hover:opacity-75 rounded-lg shadow-md">Trimite răspunsul</button>
        </div>
    </div>
  );
}
