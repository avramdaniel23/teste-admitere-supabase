type MateriiProps = {
  materii: {
    categorie: string;
    subcategorii?: string[];
  }[];
};

export default function Materii({ materii }: MateriiProps) {
  return (
    <div>
      <div className="flex items-center justify-center text-purple-500 font-bold pb-3">
        LeaderBoard
      </div>
      <nav className="flex gap-5 items-center justify-center cursor-pointer font-semibold px-3 py-4">
        {materii.map((materie) => {
          return (
            <div key={materie.categorie}>
              {materie.categorie}
              <button className="flex p-1.5 rounded-lg bg-gray-100 hover:bg-purple-100 dark:bg-purple-600">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
