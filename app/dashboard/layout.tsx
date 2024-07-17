import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import DeployButton from '@/components/DeployButton'
import AuthButton from '@/components/AuthButton'
import Logo from '@/components/Logo/Logo'
import QuickNavigation from '@/components/Navigation/QuickNavigation/QuickNavigation'
import DarkModeBtn from '@/components/Buttons/DarkMode'
import Sidebar from '@/components/Navigation/Sidebar/Sidebar'

async function getTimeData() {
  const res = await fetch('https://api.sunrisesunset.io/json?lat=45&lng=25')
  return res.json()
}

const convertTime12to24 = (time12h: any) => {
  const [time, modifier] = time12h.split(' ')

  let [hours] = time.split(':')

  if (hours === '12') {
    hours = '00'
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12
  }

  return hours
}

export default async function DashboardLayout({ children }: any) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }
  const timeData = await getTimeData()
  const sunrise = convertTime12to24(timeData.results.sunrise)
  const sunset = convertTime12to24(timeData.results.sunset)
  return (
    <div>
      <nav className="border-b-foreground/10 flex h-[75px] w-full justify-center border-b lg:hidden">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <div className="flex lg:hidden">
            <Logo size={75} />
          </div>
          <AuthButton />
          <DarkModeBtn sunset={sunset} sunrise={sunrise}></DarkModeBtn>
        </div>
      </nav>

      <div className="flex bg-[#fafafa] dark:bg-gray-800">
        <Sidebar user={user} sunset={sunset} sunrise={sunrise} />
        <div className="mb-10 h-full w-full bg-[#fafafa] p-4 dark:bg-gray-800 md:p-10 lg:mx-auto lg:mb-0 lg:max-w-7xl">
          {children}
        </div>
      </div>

      <footer className="border-t-foreground/10 flex h-full w-full justify-center border-t text-center text-xs lg:hidden">
        <QuickNavigation />
      </footer>
    </div>
  )
}
