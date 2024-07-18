type PodiumProps = {
  users: {
    id: number
    name: string
    score: number
  }[]
}

export default function Podium({ users }: PodiumProps) {
  const backgroundsStyles = {
    first: {
      figureTop:
        'bg-blue-400 group-hover:bg-blue-500 dark:bg-blue-500 group-hover:dark:bg-blue-400',
      figureFront:
        'bg-blue-500 transition-colors group-hover:bg-blue-700 dark:bg-blue-700 group-hover:dark:bg-blue-600',
    },
    second: {
      figureTop:
        'bg-blue-400 group-hover:bg-blue-500 dark:bg-blue-500 group-hover:dark:bg-blue-400',
      figureFront:
        'bg-blue-500 transition-colors group-hover:bg-blue-700 dark:bg-blue-700 group-hover:dark:bg-blue-600',
    },
    third: {
      figureTop:
        'bg-blue-400 group-hover:bg-blue-500 dark:bg-blue-500 group-hover:dark:bg-blue-400',
      figureFront:
        'bg-blue-500 transition-colors group-hover:bg-blue-700 dark:bg-blue-700 group-hover:dark:bg-blue-600',
    },
  }
  return (
    <div className="flex items-end justify-center gap-2 rounded-t-lg bg-slate-300 pt-4 dark:bg-slate-900">
      <PodiumUser user={users[1]}>
        <div className="cube-container h-32 w-24 duration-200 group-hover:-translate-y-[4.4px] group-hover:scale-y-105">
          <div className="cube size-full transition-colors">
            <figure
              className={`top-second ${backgroundsStyles.second.figureTop} absolute h-20 transition-colors`}
            ></figure>
            <figure
              className={`${backgroundsStyles.second.figureFront} absolute flex h-full w-24 justify-center`}
            >
              {/* Medal */}
              <div className="relative mt-2">
                <div
                  className={`quiz-medal__circle quiz-medal__circle--silver`}
                >
                  <span>2</span>
                </div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
              </div>
            </figure>
          </div>
        </div>
      </PodiumUser>

      <PodiumUser user={users[0]}>
        <div className="cube-container h-44 w-24 duration-200 group-hover:-translate-y-[3.2px] group-hover:scale-y-105">
          <div className="cube size-full transition-colors">
            <figure
              className={`top-first ${backgroundsStyles.first.figureTop} absolute h-20 transition-colors`}
            ></figure>
            <figure
              className={`${backgroundsStyles.first.figureFront} absolute flex h-full w-24 justify-center`}
            >
              {/* Medal */}
              <div className="relative mt-2">
                <div className="quiz-medal__circle quiz-medal__circle--gold">
                  <span>1</span>
                </div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
              </div>
            </figure>
          </div>
        </div>
      </PodiumUser>

      <PodiumUser user={users[2]}>
        <div className="cube-container h-24 w-24 duration-200 group-hover:-translate-y-[2.5px] group-hover:scale-y-105">
          <div className="cube size-full transition-colors">
            <figure
              className={`top-third ${backgroundsStyles.third.figureTop} absolute h-20 transition-colors`}
            ></figure>
            <figure
              className={`${backgroundsStyles.third.figureFront} absolute flex h-full w-24 justify-center`}
            >
              {/* Medal */}
              <div className="relative mt-2">
                <div className="quiz-medal__circle quiz-medal__circle--bronze">
                  <span>3</span>
                </div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
                <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
              </div>
            </figure>
          </div>
        </div>
      </PodiumUser>
    </div>
  )
}

function PodiumUser({
  user,
  children,
}: {
  user: {
    id: number
    name: string
    score: number
  }
  children: React.ReactNode
}) {
  if (!user) return null
  const firstLetter = user?.name[0].toLocaleUpperCase()

  return (
    <div className="group flex cursor-pointer flex-col items-center gap-1">
      <div className="grid size-14 place-items-center rounded-full bg-white duration-200 group-hover:-translate-y-1 dark:bg-zinc-700">
        <div className="grid size-12 place-items-center rounded-full bg-zinc-200 text-xl font-bold transition-colors dark:bg-zinc-800">
          {firstLetter}
        </div>
      </div>
      <span className="text-lg font-bold duration-200 group-hover:-translate-y-1">
        {user.name}
      </span>
      <span className="mb-5 rounded-full bg-white px-3 py-2 text-sm font-semibold duration-200 group-hover:-translate-y-1 dark:bg-zinc-600">
        {user.score.toLocaleString()}
      </span>

      {/* Podium */}
      {children}
    </div>
  )
}
