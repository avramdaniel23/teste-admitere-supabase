"use client";
import getAllQuizzes from "@/libs/getAllQuizzes/getAllQuizzes";
import getUser from "@/libs/getUser/getUser";
import { statfs } from "fs";

export default function PStats() {
  let quizzes: any[] = getAllQuizzes();
  let user: any = getUser();

  let userQuizzes = quizzes.filter((quiz) => {
    return quiz.user_id == user.id;
  });

  //? MOCK DATA
  let statsMatematica = [77, 180];
  let statsFizica = [42, 169];
  let statsInfo = [76, 123];

  let progressMate = Math.floor((100*statsMatematica[0])/statsMatematica[1]);
  let progressFizica= Math.floor((100*statsFizica[0])/statsFizica[1]);
  let progressInfo = Math.floor((100*statsInfo[0])/statsInfo[1]);

  return (
    <div className="bg-white rounded-lg shadow-md shadow-gray-300 p-2">
      <div className="flex flex-col gap-6">
        
        {/* Stats header */}
        <div className="flex flex-col w-fit">
          <div className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
            <h1 className="text-2xl font-mono font-semibold">Statistici</h1>
          </div>
          <div className="w-[100%] h-[3px] bg-blue-400 rounded-full mb-0.5 ml-1"></div>
          <div className="w-[85%] h-[3px] bg-blue-300 rounded-full ml-1"></div>
        </div>

        {/* CATEGORIES SECTION */}
        <div className="flex flex-col gap-6 p-4">
          {/* mate */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
              </svg>
              <h1 className="font-semibold text-lg">Matematica</h1>
            </div>

            <div className="flex flex-col  gap-1">
              <div className=" flex flex-row items-center justify-between mx-auto w-full h-2 rounded-2xl bg-blue-200 lg:h-3">
                <div style={{ width: `${progressMate}%` }} className="h-2 rounded-2xl bg-blue-400 lg:h-3"></div>
              </div>
              <p className="text-sm font-light">{statsMatematica[0]} / {statsMatematica[1]}</p>
            </div>
          </div>      

          

          {/* Fizcia */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
              <h1 className="font-semibold text-lg">Fizica</h1>
            </div>

            <div className="flex flex-col  gap-1">
              <div className=" flex flex-row items-center justify-between mx-auto w-full h-2 rounded-2xl bg-blue-200 lg:h-3">
                <div style={{ width: `${progressFizica}%` }} className="h-2 rounded-2xl bg-blue-400 lg:h-3"></div>
              </div>
              <p className="text-sm font-light">{statsFizica[0]} / {statsFizica[1]}</p>
            </div>
          </div>       

          

          {/* Info */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
              <h1 className="font-semibold text-lg">Informatica</h1>
            </div>

            <div className="flex flex-col  gap-1">
              <div className=" flex flex-row items-center justify-between mx-auto w-full h-2 rounded-2xl bg-blue-200 lg:h-3">
                <div style={{ width: `${progressInfo}%` }} className="h-2 rounded-2xl bg-blue-400 lg:h-3"></div>
              </div>
              <p className="text-sm font-light">{statsInfo[0]} / {statsInfo[1]}</p>
            </div>
          </div>
        </div>               
      </div>

      {/* {userQuizzes.map((quiz: any, index: any) => {
        return (
          <div key={index}>
            {quiz.name} - {quiz.points} points
          </div>
        );
      })} */}

    </div>
  );
}
