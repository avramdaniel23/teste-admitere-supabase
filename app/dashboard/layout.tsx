import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import Logo from "@/components/Logo/Logo";
import QuickNavigation from "@/components/Navigation/QuickNavigation/QuickNavigation";
import DarkModeBtn from "@/components/Buttons/DarkMode";
import DesktopQuickNavigation from "@/components/Navigation/QuickNavigation/DesktopQuickNavigation";

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
    <div className="flex-1 w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-[75px] lg:hidden ">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <div className="flex lg:hidden ">
            <Logo size={75} />
          </div>
          <AuthButton />
          <DarkModeBtn
            sunset={sunset}
            sunrise={sunrise}
            isOpen={true}
          ></DarkModeBtn>
        </div>
      </nav>

      <div className="flex flex-1 w-full h-full ">
        <aside>
          <DesktopQuickNavigation sunrise={sunrise} sunset={sunset} />
        </aside>
        <main className="h-full  flex-1 w-full p-4 md:p-10 lg:max-w-7xl lg:mx-auto bg-[#fafafa] dark:bg-dark transition-all duration-200">
          {children}
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 block justify-center text-center text-xs lg:hidden">
        <QuickNavigation />
      </footer>
    </div>
  );
}
