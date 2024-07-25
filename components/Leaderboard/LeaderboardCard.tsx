interface Props {
  place: number;
  firstName: string;
  lastName: string;

  points: number;
}

export default function LeaderboardCard({
  place,
  firstName,
  lastName,
  points,
}: Props) {
  return (
    <div className="flex flex-row items-center justify-center border-slate-300 border-t-4 dark:border-none my-2  p-3 px-5  text-lg  bg-transparent text-black  rounded-lg  shadow-lg hover:border-slate-600 hover:shadow-md t ease-in-out dark:hover:bg-purple-400 cursor-pointer transition-all  duration-300">
      <div className="flex w-[35px] h-[35px]  p-2 rounded-lg bg-slate-500 shadow-lg text-white dark:shadow-slate-600  dark:bg-white items-center justify-center">
        <h1 className="font-bold ">{place}</h1>
      </div>
      <div className="flex items-center  justify-between w-full border-l-2 border-slate-700 ml-4 p-2">
        <div className="flex items-center justify-start">
          <h1 className="font-lg font-bold ml-2">
            {firstName} {lastName}
          </h1>
        </div>
        <div className="font-lg font-bold">{points}</div>
      </div>
    </div>
  );
}
