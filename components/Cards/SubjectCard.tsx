import Link from "next/link";
import React from "react";

interface Props {
  subject: string;
  numberOfTests?: number; // Optional number of tests
  color: "blue" | "red" | "green" | "yellow"; // Explicit color type
  icon: JSX.Element;
}

const SubjectCard = ({ subject, numberOfTests, color, icon }: Props) => {
  const colorVariants = {
    blue: `bg-blue-500`,
    red: `bg-red-500`,
    green: `bg-green-500`,
    yellow: `bg-yellow-500`,
  };

  const lgColorVariants = {
    blue: `lg:bg-blue-500`,
    red: `lg:bg-red-500`,
    green: `lg:bg-green-500`,
    yellow: `lg:bg-yellow-500`,
  };

  return (
    <Link
      href="#"
      className=" flex flex-col w-full items-center rounded-lg border-2 shadow-xl hover:scale-105 lg:pb-2 trasnsition-all duration-300"
    >
      <div className="flex flex-row w-full items-center h-full  lg:flex-col-reverse  ">
        <div className="hidden lg:flex text-lg text-slate-600  lg:flex-row w-full justify-between px-4">
          <p>{numberOfTests} teste</p>
          <p>Ai terminat 10 teste</p>
        </div>
        <div
          className={`text-white p-5 ${colorVariants[color]} rounded-l-md h-full flex items-center justify-center lg:rounded-full lg:relative lg:bottom-8 lg:shadow-xl lg:bg-white lg:text-black z-10 `}
        >
          {React.cloneElement(icon, { color: "currentcolor" })}
        </div>
        <div className="flex p-4  lg:p-0 flex-col items-start justify-start lg:justify-center lg:items-center lg:w-full">
          <div
            className={`text-lg font-semibold ${lgColorVariants[color]} lg:w-full lg:p-10 lg:rounded-md
             justify-center flex lg:text-white lg:text-2xl lg:relative `}
          >
            <h1 className="lg:relative bottom-3"> {subject}</h1>
          </div>
          <p className="text-lg text-slate-600 lg:hidden ">
            {numberOfTests} teste
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
