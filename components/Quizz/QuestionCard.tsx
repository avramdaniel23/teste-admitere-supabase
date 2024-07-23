import { Radio, RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

interface Props {
  question: any;
  index: number;
}

const QuestionCard = ({ question, index }: Props) => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isFlagged, setIsFlagged] = useState<boolean>(false);

  return (
    <div
      className={`${
        selectedRadio ? "bg-white border-black" : "bg-[#DBD7D1]"
      } p-4 py-8  shadow-lg rounded-xl mt-8 border font-bold transition-all duration-200 ease-linear text-md lg:text-lg  relative`}
    >
      <p className="p-4">
        {index}. {question.question}
      </p>
      {/* <div
        onClick={() => {
          setIsFlagged(!isFlagged);
        }}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${isFlagged ? "fill-red-500" : "fill-none"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>
      </div> */}

      <RadioGroup
        value={selectedRadio}
        onChange={setSelectedRadio}
        className="w-full grid grid-cols-1 gap-2 lg:grid-cols-2  lg:gap-4 "
      >
        {question.question_answers.map((answer: any, index: number) => {
          return (
            <AnswerCard answer={answer} selected={selectedRadio} key={index} />
          );
        })}
      </RadioGroup>
      <div
        onClick={() => {
          setIsFlagged(!isFlagged);
        }}
        className="absolute top-4 right-4 flex cursor-pointer transition-all duration-300 ease-linear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${isFlagged ? "fill-red-500" : "fill-none"} `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
          />
        </svg>
      </div>
    </div>
  );
};

interface CardProps {
  answer: string;
  selected: string;
}

const AnswerCard = ({ answer, selected }: CardProps) => {
  return (
    <Radio
      value={answer}
      className={`${
        selected == answer
          ? "bg-blue-300 border-black"
          : "bg-white border-slate-200"
      }  p-4 flex items-center  justify-between shadow-md border  rounded-md relative cursor-pointer  hover:bg-blue-300 hover:border-black mb-2 transition-all duration-300 ease-in-out `}
      id={answer}
    >
      <div className="font-normal">{answer}</div>
      {selected == answer ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={`M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`}
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={`M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`}
          />
        </svg>
      )}
    </Radio>
  );
};

export default QuestionCard;
