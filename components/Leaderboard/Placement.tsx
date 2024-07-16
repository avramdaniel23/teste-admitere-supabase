interface PlacementProps {
    username: string;
    place: number;
    points: number;
  }

  const Placement = ({ username, place, points }: PlacementProps) => {
    return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between px-2 w-full h-12 bg-white rounded-lg lg:h-16">

      <div className="flex flex-row gap-2 items-center w-[60%] h-fit">
        <p className="flex justify-center items-center bg-slate-200 rounded-lg w-10 h-10 lg:w-12 lg:h-12">{place}</p>
        <div className="h-8 w-[1px] rounded-2xl bg-slate-400 lg:h-12"></div>
        <div className="w-9 h-9 bg-slate-400 rounded-full lg:w-12 lg:h-12"></div>
        <p className="lg:font-medium lg:text-lg">{username}</p>
      </div>
      <p>{points} pts</p>

      </div>
    </div>
    );
};

export default Placement;
