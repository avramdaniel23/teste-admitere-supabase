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

  return (
    <div
      className={`${
        selectedRadio ? "bg-white " : ""
      } p-4 py-8 rounded-xl  font-bold transition-all duration-200 ease-linear text-md lg:text-lg  relative`}
    >
      {/* <p className="p-4">
        {index}. {question.question}
      </p> */}

      {/* {questionImage && (
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
      )} */}

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
    </div>
  );
};

export default QuestionCard;
