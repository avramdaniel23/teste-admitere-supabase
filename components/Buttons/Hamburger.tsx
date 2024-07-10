export default function Hamburger({toggleSideBar}) {
  return (
    <button onClick={toggleSideBar} className="hidden lg:flex lg:flex-col lg:justify-center lg:w-14 lg:h-14 lg:bg-slate-50 lg:border-2 lg:rounded-md lg:border-slate-300">
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-1 mx-auto">
            <div className="w-full h-[0.1rem] bg-[black] rounded-2xl"></div>
            <div className="w-2/3 h-[0.1rem] bg-[black] rounded-2xl"></div>
            <div className="w-2/5 h-[0.1rem] bg-[black] rounded-2xl"></div>
        </div>
    </button>
  );
}
