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
    <div className="text-[20px]">
      <div className="py-3 border-b-2 w-fit border-[#66A5AD] font-semibold flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-7 rounded-full w-10  border-2 border-[#66A5AD] shadow-md"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
          />
        </svg>
        Teste rezolvate:
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full my-8 px-5 py-5 h-60 overflow-scroll border-2 border-[#56969e] rounded-lg">
        {userQuizzes.map((quiz: any, index: any) => {
          return (
            <div
              key={index}
              className="  mx-auto rounded-xl block align-middle items-center w-full  "
            >
              <div className=" w-full p-8 block bg-[#66A5AD] rounded-t-lg text-white ">
                <div className=" w-full flex justify-center text-center ">
                  <h2 className="text-[30px] font-bold  uppercase">
                    {quiz.name}
                  </h2>
                </div>
              </div>
              <div className=" grid  md:grid-cols-2 rounded-b-lg text-center p-4 mt-2 bg-[#C4DFE6]">
                <div className="text-[16px] md:border-r border-b md:border-b-0 border-[#66A5AD] ">
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
