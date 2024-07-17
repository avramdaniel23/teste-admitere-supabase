"use client";

interface Props {
   place: number;
    photo?: string;
    name: string;
    score: number;
}

const LeaderboardCard = ({ place, photo, name, score}: Props) => {
    let gradient = "from-purple-500 to-pink-500";
    switch (place) {
        case 1:
            gradient = "from-yellow-500 to-yellow-700";
            break;
        case 2:
            gradient = "from-gray-500 to-gray-700";
            break;
        case 3:
            gradient = "from-orange-500 to-orange-700";
            break;
        default:
            gradient = "from-purple-500 to-purple-700";
    }

    return (
        <div className={`w-full h-fit my-4 rounded-lg shadow-lg bg-gradient-to-br ${gradient} hover:scale-105 hover:shadow-lg hover:dark:shadow-purple-500 transition-all duration-150`} >

            <div className="py-4 flex justify-between">
                <div className="flex items-center">
                    <p className="w-fit uppercase p-3 text-white m-3 backdrop-blur font-bold tracking-wider">
                        {place}
                    </p>
                    {photo && <img  src={photo} alt={name} className={"w-14 h-14 rounded-full"}/>}
                    {!photo && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="size-14 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>}
                        <p className={"w-fit p-3 m-3 text-white"}>{name}</p>
            </div>
            <div>
                <p className={"w-fit uppercase p-3 text-white m-3 backdrop-blur font-bold tracking-wider text-right"}>{score}</p>
            </div>
        </div>
</div>
)
    ;
};

export default LeaderboardCard;
