"use client";
import { useRef } from "react";
import { users } from "./mockData";

export default function Leaderboard() {
  const tableRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (tableRef.current)
      tableRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sortedUsers = users.sort((a, b) => b.points - a.points);
  const ranking = sortedUsers.map((user, index) => ({
    ...user,
    place: index + 1,
  }));

  const podiumRanking = [ranking[1], ranking[0], ranking[2]];

  return (
    <div className="dark:bg-dark  transitions-all duration-300">
      <div className="w-full  flex items-center justify-center ">
        <div className="items-center justify-center flex p-4  px-5 flex-row shadow-2xl rounded-full  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-yellow-500 "
          >
            <path
              fillRule="evenodd"
              d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
              clipRule="evenodd"
            />
          </svg>

          <h1 className="ml-2 text-xl font-semibold">Leaderboard</h1>
        </div>
      </div>
      <section className="flex items-center justify-center mt-5   ">
        <div
          className="flex flex-row items-center justify-center hover:scale-110 transition-all duration-300 bg-orange-300 p-4 rounded-lg gap-2 shadow-xl  w-full md:w-auto
         dark:bg-pink-600 dark:shadow-lg dark:shadow-pink-500 "
        >
          <div className="flex bg-orange-400 p-2 rounded-2xl dark:bg-pink-800 ">
            <h1 className="text-[30px] text-white font-bold ">#12 </h1>
          </div>
          <div className="p-2">
            <p>
              Keep up the good work! You have <b>800 points</b>
            </p>
            <p> </p>
          </div>
        </div>
      </section>

      <div className="relative justify-center items-center flex">
        <div className="absolute right-0 -top-12  w-fit bg-blue-300 mt-5 p-2 rounded-lg flex-row flex items-center justify-center text-black shadow-lg scale-75 lg:scale-100  dark:text-white dark:bg-blue-900  dark:shadow-blue-600 dark:shadow-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="ml-1">02d 12h 20min</p>
        </div>

        <section className="w-full lg:w-[100%] grid grid-cols-3 gap-3 lg:gap-3  items-end mt-16 ">
          {podiumRanking.map((user, index) => (
            <LeaderboardPillar
              key={index}
              place={user.place}
              name={user.name}
              points={user.points}
            />
          ))}
        </section>
        <a
          href="#"
          onClick={handleScroll}
          className="absolute bottom-0 hover:text-white  hidden lg:flex dark:hover:text-black bg-transparent p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </a>
      </div>
      <div
        id="table"
        ref={tableRef}
        className="gap-1 flex flex-col  border-t-4 border-blue-500   text-white bg-gradient-to-b from-blue-400 to-blue-200  rounded-lg dark:bg-gradient-to-b dark:from-violet-600 dark:to-violet-400 dark:border-violet-800 mt-1"
      >
        {ranking.slice(3, ranking.length).map((user) => (
          <LeaderboardCard
            key={user.place}
            name={user.name}
            place={user.place}
            points={user.points}
          />
        ))}
      </div>
    </div>
  );
}

interface Props {
  place: number;
  name: string;
  points: number;
}
interface ProfileProps {
  name: string;
  points: number;
  place: number;
}

const LeaderboardPillar = ({ place, name, points }: Props) => {
  const pillarStyle = {
    1: `flex items-center justify-center bg-gradient-to-b from-yellow-400 to-yellow-200 h-[210px] w-full relative dark:bg-gradient-to-b dark:from-pink-500 dark:to-violet-600 `,
    2: `flex items-center justify-center bg-gradient-to-b from-slate-400 to-blue-200 h-[160px] w-full relative dark:bg-gradient-to-b dark:from-pink-500 dark:to-violet-600`,
    3: `flex items-center justify-center bg-gradient-to-b from-amber-600 to-amber-500 h-[130px] w-full relative dark:bg-gradient-to-b dark:from-pink-500 dark:to-violet-600`,
  };
  const podiumFloorColors = {
    1: "bg-yellow-500 dark:bg-pink-700",
    2: "bg-slate-500 dark:bg-pink-700",
    3: "bg-amber-700 dark:bg-pink-700",
  };

  return (
    <div className="flex flex-col items-center justify-center hover:scale-105 origin-bottom cursor-pointer duration-300 transition-all   ">
      <PillarProfile name={name} points={points} place={place} />

      <div className={pillarStyle[place as keyof typeof pillarStyle]}>
        <div
          className={`absolute bottom-full w-full h-[100px] ${
            podiumFloorColors[place as keyof typeof podiumFloorColors]
          } flex [clip-path:polygon(8%_80%,_92%_80%,_100%_100%,_0%_100%)] `}
        ></div>
        <div className="bg-white text-black shadow-2xl shadow-black  rounded-full p-4 flex justify-center flex-col items-center ">
          <h1 className="text-xl font-extrabold relative">{place}</h1>
          {place == 1 && (
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="size-6 text-yellow-500"
            >
              <path d="M16 0h128c5.3 0 10.3 2.7 13.3 7.1l81.1 121.6c-49.5 4.1-94 25.6-127.6 58.3L2.7 24.9C-.6 20-.9 13.7 1.9 8.5S10.1 0 16 0zm493.3 24.9L401.2 187.1c-33.5-32.7-78.1-54.2-127.6-58.3L354.7 7.1c3-4.5 8-7.1 13.3-7.1h128c5.9 0 11.3 3.2 14.1 8.5s2.5 11.5-.8 16.4zM432 336c0 97.2-78.8 176-176 176S80 433.2 80 336s78.8-176 176-176 176 78.8 176 176zm-167.6-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1l-50.2 7.3c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
            </svg>
          )}
          {place == 2 && (
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="size-6 text-slate-500"
            >
              <path d="M16 0h128c5.3 0 10.3 2.7 13.3 7.1l81.1 121.6c-49.5 4.1-94 25.6-127.6 58.3L2.7 24.9C-.6 20-.9 13.7 1.9 8.5S10.1 0 16 0zm493.3 24.9L401.2 187.1c-33.5-32.7-78.1-54.2-127.6-58.3L354.7 7.1c3-4.5 8-7.1 13.3-7.1h128c5.9 0 11.3 3.2 14.1 8.5s2.5 11.5-.8 16.4zM432 336c0 97.2-78.8 176-176 176S80 433.2 80 336s78.8-176 176-176 176 78.8 176 176zm-167.6-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1l-50.2 7.3c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
            </svg>
          )}
          {place == 3 && (
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="size-6 text-amber-700"
            >
              <path d="M16 0h128c5.3 0 10.3 2.7 13.3 7.1l81.1 121.6c-49.5 4.1-94 25.6-127.6 58.3L2.7 24.9C-.6 20-.9 13.7 1.9 8.5S10.1 0 16 0zm493.3 24.9L401.2 187.1c-33.5-32.7-78.1-54.2-127.6-58.3L354.7 7.1c3-4.5 8-7.1 13.3-7.1h128c5.9 0 11.3 3.2 14.1 8.5s2.5 11.5-.8 16.4zM432 336c0 97.2-78.8 176-176 176S80 433.2 80 336s78.8-176 176-176 176 78.8 176 176zm-167.6-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1l-50.2 7.3c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

const PillarProfile = ({ name, points, place }: ProfileProps) => {
  const profileShadow = {
    1: "shadow-yellow-500",
    2: "shadow-slate-500",
    3: "shadow-amber-500",
  };

  return (
    <div className="flex items-center justify-center flex-col mb-8 lg:scale-110 lg:mb-8">
      <div
        className={`flex  flex-col items-center justify-center  
        }`}
      >
        <div className={` rounded-full shadow-xl `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
      <div className="bg-yellow-500 rounded-full p-1 px-2 font-bold dark:bg-pink-600">
        <h1>{points}</h1>
      </div>
    </div>
  );
};

const LeaderboardCard = ({ place, name, points }: Props) => {
  return (
    <div className="flex flex-row items-center justify-center  p-3 px-5  text-lg  bg-transparent text-black  rounded-lg  shadow-xl hover:bg-purple-400 cursor-pointer ">
      <div className="flex w-[35px] h-[35px] bg-white p-2 rounded-lg  shadow-slate-600 items-center justify-center">
        <h1 className="font-bold ">{place}</h1>
      </div>
      <div className="flex items-center  justify-between w-full border-l-2 ml-2 p-2">
        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <h1 className="font-lg font-bold ml-2">{name}</h1>
        </div>
        <div className="font-lg font-bold">{points}</div>
      </div>
    </div>
  );
};
