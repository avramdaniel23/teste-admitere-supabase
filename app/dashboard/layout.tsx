import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import Logo from "@/components/Logo/Logo";
import QuickNavigation from "@/components/Navigation/QuickNavigation";

export default async function DashboardLayout({ children }: any) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-auto">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <Logo size={75} />
          <AuthButton />
        </div>
      </nav>

      <main className="h-full flex-1">{children}</main>

      <footer className="w-full border-t border-t-foreground/10 flex justify-center text-center text-xs">
        <QuickNavigation></QuickNavigation>
      </footer>
    </div>
  );
}
