interface PlacementProps {
    username: string;
    place: number;
    points: number;
  }

  const Placement = ({ username, place, points }: PlacementProps) => {
    return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between text-slate-800 bg-white p-2 w-full h-fit shadow-lg rounded-[16px] lg:h-16 lg:duration-200 lg:cursor-pointer lg:hover:scale-105">

      <div className="flex flex-row gap-2 items-center w-[60%] h-full">
        <p className="flex justify-center items-center bg-zinc-200 rounded-lg w-10 h-10 lg:w-12 lg:h-12">{place}</p>
        <div className="h-10 w-[1.5px] rounded-full bg-zinc-300 lg:h-12"></div>
        <div className="w-10 h-10 bg-slate-400 rounded-full lg:w-12 lg:h-12"></div>
        <p className="lg:font-medium lg:text-lg">{username}</p>
      </div>
      <p>{points} pts</p>

      </div>
    </div>
    );
};

export default Placement;
