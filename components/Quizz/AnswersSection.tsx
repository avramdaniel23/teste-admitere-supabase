import { Radio, RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

interface Props {
  questionAnswers: any;
}

const AnswersSection = ({ questionAnswers }: Props) => {
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <RadioGroup
      value={selectedRadio}
      onChange={setSelectedRadio}
      className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 "
    >
      {questionAnswers.map((answer: any) => {
        return <AnswerCard answer={answer} selected={selectedRadio} />;
      })}
    </RadioGroup>
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
        selected == answer ? "bg-blue-400" : "bg-blue-200"
      }  p-4 flex items-center justify-between rounded-md relative cursor-pointer hover:bg-blue-400 mb-2`}
    >
      <div className="font-bold">{answer}</div>
      {selected == answer && (
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
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )}
    </Radio>
  );
};

export default AnswersSection;
