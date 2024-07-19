import { useState } from "react";

type MateriiProps = {
  materii: {
    categorie: string;
    subcategorii?: string[];
  }[];
};

export default function Materii({ materii }: MateriiProps) {
  const [active, setIsActive] = useState<string | null>(null);
  return (
    <div>
      <div className="flex justify-center items-center text-purple-500 font-bold text-xl pb-5 dark:text-white">
        LeaderBoard
      </div>

      <div className="overflow-x-auto bg-violet-200 dark:bg-stone-400 rounded">
        <nav className="flex  md:justify-center gap-2 lg:gap-5 p-2 font-semibold px-3 py-4">
          {materii.map((materie) => {
            return (
              <button
                key={materie.categorie}
                onClick={() => setIsActive(materie.categorie)}
                className={`${
                  active === materie.categorie
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-400 bg-blue-300 dark:bg-blue-400  dark:hover:bg-purple-500"
                } flex cursor-pointer flex-shrink-0 gap-2  rounded px-2 py-2 `}
              >
                {materie.categorie}
              </button>
            );
          })}
        </nav>
      </div>

      <span className="flex justify-center h-10 text-xl py-2 font-semibold">
        {active}
      </span>
    </div>
  );
}
