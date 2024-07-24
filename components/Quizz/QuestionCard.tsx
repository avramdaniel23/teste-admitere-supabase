import { Radio, RadioGroup } from "@headlessui/react";
import React, { useRef, useState } from "react";
import AnswerCard from "./AnswerCard";

interface Props {
  question: any;
  index: number;
  name: any;
  onChange: Function;
  questionImage: any;
  anwserImage: any;
}

const QuestionCard = ({
  question,
  index,
  name,
  onChange,
  questionImage,
  anwserImage,
}: Props) => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const userAnswer = useRef("");
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
      <div
        className={`w-full items-center justify-center flex ${
          questionImage && "p-4 mb-6"
        }`}
      >
        <img
          className="  lg:max-w-[50%] object-fit border-2 shadow-md"
          src={questionImage}
        />
      </div>

      <RadioGroup
        value={selectedRadio}
        onChange={(e) => {
          setSelectedRadio(e);
          userAnswer.current = e;
          onChange(name, userAnswer.current);
        }}
        className="w-full grid grid-cols-1 gap-2 lg:grid-cols-2  lg:gap-4 "
      >
        {question.question_answers.map((answer: any, index: number) => {
          return (
            <AnswerCard
              answer={answer}
              selected={selectedRadio}
              key={index}
              answerImage={anwserImage}
            />
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

export default QuestionCard;
