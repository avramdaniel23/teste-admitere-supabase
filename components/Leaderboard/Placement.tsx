interface PlacementProps {
    username: string;
    place: number;
    points: number;
  }

  const Placement = ({ username, place, points }: PlacementProps) => {
    return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between px-2 w-full h-12 bg-white rounded-lg">

      <div className="flex flex-row gap-2 items-center w-[60%] h-fit">
        <p className="flex justify-center items-center bg-slate-200 rounded-lg w-10 h-10">{place}</p>
        <div className="h-8 w-[1px] rounded-xl bg-slate-400"></div>
        <div className="w-9 h-9 bg-slate-400 rounded-full"></div>
        <p>{username}</p>
      </div>
      <p>{points} pts</p>

      </div>
    </div>
    );
};

export default Placement;
