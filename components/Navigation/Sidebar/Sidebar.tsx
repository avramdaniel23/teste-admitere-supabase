'use client'
import Logo from '@/components/Logo/Logo'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import DarkModeBtn from '@/components/Buttons/DarkMode'

export default function Sidebar({
  user,
  sunrise,
  sunset,
}: {
  user: User | null
  sunrise: number
  sunset: number
}) {
  const [isExpanded, setIsExpanded] = useState(true)

  const name = user?.email?.split('@')[0]
  const username = name && name[0].toUpperCase() + name.slice(1)

  return (
    <aside className="relative hidden lg:block h-screen bg-white shadow-lg z-10">
      <div className="flex h-full flex-col items-center p-4 pb-2 gap-7">
        <div
          className={`flex h-[72px] w-full items-center ${
            isExpanded ? 'justify-between' : 'justify-center'
          }`}>
          <Link href="/dashboard">
            <Image
              src="/upb.png"
              alt="Logo Politehnica"
              width={100}
              height={100}
              className={`overflow-hidden transition-all ${
                isExpanded ? 'w-[60px]' : 'w-0'
              }`}
            />
          </Link>
          <button
            onClick={() => setIsExpanded(state => !state)}
            className="p-2 rounded-lg bg-white hover:bg-zinc-300 transition-colors duration-75">
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-7">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M15 3v18" />
                <path d="m10 15-3-3 3-3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="size-7">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M15 3v18" />
                <path d="m8 9 3 3-3 3" />
              </svg>
            )}
          </button>
        </div>
        <nav className="h-full flex flex-col justify-between items-center">
          <ul className="flex flex-col gap-4">
            <SidebarItem
              href="/dashboard/notifications"
              isExpanded={isExpanded}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 transition-colors">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                  />
                </svg>
              }>
              Notifications
            </SidebarItem>

            <SidebarItem
              href="/dashboard/leaderboard"
              isExpanded={isExpanded}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 transition-colors">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              }>
              Leaderboard
            </SidebarItem>

            <SidebarItem
              href="/dashboard/quizzes"
              isExpanded={isExpanded}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 transition-colors">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
              }>
              Quizzes
            </SidebarItem>

            <SidebarItem
              href="/dashboard/community"
              isExpanded={isExpanded}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 transition-colors">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              }>
              Community
            </SidebarItem>
          </ul>
          <div className="relative group flex rounded-lg p-3">
            <Link
              href="/dashboard/profile"
              className="bg-neon-blue/30 transition-colors hover:bg-neon-blue/60 px-4 py-2 text-xl rounded-lg grid place-items-center">
              {username?.at(0)}
            </Link>
            {!isExpanded && (
              <div
                className={`absolute z-20 left-full rounded-md p-2 ml-7 text-sm
          invisible opacity-20 -translate-x-3 bg-blue-200 text-black transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 font-semibold`}>
                Profile
              </div>
            )}
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                isExpanded ? 'w-52 ml-3' : 'w-0'
              }`}>
              <div className="leading-4">
                <h4 className="font-semibold">{username}</h4>
                <span className="text-xs text-gray-600">{user?.email}</span>
              </div>
              <button className="hover:bg-zinc-300 transition-colors p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="size-5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}

export function SidebarItem({
  icon,
  href,
  children,
  isExpanded,
}: {
  icon: React.ReactNode
  href: string
  children: React.ReactNode
  isExpanded: boolean
}) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <li>
      <Link
        href={href}
        className={`relative flex items-center py-2 px-3
        font-semibold rounded-md
        transition-colors duration-75 group ${
          isActive ? 'bg-neon-blue/20' : 'hover:text-neon-blue'
        }`}>
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            isExpanded ? 'w-52 ml-3' : 'w-0'
          }`}>
          {children}
        </span>

        {!isExpanded && (
          <div
            className={`absolute z-20 left-full rounded-md p-2 ml-7 text-sm
          invisible opacity-20 -translate-x-3 bg-blue-200 text-black transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
            {children}
          </div>
        )}
      </Link>
    </li>
  )
}
