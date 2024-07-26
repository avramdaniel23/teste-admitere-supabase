"use client";
import getAllQuizzes from "@/libs/getAllQuizzes/getAllQuizzes";
import getUser from "@/libs/getUser/getUser";

const userStats = {
  totalPoints: 2000,
  atemptedQuizzes: 20,
  passedQuizzes: 14,
  mathsPoints: 1000,
  physicsPoints: 500,
  chemistryPoints: 500, 
}

export default function ProfileStats() {
  let quizzes: any[] = getAllQuizzes();
  let user: any = getUser();

  let userQuizzes = quizzes.filter((quiz) => {
    return quiz.user_id == user.id;
  });
  console.log(userQuizzes);

  return (
    <div className="mb-10">
      <h1 className="font-bold text-4xl mt-4">Passed / Failed</h1>
      <div className="flex flex-col gap-y-4 mt-5 mb-10">
        <p className="font-bold text-xl">Passed Quizzes: {userStats.passedQuizzes}</p>
        <p className="font-bold text-xl">Failed Quizzes {userStats.atemptedQuizzes - userStats.passedQuizzes}</p>
      </div>
      <div className="w-full flex border-2 border-black rounded-lg h-[50px] mb-10 shadow-xl">
        <div className="w-2/3 flex items-center justify-center bg-gradient-to-r from-green-700 to-green-500 h-[47px] rounded-l-lg">
          <p className="font-bold text-white">Passed </p>
        </div>
        <div className="w-1/3 flex items-center justify-center bg-gradient-to-l from-red-700 to-red-500 h-[47px] rounded-r-lg">
          <p className="font-bold text-white">Failed</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold mb-5">Points per Category</h1>
        <div className="flex justify-center  flex-wrap-reverse border-b-2 gap-x-5 border-black">
          <div className={`flex flex-col items-center justify-center rounded-t-2xl shadow-xl bg-blue-600 h-[200px] w-[20%]  md:w-[130px] lg:w-[130px]`}>
              <p className="font-bold text-white">Total</p>
              <p className="font-bold text-white">{userStats.totalPoints}</p>
          </div>
          <div className={`flex flex-col items-center justify-center rounded-t-2xl shadow-xl bg-blue-600 h-[100px] w-[20%]  md:w-[130px] lg:w-[130px]`}>
              <p className="font-bold text-white">Maths</p>
              <p className="font-bold text-white">{userStats.mathsPoints}</p>
          </div>
          <div className={`flex flex-col items-center justify-center rounded-t-2xl shadow-xl bg-blue-600 h-[50px] w-[20%]  md:w-[130px] lg:w-[130px]`}>
              <p className="font-bold text-white">Physics</p>
              <p className="font-bold text-white">{userStats.physicsPoints}</p>
          </div>
          <div className={`flex flex-col items-center justify-center rounded-t-2xl shadow-xl bg-blue-600 h-[50px] w-[20%]  md:w-[130px] lg:w-[130px]`}>
              <p className="font-bold text-white">Chemistry</p>
              <p className="font-bold text-white">{userStats.chemistryPoints}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
