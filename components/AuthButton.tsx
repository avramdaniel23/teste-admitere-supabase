import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
<<<<<<< HEAD
    <div className="flex items-center gap-4 lg:flex-col">
      <div className="p-0 m-0 lg:hidden">Hey, {user.email}!</div>
=======
    <div className="flex items-center gap-4">
>>>>>>> main
      <form action={signOut}>
        <div className="flex flex-row items-center w-full">
          <svg className="hidden size-6 lg:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover lg:contents">
            Logout
          </button>
        </div>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
      Login
    </Link>
  );
}
