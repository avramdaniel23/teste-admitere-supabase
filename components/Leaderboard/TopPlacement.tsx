interface PlacementProps {
    username: string;
    place: number;
    points: number;
  }

  const TopPlacement = ({ username, place, points }: PlacementProps) => {
    return (
    <div className="flex flex-col gap-2 items-center w-full">
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
            <div className="top-8  rounded-xl px-2 font-medium">{username}</div>
        </div>
        <div className="bg-white px-4 rounded-lg font-light">{points} pts</div>
    </div>
    );
};

export default TopPlacement;
