"use client";

interface Placement {
        photo?: string;
        name: string;
        score: number;
}

interface Props {
    f1: Placement
    f2: Placement
    f3: Placement
}

const LeaderboardTopCard = ({f1, f2, f3}: Props) => {
    return (
        <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-6">Final Scoreboard</h1>
            <div className="flex items-end justify-around md:justify-evenly">
                <div className="flex flex-col items-center">
                    <div className="relative" >
                        <div
                            className="bg-gray-500 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 shadow-gray-300 hover:shadow-gray-400 shadow-xl hover:shadow-3xl transition-all duration-150">
                            {f2.photo && <img src={f2.photo} alt={f2.name} className="w-20 h-20 rounded-full"/>}
                            {!f2.photo && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               strokeWidth={1.5}
                                               stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>}
                        </div>
                        <div className="relative -bottom-2 w-full text-center hover:scale-110 transition-all duration-300">
                            <div className="text-lg text-gray-400 py-1 px-2  font-bold">{f2.name}</div>
                            <div className="text-lg bg-gray-700 py-1 px-2 rounded-full font-bold">{f2.score}</div>
                        </div>
                    </div>
                    <div
                        className="relative bg-gradient-to-tl from-gray-400 to-gray-700 w-28 md:w-40 h-4 mt-6 rounded-t-lg text-gray-800 flex flex-col items-center justify-center clip-3d">
                    </div>
                    <div
                        className="bg-gradient-to-b from-gray-400 to-gray-700 w-28 md:w-40 h-40  text-gray-800 flex flex-col items-center justify-center">

                        <div className="text-2xl font-bold text-white">2</div>
                    </div>

                </div>


                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div className="bg-yellow-500 w-24 h-24 rounded-full flex items-center justify-center hover:scale-110 shadow-yellow-300 hover:shadow-yellow-400 shadow-2xl hover:shadow-3xl transition-all duration-150">
                            {f1.photo && <img src={f1.photo} alt={f1.name} className="w-24 h-24 rounded-full"/>}
                            {!f1.photo && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               strokeWidth={1.5}
                                               stroke="currentColor" className="size-20">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>}
                        </div>
                        <div className="relative -bottom-2 w-full text-center hover:scale-110 transition-all duration-300">
                            <div className="text-lg text-yellow-400 py-1 px-2  font-bold">{f1.name}</div>
                            <div className="text-lg bg-yellow-700 py-1 px-2 rounded-full font-bold">{f1.score}</div>
                        </div>
                    </div>
                    <div
                        className="relative bg-yellow-500 w-28 md:w-40 h-4 mt-6 rounded-t-lg text-gray-800 flex flex-col items-center justify-center clip-3d">
                    </div>
                    <div
                        className="bg-gradient-to-b from-yellow-400 to-yellow-700 w-28 md:w-40 h-52  text-gray-800 flex flex-col items-center justify-center">
                        <div className="text-2xl font-bold text-white">1</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <div
                            className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 shadow-orange-300 hover:shadow-orange-400 shadow-xl hover:shadow-3xl transition-all duration-150">
                            {f3.photo && <img src={f3.photo} alt={f3.name} className="w-20 h-20 rounded-full"/>}
                            {!f3.photo && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                               strokeWidth={1.5}
                                               stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>}
                        </div>
                        <div className="relative -bottom-2 w-full text-center hover:scale-110 transition-all duration-300">
                            <div className="text-lg text-orange-400 py-1 px-2  font-bold">{f3.name}</div>
                            <div className="text-lg bg-orange-700 py-1 px-2 rounded-full font-bold">{f3.score}</div>
                        </div>
                    </div>
                    <div
                        className="relative  bg-gradient-to-tr from-orange-400 to-orange-700 w-28 md:w-40 h-4 mt-6 rounded-t-lg text-gray-800 flex flex-col items-center justify-center clip-3d">
                    </div>
                    <div
                        className="bg-gradient-to-b from-orange-400 to-orange-700 w-28 md:w-40 h-32  text-gray-800 flex flex-col items-center justify-center">
                        <div className="text-2xl text-white font-bold">3</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LeaderboardTopCard;
export type {Placement}
