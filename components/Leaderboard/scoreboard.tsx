export default function Scoreboard() {
  return (
    <table className="min-w-full font-semibold border-collapse bg-white rounded-b-lg shadow-lg">
      <tbody>
        <tr className="border-b">
          <td className="text-end px-6">4</td>
          <td className="text-center flex items-center w-full p-3 gap-4">
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
            Gogu
          </td>
          <td className="p-4 text-start">678</td>
        </tr>
        <tr className="border-b">
          <td className="text-end px-6">5</td>
          <td className="text-center flex items-center w-full p-3 gap-4">
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
            Bula
          </td>
          <td className="p-4 text-start">535</td>
        </tr>
        <tr>
          <td className="text-end px-6">6</td>
          <td className="text-center flex items-center w-full p-3 gap-4">
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
            Bahoi
          </td>
          <td className="p-4 text-start">402</td>
        </tr>
      </tbody>
    </table>
  );
}
