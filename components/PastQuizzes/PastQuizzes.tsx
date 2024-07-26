"use client";
import getAllQuizzes from "@/libs/getAllQuizzes/getAllQuizzes";
import getUser from "@/libs/getUser/getUser";

export default function PastQuizzes() {
  let quizzes: any[] = getAllQuizzes();
  let user: any = getUser();

  let userQuizzes = quizzes.filter((quiz) => quiz.user_id == user.id)

  return (
    <div className=" grid md:grid-cols-2 gap-8 w-full max-h-[500px] overflow-y-scroll border-2 p-2 rounded-lg ">
      {userQuizzes.map((quiz: any, index: any) => {
        return (
          <div
            key={index}
            className="rounded-xl align-middle items-center w-full"
          >
            <div className="p-4  bg-[#66A5AD] rounded-t-lg text-white ">
              <div className="flex justify-center text-center ">
                <h2 className="text-[30px] font-bold  uppercase text-nowrap">
                  {quiz.name}
                </h2>
              </div>
            </div>
            <div className=" grid  md:grid-cols-2 rounded-b-lg text-center p-2  bg-[#C4DFE6]">
              <div className="text-[16px] no ">
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
  );
}
