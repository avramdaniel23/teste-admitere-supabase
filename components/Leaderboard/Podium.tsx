type PodiumProps = {
  users: {
    id: number
    name: string
    score: number
  }[]
}

export default function Podium({ users }: PodiumProps) {
  return (
    <div className="flex items-end justify-center gap-2 rounded-t-lg bg-slate-300 pt-4 dark:bg-slate-900">
      <PodiumUser
        user={users[1]}
        podiumClass="top-second"
        medalClass="silver"
      />
      <PodiumUser user={users[0]} podiumClass="top-first" medalClass="gold" />
      <PodiumUser user={users[2]} podiumClass="top-third" medalClass="bronze" />
    </div>
  )
}

function PodiumUser({
  user,
  podiumClass,
  medalClass,
}: {
  user: {
    id: number
    name: string
    score: number
  }
  podiumClass: 'top-first' | 'top-second' | 'top-third'
  medalClass: 'silver' | 'gold' | 'bronze'
}) {
  const topMap = {
    'top-first': {
      height: 'h-44',
      translate: 'group-hover:-translate-y-[4.4px]',
    },
    'top-second': {
      height: 'h-32',
      translate: 'group-hover:-translate-y-[3.2px]',
    },
    'top-third': {
      height: 'h-24',
      translate: 'group-hover:-translate-y-[2.5px]',
    },
  }
  const medalMap = {
    silver: '2',
    gold: '1',
    bronze: '3',
  }
  const top = topMap[podiumClass]
  const medalNumber = medalMap[medalClass]
  const firstLetter = user.name[0].toLocaleUpperCase()

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

      {/* Podium cube */}
      <div
        className={`cube-container w-24 ${top.height} ${top.translate} duration-200 group-hover:scale-y-105`}
      >
        <div className="cube size-full transition-colors">
          <figure
            className={`${podiumClass} absolute h-20 bg-blue-400 transition-colors group-hover:bg-blue-500 dark:bg-blue-500 group-hover:dark:bg-blue-400`}
          ></figure>
          <figure className="absolute flex h-full w-24 justify-center bg-blue-500 transition-colors group-hover:bg-blue-700 dark:bg-blue-700 group-hover:dark:bg-blue-600">
            {/* Medal */}
            <div className="relative mt-2">
              <div
                className={`quiz-medal__circle quiz-medal__circle--${medalClass}`}
              >
                <span>{medalNumber}</span>
              </div>
              <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
              <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  )
}
