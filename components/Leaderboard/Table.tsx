type TableProps = {
  users: {
    id: number
    name: string
    score: number
  }[]
}

export default function Table({ users }: TableProps) {
  return (
    <div className="max-h-[50vh] overflow-y-auto bg-white dark:bg-gray-700">
      <table className="min-w-full border-collapse">
        <tbody>
          {users.map(user => {
            const firstLetter = user.name[0].toLocaleUpperCase()
            return (
              <tr
                key={user.id}
                className="cursor-pointer border-b transition-colors hover:bg-blue-400 hover:text-white dark:hover:bg-blue-800"
              >
                <td className="p-4 text-center">
                  <span className="text-lg font-bold">{user.id}</span>
                </td>
                <td className="flex items-center p-4">
                  <div className="grid size-14 place-items-center rounded-full bg-white dark:bg-zinc-600">
                    <div className="grid size-12 place-items-center rounded-full bg-zinc-200 text-xl font-bold text-black dark:bg-zinc-800 dark:text-white">
                      {firstLetter}
                    </div>
                  </div>
                  <span className="ml-4 text-lg font-semibold">
                    {user.name}
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-lg font-semibold">
                    {user.score.toLocaleString()}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
