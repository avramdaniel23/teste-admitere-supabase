"use client";
import getAllQuizzes from "@/libs/getAllQuizzes/getAllQuizzes";
import getUser from "@/libs/getUser/getUser";

// const materii = ["Matematica", "Fizica", "Informatica", "Chimie"];

export default function PStats() {
  let quizzes: any[] = getAllQuizzes();
  let user: any = getUser();

  let userQuizzes = quizzes.filter((quiz) => {
    return quiz.user_id == user.id;
  });

  return (
    <div className="border-2 rounded">
      <div>Materii:</div>
      <div>Incercari teste:</div>
      {userQuizzes.map((quiz: any, index: any) => {
        return (
          <div key={index}>
            {quiz.name} - {quiz.points} points
          </div>
        );
      })}
    </div>
  );
}
