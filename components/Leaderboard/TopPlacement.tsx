interface PlacementProps {
    username: string;
    place: number;
    points: number;
  }

  const TopPlacement = ({ username, place, points }: PlacementProps) => {
    return (
    <div className="flex flex-col gap-4 items-center w- h-fit">
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-slate-400 rounded-full lg:w-16 lg:h-16"></div>
            <div className="top-8 rounded-xl px-2 font-medium lg:font-semibold lg:text-lg">{username}</div>
        </div>
        <div className="bg-white px-4 rounded-lg font-light lg:text-lg">{points} pts</div>
    </div>
    );
};

export default TopPlacement;
