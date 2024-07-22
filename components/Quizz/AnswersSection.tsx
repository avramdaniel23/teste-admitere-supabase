import { Radio, RadioGroup } from "@headlessui/react";
import React, { useState } from "react";

interface Props {
  questionAnswers: any;
}

const AnswersSection = ({ questionAnswers }: Props) => {
  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <RadioGroup className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 ">
      {questionAnswers.map((answer: any) => {
        return <AnswerCard answer={answer} />;
      })}
    </RadioGroup>
  );
};

interface CardProps {
  answer: string;
}

const AnswerCard = ({ answer }: CardProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <Radio
      onClick={() => setIsSelected(!isSelected)}
      className="bg-blue-200 p-4 flex items-center justify-center rounded-md relative cursor-pointer hover:bg-blue-300"
    >
      <div>{answer}</div>
    </Radio>
  );
};

export default AnswersSection;
