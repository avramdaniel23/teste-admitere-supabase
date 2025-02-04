import PillarProfile from "./PillarProfile";

// interface Props {
//   place: number;
//   name: string;
//   avatar: string;
//   points: number;
// }

export default function LeaderboardPillar({
  place,
  firstName,
  lastName,
  avatar,
  points,
}: any) {
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
    <div className="flex flex-col   items-center justify-center hover:scale-[102%] origin-bottom cursor-pointer duration-300 transition-all   ">
      <PillarProfile
        firstName={firstName}
        lastName={lastName}
        points={points}
        avatar={avatar}
        place={0}
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
}
