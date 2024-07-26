"use client";
import getAllQuizzes from "@/libs/getAllQuizzes/getAllQuizzes";
import getUser from "@/libs/getUser/getUser";

export default function PastQuizzes() {
  let quizzes: any[] = getAllQuizzes();
  let user: any = getUser();

  let userQuizzes = quizzes.filter((quiz) => {
    return quiz.user_id == user.id;
  });

  return (
    <div className="bg-white rounded-lg shadow-md shadow-gray-300 p-2">
        
      {/* Stats header */}
      <div className="flex flex-col w-fit">
        <div className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>
          <h1 className="text-2xl font-mono font-semibold">Quizz-uri</h1>
        </div>
        <div className="w-[100%] h-[3px] bg-blue-400 rounded-full mb-0.5 ml-1"></div>
        <div className="w-[85%] h-[3px] bg-blue-300 rounded-full ml-1"></div>
      </div>

      <div className=" grid gap-4 w-full p-4 h-[220px] overflow-scroll my-8 md:grid-cols-2 lg:grid-cols-3">
        {userQuizzes.map((quiz: any, index: any) => {
          return (
            <div
              key={index}
              className="  mx-auto rounded-xl block align-middle items-center w-full"
            >
              <div className=" w-full p-8 block bg-[#66A5AD] rounded-t-lg text-white ">
                <div className=" w-full flex justify-center text-center ">
                  <h2 className="text-[30px] font-bold  uppercase">
                    {quiz.name}
                  </h2>
                </div>
              </div>
              <div className=" grid  md:grid-cols-2 rounded-b-lg text-center p-4 mt-2 bg-[#C4DFE6]">
                <div className="text-[16px] border-r border-[#66A5AD] ">
                  <b className="uppercase text-[20px] ">{quiz.subject}</b>
                </div>

                <div className=" text-[16px] ">
                  <b className="uppercase text-[20px] ">{quiz.points}</b> / 50
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
