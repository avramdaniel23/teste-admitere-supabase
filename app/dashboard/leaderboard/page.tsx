import LeaderboardNav from '@/components/Leaderboard/LeaderboardNav'
import Podium from '@/components/Leaderboard/Podium'
import Table from '@/components/Leaderboard/Table'

const users = [
  {
    id: 1,
    name: 'Girbi',
    score: 5000,
  },
  {
    id: 2,
    name: 'Alex',
    score: 4000,
  },
  {
    id: 3,
    name: 'Tibi',
    score: 3000,
  },
  {
    id: 4,
    name: 'Teo',
    score: 2846,
  },
  {
    id: 5,
    name: 'Theresa',
    score: 2472,
  },
  {
    id: 6,
    name: 'Jamel',
    score: 2186,
  },
  {
    id: 7,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 8,
    name: 'Cineva',
    score: 1956,
  },
  {
    id: 9,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 10,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 11,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 12,
    name: 'Leif',
    score: 1956,
  },
  {
    id: 13,
    name: 'Leif',
    score: 1956,
  },
]

export default function Leaderboard() {
  return (
    <section>
      <LeaderboardNav />
      <Podium users={users.slice(0, 3)} />
      <Table users={users.slice(3)} />
    </section>
  )
}
