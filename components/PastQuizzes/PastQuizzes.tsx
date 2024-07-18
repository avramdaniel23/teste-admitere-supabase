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
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 w-full">
      {userQuizzes.map((quiz: any, index: any) => {
        return (
          <div
            key={index}
            className=" bg-gray-200 mx-auto rounded-xl flex justify-center align-middle items-center "
          >
            <div className=" w-[90%] h-[85%] p-8 block bg-[#0172f0] rounded-lg text-white ">
              <div className=" w-full flex justify-center text-center ">
                <h2 className="text-[24px] font-bold">{quiz.name}</h2>
              </div>
              <div className=" flex justify-around ">
                <p>
                  Materie: <b>{quiz.subject}</b>
                </p>
                <p>
                  Punctaj total: <b>{quiz.points}</b>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
