import { useMemo, useState } from 'react'

type LeaderboardNavProps = {}

const courses = [
  {
    name: 'Matematica',
    categories: ['Algebra', 'Geometrie', 'Trigonometrie'],
  },
  {
    name: 'Fizica',
    categories: ['Mecanica', 'Electricitate', 'Termodinamica', 'Optica'],
  },
  {
    name: 'Chimie',
    categories: ['Organica', 'Anorganica', 'Generala'],
  },
  {
    name: 'Biologie',
    categories: ['Anatomie', 'Genetica', 'Botanica', 'Zoologie'],
  },
  {
    name: 'Informatica',
  },
  {
    name: 'Economie',
  },
]

export default function LeaderboardNav({}: LeaderboardNavProps) {
  const [selectedNav, setSelectedNav] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectedCourse = useMemo(
    () => courses.find(course => course.name === selectedNav),
    [selectedNav],
  )
  return (
    <section>
      <div className="mb-5 overflow-x-auto rounded-lg bg-white shadow-md dark:bg-gray-700">
        <nav className="flex gap-0.5 p-2 md:justify-center">
          {courses.map(course => {
            const isActive = selectedNav === course.name
            return (
              <button
                onClick={() => setSelectedNav(course.name)}
                key={course.name}
                className={`${isActive ? 'bg-blue-600 text-white' : 'dark:hover:bg-gray-800'} flex cursor-pointer gap-1 rounded-lg px-4 py-2 font-semibold transition-colors dark:text-white`}
              >
                {course.name}
              </button>
            )
          })}
        </nav>
      </div>
      <div className="mb-5 overflow-x-auto rounded-lg bg-white shadow-md dark:bg-gray-700">
        {selectedNav && (
          <nav className="flex gap-0.5 p-2">
            {selectedCourse &&
              selectedCourse.categories &&
              selectedCourse?.categories.map(category => {
                const isActive = selectedCategory === category
                return (
                  <button
                    onClick={() => setSelectedCategory(category)}
                    key={category}
                    className={`${isActive ? 'bg-blue-600 text-white' : 'dark:hover:bg-gray-800'} flex cursor-pointer gap-1 rounded-lg px-4 py-2 font-semibold transition-colors dark:text-white`}
                  >
                    {category}
                  </button>
                )
              })}
          </nav>
        )}
      </div>

      <span className="flex h-10 justify-center text-xl font-semibold transition-all">
        {selectedNav}
      </span>
    </section>
  )
}
