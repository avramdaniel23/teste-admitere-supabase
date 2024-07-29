import Link from "next/link";
import React from "react";

interface Props {
  quiz: any;
  color: "blue" | "red" | "green" | "yellow"; // Explicit color type
}

let quizName: any;
let questionsL: any;
const QuizCard = ({ quiz, color }: Props) => {
  const colorVariants = {
    blue: `bg-blue-500`,
    red: `bg-red-500`,
    green: `bg-green-500`,
    yellow: `bg-yellow-500`,
  };

  const shadowVariants = {
    blue: `dark:shadow-blue-500`,
    red: `dark:shadow-red-500`,
    green: `dark:shadow-green-500`,
    yellow: `dark:shadow-yellow-500`,
  };

  const lgColorVariants = {
    blue: `lg:bg-blue-500`,
    red: `lg:bg-red-500`,
    green: `lg:bg-green-500`,
    yellow: `lg:bg-yellow-500`,
  };

  if (quiz.name) {
    quizName = quiz.name.slice(0, 15);
    questionsL = quiz.questions.length;
  }

  return (
    <Link
      href="#"
      className={`flex flex-col w-[100%]  items-center rounded-lg border-2 shadow-xl hover:scale-105 lg:pb-2 trasnsition-all duration-300 dark:bg-slate-900 dark:border-0 ${shadowVariants[color]} dark:shadow-md `}
    >
      <div className="flex flex-row w-full items-center h-full  lg:flex-col-reverse  ">
        <div className="hidden lg:flex text-lg text-slate-600  lg:flex-row w-full justify-center px-4 dark:text-white ">
          <p className="capitalize border-r-[1px] border-gray-300 mr-4 pr-4 ">
            {quiz.subject}{" "}
          </p>
          <p className="capitalize border-r-[1px] border-gray-300 mr-4 pr-4 ">
            {quiz.chapter}
          </p>
          <p className="capitalize"> {questionsL} întrebări</p>
        </div>
        <div
          className={`text-white p-5 ${colorVariants[color]} rounded-l-md h-full flex items-center justify-center lg:rounded-full lg:relative lg:bottom-8 lg:shadow-xl lg:bg-white lg:text-black z-10 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
            />
          </svg>
        </div>
        <div className="flex px-4   lg:p-0 flex-col items-start justify-start lg:justify-center lg:items-center lg:w-full">
          <div
            className={`text-lg font-semibold ${lgColorVariants[color]} lg:w-full lg:p-10 lg:rounded-md
             justify-center flex lg:text-white lg:text-2xl lg:relative `}
          >
            <h1 className=" bottom-3 w-full text-left uppercase  flex lg:hidden ">
              {quizName}
            </h1>
            <h1 className="hidden lg:flex bottom-3 w-full justify-center truncate ">
              {quiz.name}
            </h1>
          </div>
          <div className="flex">
            <p className="text-md text-slate-600 lg:hidden border-r-[1px] border-gray-300 mr-4 pr-4 ">
              {quiz.subject}
            </p>
            <p className="text-md text-slate-600 lg:hidden  ">{quiz.chapter}</p>
            {/* <p className="text-lg text-slate-600 lg:hidden ">
              {questionsL} întrebări
            </p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
