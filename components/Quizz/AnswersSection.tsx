import React, { useState } from "react";

interface Props {
  questionAnswer: any;
}
const borderColors = [
  "border-blue-400",
  "border-purple-400",
  "border-green-400",
  "border-red-400",
  "border-orange-400",
  "border-yellow-400",
];

const bgColors = [
  "bg-blue-300",
  "bg-purple-300",
  "bg-green-300",
  "bg-red-300",
  "bg-orange-300",
  "bg-yellow-300",
];

const AnswersSection = ({ questionAnswer }: Props) => {
  const [selected, setSelected] = useState("");
  return (
    <section className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-3 mb-3 mt-3 grid grid-cols-1">
      {questionAnswer.map((question: any, index: any) => (
        <AnswerCard
          selected={selected}
          setSelected={setSelected}
          answer={question}
          borderColor={borderColors[index]}
          bgColors={bgColors[index]}
        ></AnswerCard>
      ))}
    </section>
  );
};

interface CardProps {
  answer: string;
  borderColor: string;
  bgColors: string;
  selected: string;
  setSelected: Function;
}

const AnswerCard = ({
  selected,
  setSelected,
  answer,
  borderColor,
  bgColors,
}: CardProps) => {
  return (
    <div
      onClick={() => {
        selected == answer ? setSelected("") : setSelected(answer);
      }}
      className={`${borderColor} p-3 rounded-lg border-2 shadow-lg font-semibold ${
        selected == answer && bgColors
      } `}
    >
      {answer}
    </div>
  );
};
export default AnswersSection;
