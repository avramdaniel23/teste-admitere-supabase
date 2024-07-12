import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import Logo from "@/components/Logo/Logo";
import QuickNavigation from "@/components/Navigation/QuickNavigation/QuickNavigation";
import DarkModeBtn from "@/components/Buttons/DarkMode";
import SidebarNavigation from "@/components/Navigation/QuickNavigation/SidebarNavigation";
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
      <div className="flex-1 w-full flex flex-col items-center lg:h-full lg:p-[1em] rounded">
          {/*<div className={"fixed bg-green-500 left-0 z-30 top-1/2 w-[18em] h-[10px]"}></div>*/}
          {/*<div className={"fixed bg-yellow-500 left-0 z-20 top-1/2 w-1/5 h-[10px]"}></div>*/}
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-[75px] lg:hidden ">
              <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                  <div className="flex lg:hidden ">
                      <Logo size={75}/>
                  </div>
                  <AuthButton/>
                  <DarkModeBtn sunset={sunset} sunrise={sunrise}></DarkModeBtn>
              </div>
          </nav>
          <div className="w-full flex">
              <aside
                  //TODO: Sidebar Animation
                  //TODO: Move open login from child here
                  className="border-t border-t-foreground/10 hidden lg:flex mr-[1em]  sticky top-0 justify-center text-center text-xs bg-green-500 h-svh transition-all duration-300">
                  <SidebarNavigation sunset={sunset} sunrise={sunrise}/>
              </aside>
              <main className=" h-full flex-1 w-full py-20 px-8 lg:py-2 lg:mx-auto  rounded-lg">
                  {children}
              </main>

              <footer
                  className="w-full h-fit border-t border-t-foreground/10 flex justify-center text-center text-xs lg:hidden fixed lg:-z-10 bottom-0 lg:left-0 mt-10 lg:mt-0 lg:bottom-auto">
                  <QuickNavigation/>
              </footer>
          </div>


      </div>
  );
}
