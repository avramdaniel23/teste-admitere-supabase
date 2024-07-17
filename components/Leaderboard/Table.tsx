type TableProps = {
  data: {
    id: number;
    name: string;
    score: number;
  }[];
};

export default function Table({ data }: TableProps) {
  return (
    <div className="font-semibold bg-stone-100 dark:bg-zinc-400 max-h-[50vh] overflow-y-auto">
      <table className="min-w-full border-collapse">
        <tbody>
          {data.slice(3).map((item) => {
            const firstLetter = item.name[0];
            return (
              <tr
                key={item.id}
                className="border-b cursor-pointer hover:bg-violet-200 dark:hover:bg-violet-300 transition-all hover:text-white dark:text-dark"
              >
                <td className="p-2 text-center ">
                  <span className="text-lg font-bold ">{item.id}</span>
                </td>
                <td className="flex items-center p-4 ">
                  <div className="size-12 flex items-center justify-center rounded-full bg-violet-400 dark:bg-violet-500 mr-4">
                    {firstLetter}{" "}
                  </div>
                  <span className="text-lg">{item.name}</span>
                </td>
                <td className="p-4">
                  <span className="text-lg font-semibold">
                    {item.score.toLocaleString()}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
