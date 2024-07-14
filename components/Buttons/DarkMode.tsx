'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { hasCookie, setCookie } from 'cookies-next'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface DarkModeBtnType {
  sunrise: number
  sunset: number
  children?: React.ReactNode
}

const DarkModeBtn = ({ sunrise, sunset, children }: DarkModeBtnType) => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const date = new Date()
  const hour = date.getHours()
  useEffect(() => {
    if (!hasCookie('prefferedTheme')) {
      if (hour >= sunrise && hour < sunset) {
        setTheme('light')
        setCookie('prefferedTheme', 'true', {})
      } else {
        setTheme('dark')
        setCookie('prefferedTheme', 'true', {})
      }
    }
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="relative">
      <Menu>
        <div>
          <MenuButton className="flex items-center">
            {currentTheme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#currentColor"
                className="size-7 stroke-slate-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
                stroke="#currentColor"
                className="size-7 stroke-slate-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
            {children}
          </MenuButton>
        </div>
        <div className="z-[101] rounded-lg bg-white dark:bg-[#1E293B]">
          <MenuItems>
            <div className="absolute right-0 top-10 z-[101] flex w-[9rem] flex-col rounded-lg border bg-white p-2 text-[0.875rem] font-bold shadow-[0px_2px_8px_0_rgba(0,99,99,0.2)] dark:border-none lg:left-0">
              <MenuItem>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${active && 'text-neon-blue'}`}
                    onClick={() => {
                      setTheme('light')
                    }}
                  >
                    <div className="flex py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        className={
                          theme === 'light'
                            ? 'mr-2 h-6 w-6 stroke-neon-blue'
                            : 'mr-2 h-6 w-6 stroke-slate-400 dark:stroke-slate-500'
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                      <p
                        className={
                          theme === 'light'
                            ? 'text-neon-blue'
                            : 'text-slate-700 dark:text-[#CBD5E1]'
                        }
                      >
                        Light
                      </p>
                    </div>
                  </button>
                )}
              </MenuItem>
              <MenuItem>
                <button
                  type="button"
                  className="text-neon-blue"
                  onClick={() => {
                    setTheme('dark')
                  }}
                >
                  <div className="flex py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      className={
                        theme === 'dark'
                          ? 'mr-2 h-6 w-6 stroke-neon-blue'
                          : 'mr-2 h-6 w-6 stroke-slate-400 dark:stroke-slate-500'
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                    <p
                      className={
                        theme === 'dark'
                          ? 'text-neon-blue'
                          : 'text-slate-700 dark:text-[#CBD5E1]'
                      }
                    >
                      Dark
                    </p>
                  </div>
                </button>
              </MenuItem>
              <MenuItem>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${active && 'text-neon-blue'}`}
                    onClick={() => {
                      setTheme('system')
                    }}
                  >
                    <div className="flex py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        className={
                          theme === 'system'
                            ? 'mr-2 h-6 w-6 stroke-neon-blue'
                            : 'mr-2 h-6 w-6 stroke-slate-400 dark:stroke-slate-500'
                        }
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        />
                      </svg>
                      <p
                        className={
                          theme === 'system'
                            ? 'text-neon-blue'
                            : 'text-slate-700 dark:text-[#CBD5E1]'
                        }
                      >
                        System
                      </p>
                    </div>
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </div>
      </Menu>
    </div>
  )
}
export default DarkModeBtn
