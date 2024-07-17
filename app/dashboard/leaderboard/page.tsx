import Placement from "@/components/Leaderboard/Placement";
import TopPlacement from "@/components/Leaderboard/TopPlacement";
import NavLB from "@/components/Leaderboard/NavLB";

const subjects = new Map([
  ['General', []],
  ['Matematica', ['General', 'Algebra', 'Geometrie']],
  ['Fizica', ['General', 'Mecanica', 'Electricitate', 'Termodinamica']],
  ['Chimie', ['General', 'Organica', 'Anorganica']],
  ['Informatica', ['General', 'Struct. Ciclice', 'Algoritmi']],
]);

const subjectKeys = Array.from(subjects.keys());
const subjectValues = Array.from(subjects.values());

export default function Leaderboard() {
  return <div className="flex flex-col items-center pb-24 w-full lg:py-20">
    {/* <h5 className="w-fit">Leaderboard</h5> */}
    Leaderboard
    <div className="relative flex flex-col w-[90%]">
      <NavLB category={subjectKeys} subCategory={subjectValues} />
      <div className="flex flex-row h-96 lg:h-[32rem] rounded-md bg-blue-50 md:w-[70%]"> 
        
        <div className="justify-end flex flex-col gap-2 w-full h-full">
          <TopPlacement
          username="N2"
          place={2}
          points={789}
          />
          <div className="flex flex-col items-center gap-4 w-full h-[35%] bg-zinc-200 rounded-l-md shadow-lg">
            <div className="w-full h-6 rounded-tl-md bg-zinc-100"></div>
            <div className="flex justify-center items-center w-12 h-12 bg-zinc-300 rounded-full shadow-inner shadow-slate-400 font-bold text-xl text-zinc-100 lg:w-16 lg:h-16">
              <p className="text-slate-400 lg:text-3xl">2</p>
            </div>
          </div>
        </div>

        <div className="justify-end flex flex-col gap-2 w-full h-full">
          <TopPlacement
          username="Bossu"
          place={2}
          points={929}
          />
          <div className="flex flex-col items-center gap-4 w-full h-[50%] rounded-t-lg bg-yellow-300 shadow-2xl">
            <div className="w-full h-6 rounded-t-md bg-yellow-200"></div>
            <div className="flex justify-center items-center w-14 h-14 bg-yellow-400 rounded-full shadow-inner shadow-yellow-600 font-bold text-xl text-zinc-100 lg:w-20 lg:h-20">
              <p className="text-yellow-600 text-3xl lg:text-5xl">1</p>
            </div>
          </div>
        </div>
        
        <div className="justify-end flex flex-col gap-2 w-full h-full">
          <TopPlacement
          username="Trei"
          place={3}
          points={628}
          />
          <div className="flex flex-col items-center gap-4 w-full h-[30%] rounded-r-lg bg-amber-600 shadow-xl">
            <div className="w-full h-6 rounded-tr-md bg-amber-500"></div>
            <div className="flex justify-center items-center w-12 h-12 bg-amber-700 rounded-full shadow-inner shadow-amber-900 font-bold text-xl text-zinc-100 lg:w-16 lg:h-16">
            <p className="text-amber-900 lg:text-3xl">3</p>
            </div>
          </div>
        </div>

      </div>
    </div>



    {/* GENERAL */}
    <div className="flex flex-col items-center gap-2 py-4 w-[90%] md:gap-4 md:w-[80%]">
      
      <Placement
        username="user"
        place={4}
        points={500}
      />

      <Placement
        username="user"
        place={5}
        points={500}
      />

      <Placement
        username="user"
        place={6}
        points={500}
      />

      <Placement
        username="user"
        place={7}
        points={500}
      />

      <Placement
        username="user"
        place={8}
        points={500}
      />

      <Placement
        username="user"
        place={9}
        points={500}
      />

      <Placement
        username="user"
        place={10}
        points={500}
      />

      <Placement
        username="user"
        place={11}
        points={500}
      />


      <Placement
        username="user"
        place={12}
        points={500}
      />

      <Placement
        username="user"
        place={13}
        points={500}
      />

      <Placement
        username="user"
        place={14}
        points={500}
      />

      <Placement
        username="user"
        place={15}
        points={500}
      />

      <Placement
        username="user"
        place={16}
        points={500}
      />

      <Placement
        username="user"
        place={17}
        points={500}
      />
    </div>
  </div>;
}
