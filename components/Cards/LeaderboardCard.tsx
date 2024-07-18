"use client";

interface Props {
   place: number;
    photo?: string;
    name: string;
    score: number;
}

export default function LeaderboardCard({ place, photo, name, score}: Props)
{


    return (
        <div
            className={`w-full h-fit my-4 rounded-lg shadow-lg bg-gradient-to-br from-purple-500 to-purple-700 hover:scale-105 hover:shadow-lg hover:dark:shadow-purple-500 transition-all duration-150`}>

            <div className="py-4 flex justify-between">
                <div className="flex items-center w-fit min-w-24 md:min-w-32">
                    <p className="w-fit uppercase p-3 text-white m-[2px] md:m-3 backdrop-blur font-bold tracking-wider">
                        {place}
                    </p>
                    <div className={"w-full h-full flex items-center"}>
                        {photo && <img src={photo} alt={name}
                                       className={"w-full h-full max-w-10 md:max-w-14 max-h-10 md:max-h-14 rounded-full"}/>}
                        {!photo &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-10 md:size-14 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>}
                    </div>


                </div>
                <div className={"items-center flex"}>
                    <p className={"py-1 my-1 text-white text-center"}>{name}</p>
                </div>
                <div className={"flex items-center"}>
                    <p className={"w-fit uppercase p-2 text-white m-1 backdrop-blur font-bold tracking-wider text-right"}>{score}</p>
                </div>
            </div>
        </div>
    )
}

