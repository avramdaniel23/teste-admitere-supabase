interface NavLBProps {
    category: string[];
    subCategory: string[][];
  }

  const NavLB: React.FC<NavLBProps> = ({ category, subCategory }) => {
    return (
    <div className="absolute flex flex-row items-center justify-between w-full h-fit p-3">
        {/* <h3 className="text-4xl font-bold rounded-md p-2 bg-slate-200">Leaderboard</h3> */}
        <div className="flex flex-row items-center rounded-lg bg-white border-2 border-slate-700 p-1">
            <p className="text-sm text-slate-800 font-normal">{category[1]}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>

        <div className="flex flex-row items-center rounded-md bg-white border-2 border-slate-700 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            <p className=" text-sm text-slate-800 font-normal">{subCategory[1][0]}</p>
        </div>

    </div>
    );
};

export default NavLB;
