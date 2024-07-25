import { useSelectedLayoutSegment } from "next/navigation";
import React, { useRef, useState } from "react";

interface Props {
  questionAnswer: any;
  name: string;
  onChange: Function;

  answerImage: any;
}
// const borderColors = [
//   "border-blue-400",
//   "border-purple-400",
//   "border-green-400",
//   "border-red-400",
//   "border-orange-400",
//   "border-yellow-400",
// ];

// const bgColors = [
//   "bg-blue-300",
//   "bg-purple-300",
//   "bg-green-300",
//   "bg-red-300",
//   "bg-orange-300",
//   "bg-yellow-300",
// ];

const AnswersSection = ({
  questionAnswer,
  name,
  onChange,
  answerImage,
}: Props) => {
  const [selected, setSelected] = useState("");

  return (
    <section className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-3 mb-3 mt-3 grid grid-cols-1">
      {questionAnswer.map((question: any, index: any) => (
        <AnswerCard
          selected={selected}
          setSelected={setSelected}
          answer={question}
          name={name}
          onChange={onChange}
          answerImage={answerImage}

          // borderColor={borderColors[index]}
          // bgColors={bgColors[index]}
        ></AnswerCard>
      ))}
    </section>
  );
};

interface CardProps {
  answer: string;
  // borderColor: string;
  // bgColors: string;
  selected: string;
  setSelected: Function;
  onChange: Function;
  answerImage: any;
  name: any;
}

const AnswerCard = ({
  selected,
  setSelected,
  answer,
  onChange,
  name,
  answerImage,
}: // borderColor,
// bgColors,
CardProps) => {
  return (
    <div
      onClick={() => {
        selected == answer ? setSelected("") : setSelected(answer);

        onChange(name, answer);
      }}
      className={`p-3 rounded-lg border-2 ${
        selected == answer ? "border-blue-300" : "border-gray-300"
      } shadow-lg font-semibold ${selected == answer && "bg-sky-200"} `}
    >
      {!answerImage && answer}
      {answerImage && (
        <div
          className={`flex items-center justify-center border-2 mt-2 rounded-sm border-slate-400 size-72`}
        >
          <img src={answerImage}></img>
        </div>
      )}
    </div>
  );
};
export default AnswersSection;
