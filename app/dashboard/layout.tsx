import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import Logo from "@/components/Logo/Logo";
import QuickNavigation from "@/components/Navigation/QuickNavigation/QuickNavigation";
import DarkModeBtn from "@/components/Buttons/DarkMode";
import Sidebar from "@/components/Navigation/Sidebar/Sidebar";

async function getTimeData() {
  const res = await fetch("https://api.sunrisesunset.io/json?lat=45&lng=25");
  return res.json();
}

const convertTime12to24 = (time12h: any) => {
  const [time, modifier] = time12h.split(" ");

  let [hours] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return hours;
};

export default async function DashboardLayout({ children }: any) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }
  const timeData = await getTimeData();
  const sunrise = convertTime12to24(timeData.results.sunrise);
  const sunset = convertTime12to24(timeData.results.sunset);
  return (
    <div className="w-full min-h-screen flex flex-col">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-[75px] lg:hidden">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className="flex lg:hidden">
            <Logo size={75} />
          </div>
          <AuthButton />
          <DarkModeBtn sunset={sunset} sunrise={sunrise}></DarkModeBtn>
        </div>
      </nav>

      <main className="flex bg-[#fafafa] flex-grow">
        <Sidebar user={user} />
        <div className="p-4 bg-[#fafafa] md:p-10 h-full lg:max-w-[110rem] lg:mx-auto w-full">
          {children}
        </div>
      </main>

      <footer className="w-full h-full border-t border-t-foreground/10 flex justify-center text-center text-xs lg:hidden">
        <QuickNavigation />
      </footer>
    </div>
  );
}
