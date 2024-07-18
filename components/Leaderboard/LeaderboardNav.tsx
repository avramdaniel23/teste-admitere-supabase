type LeaderboardNavProps = {}

const courses = [
  {
    name: 'Matematica',
    categories: ['Algebra', 'Geometrie'],
  },
  {
    name: 'Chimie',
    categories: ['Algebra', 'Geometrie'],
  },
  {
    name: 'Fizica',
  },
  {
    name: 'Fizica',
  },
  {
    name: 'Fizica',
  },
  {
    name: 'Fizica',
  },
]

export default function LeaderboardNav({}: LeaderboardNavProps) {
  return (
    <div className="mb-5 overflow-x-auto rounded-lg dark:bg-gray-700">
      <nav className="flex gap-1 p-2">
        {courses.map(course => (
          <button
            key={course.name}
            className="flex flex-shrink-0 cursor-pointer gap-1 rounded-full px-4 py-2 text-white transition-colors dark:hover:bg-gray-800"
          >
            {course.name}
            {course.categories && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}
