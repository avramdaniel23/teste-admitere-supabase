"use client";
import PastQuizzes from "@/components/PastQuizzes/PastQuizzes";
import PStats from "@/components/PastQuizzes/PStats";
import getUser from "@/libs/getUser/getUser";
import { Stats } from "fs";
import Link from "next/link";
import {useEffect, useState} from "react";
import {facultati} from "@/libs/profileSettingsOpions/profileSettingsOptions";
import {judete} from "@/libs/profileSettingsOpions/judeteOptions";
import {createClient} from "@/utils/supabase/client";

export default function Profile() {
    const supabase = createClient();
    const [user, setUser] = useState<any>(null);
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [userClass, setUserClass] = useState<string>("");
    const [highschool, setHighschool] = useState<string>("");
    const fetchUser = async () => {
        const {
            data: { user },
            error,
        } = await supabase.auth.getUser();
        if (error) {
            console.error("Error fetching user:", error);
        } else {
            setUser(user);
            setEmail(user?.email || "");
            setFirstName(user?.user_metadata?.firstName || "");
            setLastName(user?.user_metadata?.lastName || "");
            setPhone(user?.user_metadata?.phone || "");
            setUserClass(user?.user_metadata?.userClass || "");
            setHighschool(user?.user_metadata?.highschool || "");
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);


  return (
    <section>
      <h1 className="text-[36px] font-[900] w-full text-center">Profil</h1>

      <div className="mt-16 gap-8 bg-gradient-to-tr from-blue-600 to-cyan-600 text-white text-xl rounded-xl border-2 shadow-lg p-4">
          <div className={"justify-end w-full flex"}>
              <Link href="/dashboard/profile/profileSettings">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
              </svg>
              </Link>
          </div>
          <div className={"grid md:grid-cols-2 gap-8"}>
              <div><span className={"font-bold"}>Prenume: </span> <span>{firstName}</span></div>
              <div><span className={"font-bold"}>Nume: </span> {lastName}</div>
              <div><span className={"font-bold"}>Email: </span> {email}</div>
              <div><span className={"font-bold"}>Telefon: </span>{phone}</div>
              <div><span className={"font-bold"}>Liceu: </span>{highschool}</div>
              <div><span className={"font-bold"}>Clasa: </span>{userClass}</div>
          </div>
      </div>


        <div className={"p-8 bg-gradient-to-tr from-blue-600 to-cyan-600 rounded-lg space-y-8 text-white my-8"}>
            <h2 className={"font-bold text-2xl"}>Statistici:</h2>
            <div className={"flex w-full justify-between text-xl px-2"}>
                <span>Scor</span>
                <span>{9999}</span>
            </div>
            <div className={"flex w-full justify-between text-xl px-2"}>
                <span>Teste finalizate</span>
                <span>{2}</span>
            </div>
        </div>
        <div>
            {/*<Link href="/dashboard/profile/past-quizzes">*/}
            {/*    <div className={"text-lg font-bold"}>Past Quizzes</div>*/}
            {/*</Link>*/}
            <div className={"bg-gradient-to-r from-blue-600 to-cyan-600 space-y-8  p-4 rounded-lg mb-16"}>
                <h2 className={"font-bold text-2xl  text-white"}>Teste finalizate:</h2>
                <PastQuizzes/>
            </div>
        </div>
      {/*  <div>*/}
      {/*      <Link href="/dashboard/profile/stats">*/}
      {/*    <div>Stats</div>*/}
      {/*  </Link>*/}
      {/*  <Link href="/dashboard/profile/profileSettings">*/}
      {/*    <div>Settings</div>*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </section>
  );
}
