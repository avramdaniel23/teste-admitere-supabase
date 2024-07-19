type PodiumProps = {
  data: {
    id: number;
    name: string;
    score: number;
  }[];
};

export default function Podium({ data }: PodiumProps) {
  return (
    
    <div className="flex items-center justify-center px-2 py-2 bg-stone-300 dark:bg-zinc-900">
      <div className="podium flex items-end md:space-x-4 lg:space-x-8">
        {/* Podiums */}
        <PodiumItem
          place={2}
          user={data[1]}
          backgroundStyles={{
            name: "bg-lime-400",
            score: "bg-lime-300 group-hover:shadow-lime-500",
            top: "bg-lime-500",
            front: "bg-lime-400 group-hover:bg-lime-500 h-32",
          }}
        />
        <PodiumItem
          place={1}
          user={data[0]}
          backgroundStyles={{
            name: "bg-cyan-400",
            score: "bg-cyan-300 group-hover:shadow-cyan-400",
            top: "bg-cyan-500",
            front: "bg-cyan-400 group-hover:bg-cyan-500 h-40",
          }}
        />
        <PodiumItem
          place={3}
          user={data[2]}
          backgroundStyles={{
            name: "bg-orange-400",
            score: "bg-orange-300 group-hover:shadow-orange-400",
            top: "bg-orange-500",
            front: "bg-orange-400 group-hover:bg-orange-500 h-24",
          }}
        />
      </div>
    </div>
  );
}

function PodiumItem({
  user,
  place,
  backgroundStyles,
}: {
  user: {
    id: number;
    name: string;
    score: number;
  };
  place: number;
  backgroundStyles: {
    name: string;
    score: string;
    top: string;
    front: string;
  };
}) {
  if (!user) return null;
  return (
    <section className="podium flex items-end space-x-4">
      <div className="flex gap-1 group flex-col items-center justify-center font-bold">
        <div
          className={`${backgroundStyles.name} size-14 flex items-center justify-center rounded-full group-hover:shadow-lg group-hover:-translate-y-1 duration-300`}
        >
          {user.name[0]}
        </div>
        <span className="group-hover:-translate-y-1 duration-300">
          {user.name}
        </span>
        <div
          className={`${backgroundStyles.score} mb-2 text-sm text-black px-2 py-1 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 duration-300`}
        >
          {user.score.toLocaleString()}
        </div>
        <div>
          <div className={`${backgroundStyles.top} h-4 w-full cub3d `}></div>
          <div
            className={`${backgroundStyles.front} relative w-20 shadow-xl transition-all flex justify-center items-center `}
          >
            <span className="text-center text-5xl text-white font-semibold">
              {place}
            </span>
            <div className="absolute w-full h-1 bg-black opacity-10 top-0 "></div>
          </div>
        </div>
      </div>
    </section>
  );
}
