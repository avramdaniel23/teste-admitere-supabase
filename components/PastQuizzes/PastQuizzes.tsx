"use client";
import getAllQuizzes from "@/libs/getAllQuizzes/getAllQuizzes";
import getAllSubmissions from "@/libs/getAllSubmissions/getAllSubmisions";
import getUser from "@/libs/getUser/getUser";

export default function PastQuizzes() {
  let quizzes: any[] = getAllSubmissions();
  let user: any = getUser();

  let userQuizzes = quizzes.filter((quiz) => {
    return quiz.user_id == user.id;
  });

  userQuizzes = userQuizzes.slice(-6);

  return (
    <div className="flex overflow-x-auto w-full my-8 space-x-4">
  {userQuizzes.map((quiz: any, index: any) => {
    return (
      <div
        key={index}
        className="flex-none w-80 mx-auto rounded-xl block items-center"
      >
        <div className="w-full p-8 bg-[#66A5AD] block rounded-t-lg text-white">
          <div className="w-full flex justify-center text-center">
            <h2 className="text-[30px] font-bold uppercase">
              {quiz.name}
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 rounded-b-lg text-center p-4 mt-2 bg-[#C4DFE6]">
          <div className="text-[16px] border-r border-[#66A5AD]">
            <b className="uppercase text-[20px]">{quiz.subject}</b>
          </div>
          <div className="text-[16px]">
            <b className="uppercase text-[20px]">{quiz.points}</b> / 50
          </div>
        </div>
      </div>
    );
  })}
</div>

    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 w-full   ">
      {userQuizzes.map((quiz: any, index: any) => {
        return (
          <div
            key={index}
            className="  mx-auto rounded-xl block align-middle items-center w-full"
          >
            <div className=" w-full p-8 block bg-[#66A5AD] rounded-t-lg text-white ">
              <div className=" w-full flex justify-center text-center ">
                <h2 className="text-[25px] font-bold  uppercase truncate ">
                  {quiz.quizName}
                </h2>
              </div>
            </div>
            <div className=" grid  md:grid-cols-2 rounded-b-lg text-center p-4 mt-2 bg-[#C4DFE6]">
              <div className="text-[16px] border-r border-[#66A5AD] ">
                <b className="uppercase text-[20px] ">{quiz.subject}</b>
              </div>
              <div className="text-[16px]  ">
                <b className="uppercase text-[20px] ">{quiz.chapter}</b>
              </div>

              <div className=" text-[16px] mt-4 col-span-2 ">
                <b className="uppercase text-[20px] ">{quiz.score}</b> / 50
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
