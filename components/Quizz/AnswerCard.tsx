import { Radio } from "@headlessui/react";
interface CardProps {
  answer: string;
  selected: string;
  answerImage: string;
}

const AnswerCard = ({ answer, selected, answerImage }: CardProps) => {
  console.log(answerImage);
  return (
    <Radio
      value={answer}
      className={`${
        selected == answer
          ? "bg-blue-100 border-black"
          : "bg-white border-slate-200"
      }  p-4 flex items-center  ${
        answerImage ? "justify-around" : "justify-between"
      } shadow-md border  rounded-md relative cursor-pointer  hover:bg-blue-200 hover:border-black mb-2 transition-all duration-300 ease-in-out `}
      id={answer}
    >
      {!answerImage ? (
        <div className="font-normal">{answer}</div>
      ) : (
        <img
          src={answerImage}
          className="max-w-[60%]   lg:m-0 object-contain"
        />
      )}

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

export default AnswerCard;
