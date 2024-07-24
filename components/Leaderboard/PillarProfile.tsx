interface ProfileProps {
  name: string;
  points: number;
  place: number;
  avatar: string;
}

export default function PillarProfile({ name, points, place }: ProfileProps) {
  return (
    <div className="flex items-center justify-center flex-col mb-8 lg:scale-110 lg:mb-8">
      <div
        className={`flex  flex-col items-center justify-center  
          }`}
      >
        <div className={` rounded-full shadow-xl `}>
          {/* <img
            className="w-12 h-12 lg:w-14 lg:h-14  object-scale-down p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
            src={avatar}
            alt="Bordered avatar"
          /> */}
        </div>
        <h1 className="text-lg font-bold">{name}</h1>
      </div>
      <div className="bg-yellow-500 rounded-full p-1 px-2 font-bold dark:bg-pink-600">
        <h1>{points}</h1>
      </div>
    </div>
  );
}
