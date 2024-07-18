export default function LeaderboardComp() {
  return (
    <div className="flex items-end gap-6 justify-center bg-zinc-300 rounded-t-lg">
      <div className="w-24 md:w-36">
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <span className="font-semibold">Girbian</span>
          <span className="p-2 px-4 text-white bg-blue-500 rounded-full font-semibold">
            1001
          </span>
        </div>
        <div className="trapezoid bg-blue-600 h-10"></div>
        <div className="flex justify-center items-top pt-3 bg-blue-500 min-h-[135px] lg:min-h-[200px]">
          <div className="quiz-medal">
            <div className="quiz-medal__circle quiz-medal__circle--silver">
              <span>2</span>
            </div>
            <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
            <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-end gap-6">
          <div className="w-24 md:w-36">
            <div className="flex flex-col items-center gap-2">
              <div className="mt-4 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className=" flex font-semibold">Tibianus</span>
              <span className="p-2 px-4 text-white bg-green-500 rounded-full font-semibold ">
                77777
              </span>
            </div>
            <div className="trapezoid bg-green-600 h-10"></div>
            <div className="flex justify-center items-top pt-3 text-4xl bg-green-500 min-h-[200px]  lg:min-h-[300px]">
              <div className="quiz-medal">
                <div className="quiz-medal__circle quiz-medal__circle--gold">
                  <span>1</span>
                </div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-end gap-6">
          <div className="w-24 md:w-36">
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-12 h-12 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="font-semibold">Mogea</span>
              <span className="p-2 px-4 text-white bg-yellow-400 rounded-full font-semibold ">
                696
              </span>
            </div>
            <div className="trapezoid bg-yellow-500 h-10"></div>
            <div className="flex justify-center items-top pt-3 text-4xl bg-yellow-400 min-h-[90px] lg:min-h-[100px]">
              <div className="quiz-medal">
                <div className="quiz-medal__circle quiz-medal__circle--bronze">
                  <span>3</span>
                </div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
