"use client";
import { useRef, useState } from "react";
import { users } from "./mockData";
import Image from "next/image";

export default function Leaderboard() {
  const [activeSubject, setActiveSubject] = useState("general");
  const [activeCategory, setActiveCategory] = useState("");

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

  const subjects = ["matematica", "fizica", "informatica", "chimie"];

  const subCategories = {
    general: ["general"],
    matematica: ["algebra", "geometrie", "trigonometrie", "analiza"],
    fizica: ["mecanica", "optica"],
    informatica: ["vectori", "algoritmica", "backtracking"],
    chimie: ["chimie1", "chimie2", "chimie3"],
  };

  subCategories["matematica"].map((nume) => console.log(nume));

  return (
    <div className="dark:bg-dark  transitions-all duration-300">
      <div className="w-full flex items-center justify-center text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
          />
        </svg>

        <h1 className="text-xl capitalize ml-2 font-bold text-black">
          {activeSubject} / {activeCategory}
        </h1>
      </div>
      <section className="flex flex-col gap-2  items-center justify-center w-full mt-2 relative ">
        <div className="flex overflow-x-auto w-full lg:w-fit  md:overflow-x-hidden  text-black  gap-2   ">
          {subjects.map((subject) => (
            <SubjectChips
              subject={subject}
              setActiveSubject={setActiveSubject}
              activeSubject={activeSubject}
              key={subject}
              setActiveCategory={setActiveCategory}
            />
          ))}
        </div>
        <div
          className={`absolute top-10 flex  overflow-x-auto w-full lg:w-fit  md:overflow-x-hidden  text-black  rounded-full gap-2   transition-all duration-700 ease-in-out ${
            activeSubject == "general" ? "scale-0" : "scale-100"
          } `}
        >
          {subCategories[activeSubject as keyof typeof subCategories].map(
            (subCategory) => (
              // activeSubject != "general" &&
              <SubCategoryChip
                activeSubject={activeSubject}
                category={subCategory}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            )
          )}
        </div>
      </section>

      <div className="relative justify-center  px-4 items-center flex mt-16 rounded-2xl shadow-lg shadow-slate-400 ">
        <div className="absolute right-0 top-0  w-fit bg-blue-300  p-2 rounded-lg flex-row flex items-center justify-center text-black shadow-lg  text-sm lg:text-md font-bold m-2  dark:text-white dark:bg-blue-900  dark:shadow-blue-600 dark:shadow-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 lg:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p className="ml-1">02d 12h 20min</p>
        </div>

        <section className="w-full   grid grid-cols-3 gap-3 lg:gap-7  items-end mt-16 ">
          {podiumRanking.map((user, index) => (
            <LeaderboardPillar
              key={index}
              place={user.place}
              name={user.name}
              points={user.points}
              avatar={user.avatar}
            />
          ))}
        </section>
        <a
          href="#"
          onClick={handleScroll}
          className="absolute top-[93%] hover:scale-125  hidden lg:flex dark:hover:text-black bg-transparent p-2 transition-all duration-300"
        >
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
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </a>
      </div>
      <div
        id="table"
        ref={tableRef}
        className="gap-2 flex flex-col  mt-4 text-white   rounded-lg dark:bg-gradient-to-b dark:from-violet-600 dark:to-violet-400 dark:border-violet-800 "
      >
        {ranking.slice(3, ranking.length).map((user) => (
          <LeaderboardCard
            key={user.place}
            name={user.name}
            place={user.place}
            points={user.points}
            avatar={user.avatar}
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
  avatar: string;
}
interface ProfileProps {
  name: string;
  points: number;
  place: number;
  avatar: string;
}

const LeaderboardPillar = ({ place, name, points, avatar }: Props) => {
  const pillarStyle = {
    1: `flex items-center justify-center bg-gradient-to-b from-yellow-400 to-yellow-200 h-[210px] w-full relative dark:bg-gradient-to-b dark:from-pink-500 dark:to-violet-600 `,
    2: `flex items-center justify-center bg-gradient-to-b from-slate-400 to-blue-200 h-[160px] w-full relative dark:bg-gradient-to-b dark:from-pink-500 dark:to-violet-600 `,
    3: `flex items-center justify-center bg-gradient-to-b from-amber-600 to-amber-500 h-[130px] w-full relative dark:bg-gradient-to-b dark:from-pink-500 dark:to-violet-600 `,
  };
  const podiumFloorColors = {
    1: "bg-yellow-500 dark:bg-pink-700",
    2: "bg-slate-500 dark:bg-pink-700",
    3: "bg-amber-700 dark:bg-pink-700",
  };

  return (
    <div className="flex flex-col   items-center justify-center hover:scale-105 origin-bottom cursor-pointer duration-300 transition-all   ">
      <PillarProfile
        name={name}
        points={points}
        place={place}
        avatar={avatar}
      />

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

const PillarProfile = ({ name, points, place, avatar }: ProfileProps) => {
  return (
    <div className="flex items-center justify-center flex-col mb-8 lg:scale-110 lg:mb-8">
      <div
        className={`flex  flex-col items-center justify-center  
        }`}
      >
        <div className={` rounded-full shadow-xl `}>
          <img
            className="w-12 h-12 lg:w-14 lg:h-14  object-scale-down p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={avatar}
            alt="Bordered avatar"
          />
        </div>
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
      <div className="bg-yellow-500 rounded-full p-1 px-2 font-bold dark:bg-pink-600">
        <h1>{points}</h1>
      </div>
    </div>
  );
};

const LeaderboardCard = ({ place, name, points, avatar }: Props) => {
  return (
    <div className="flex flex-row items-center justify-center border-slate-300 border-t-4 dark:border-none my-2  p-3 px-5  text-lg  bg-transparent text-black  rounded-lg  shadow-lg hover:border-slate-600 hover:shadow-md t ease-in-out dark:hover:bg-purple-400 cursor-pointer transition-all  duration-300">
      <div className="flex w-[35px] h-[35px]  p-2 rounded-lg bg-slate-500 shadow-lg text-white dark:shadow-slate-600  dark:bg-white items-center justify-center">
        <h1 className="font-bold ">{place}</h1>
      </div>
      <div className="flex items-center  justify-between w-full border-l-2 border-slate-700 ml-4 p-2">
        <div className="flex items-center justify-start">
          <div className={` rounded-full shadow-xl `}>
            <img
              className="w-10 h-10 lg:h-12 lg:w-12  object-scale-down p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={avatar}
              alt="Bordered avatar"
            />
          </div>
          <h1 className="font-lg font-bold ml-2">{name}</h1>
        </div>
        <div className="font-lg font-bold">{points}</div>
      </div>
    </div>
  );
};

interface ChipProps {
  subject: String;
  setActiveSubject: Function;
  activeSubject: string;
  setActiveCategory: Function;
}

const SubjectChips = ({
  subject,
  setActiveSubject,
  activeSubject,
  setActiveCategory,
}: ChipProps) => {
  return (
    <div
      className={`flex items-center justify-center   cursor-pointer border-2   rounded-full p-1 px-2  transition-all duration-300 ease-linear  ${
        activeSubject == subject && "bg-orange-300 border-black "
      }  `}
      onClick={() => {
        if (activeSubject == subject) {
          setActiveSubject("general");
          setActiveCategory("");
        } else {
          setActiveSubject(subject);
          setActiveCategory("general");
        }
      }}
    >
      <p className="font-bold">{subject}</p>
    </div>
  );
};

interface SubCategoryChipProps {
  category: String;
  activeSubject: string;
  activeCategory: string;
  setActiveCategory: Function;
}

const SubCategoryChip = ({
  category,
  activeSubject,
  activeCategory,
  setActiveCategory,
}: SubCategoryChipProps) => {
  return (
    <div
      className={`flex items-center justify-center   cursor-pointer border-2   rounded-full p-1 px-2    ${
        activeCategory == category &&
        activeSubject != "general" &&
        "bg-orange-300 border-black"
      }   `}
      onClick={() => {
        if (activeCategory == category) {
          setActiveCategory("general");
          setActiveCategory("");
        } else setActiveCategory(category);
      }}
    >
      <p className="font-bold">{category}</p>
    </div>
  );
};
