export default function Hamburger({toggleSideBar, isSideBarOpen}) {
  return (
    <button onClick={toggleSideBar} className="hidden lg:flex lg:flex-col lg:justify-center lg:w-14 lg:h-14 lg:bg-slate-50 lg:border-2 lg:rounded-md lg:border-slate-300">
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-1 mx-auto">
            <div className={`${isSideBarOpen ? "w-full h-[0.15em] bg-slate-700 rounded-2xl duration-500" : "w-full h-[0.15em] bg-slate-700 rounded-2xl duration-500"} `}></div>
            <div className={`${isSideBarOpen ? "w-2/3 h-[0.15em] bg-slate-700 rounded-2xl duration-500"  : "w-full h-[0.15em] bg-slate-700 rounded-2xl duration-500"} `}></div>
            <div className={`${isSideBarOpen ? "w-1/3 h-[0.15em] bg-slate-700 rounded-2xl duration-500"  : "w-full h-[0.15em] bg-slate-700 rounded-2xl duration-500"} `}></div>
        </div>
    </button>
  );
}
