"use client";

import { useState } from "react";

export default function ShareQuizzButton({ slug }: any) {
  const [copied, setCopied] = useState(false);
  const [copyValue, setCopyValue] = useState(
    `http://localhost:3000/dashboard/quizzes/join?quizID=${slug}`
  );

  function copyText(content: any) {
    navigator.clipboard.writeText(content);
    setCopied(true);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCopyValue(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col">
        <span className="text-[0.75rem]">
          Copiază link-ul pentru a distribui quizz-ul:
        </span>
        <span className="mt-2 flex w-full flex-row items-center justify-between overflow-hidden rounded-[0.5rem] bg-[#f2f6f7] px-4 py-2 dark:bg-grey-4">
          <input
            type="text"
            className="w-[85%] text-ellipsis whitespace-nowrap bg-inherit text-[0.875rem] transition-all duration-300 ease-in-out text-dark"
            value={copyValue}
            onChange={handleInputChange}
          />
          {copied ? (
            <span className="text-[0.875rem] font-[500] text-secondary-green">
              Copiat!
            </span>
          ) : (
            <svg
              className="cursor-pointer"
              onClick={() => copyText(copyValue)}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.3996 6.6001H8.19961C7.31595 6.6001 6.59961 7.31644 6.59961 8.2001V15.4001C6.59961 16.2838 7.31595 17.0001 8.19961 17.0001H15.3996C16.2833 17.0001 16.9996 16.2838 16.9996 15.4001V8.2001C16.9996 7.31644 16.2833 6.6001 15.3996 6.6001Z"
                stroke="#1A1B1B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.4 11.4H2.6C2.17565 11.4 1.76869 11.2314 1.46863 10.9314C1.16857 10.6313 1 10.2243 1 9.8V2.6C1 2.17565 1.16857 1.76869 1.46863 1.46863C1.76869 1.16857 2.17565 1 2.6 1H9.8C10.2243 1 10.6313 1.16857 10.9314 1.46863C11.2314 1.76869 11.4 2.17565 11.4 2.6V3.4"
                stroke="#1A1B1B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </div>
    </>
  );
}
