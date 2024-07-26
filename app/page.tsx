import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import Faq from "@/components/HomepageComp/Faq";
import ContactHP from "@/components/HomepageComp/Contact";

import Oferim from "@/components/HomepageComp/Oferim";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center mb-[50px]">
      <nav className="flex w-full justify-center shadow-md h-16">
        <div className="w-[90%] flex justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <h1 className="flex text-3xl font-bold font-mono text-slate-800"><div className="flex items-center justify-center bg-slate-800 w-[36px] h-[36px] rounded-full text-white">E</div>xerseaza</h1>
            <div className="w-[95%] h-[3px] bg-blue-400 rounded-full"></div>
            <div className="w-[80%] h-[3px] bg-blue-300 rounded-full"></div>
          </div>
          <div className="flex justify-end items-center p-3 text-sm mx-8">
            {isSupabaseConnected && <AuthButton />}
          </div>
        </div>
      </nav>
      <main className="w-full">
        <section className="flex justify-between max-w-[90%] mx-auto ">
          <span className=" w-full lg:w-[70%] text-center lg:text-left bg-zinc-200 rounded-xl p-6">
            <h1 className="text-[3rem] lg:text-[4rem] xl:text-[6rem] font-bold">
              Hai sa te{" "}
            </h1>
            <h1 className="text-[3rem] lg:text-[4rem]  xl:text-[6rem] font-[900] uppercase lg:ml-20 xl:ml-64  ">
              exersez!!
            </h1>
            <div className="block xl:flex justify-around mt-12 xl:mt-20 ">
              <div className="pt-8 pr-8 text-left ">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950  '>
                  Title
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left ">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950  '>
                  Title
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left ">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950  '>
                  Title
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </span>
          <div className="w-full h-auto bg-gray-300 rounded-xl">
          <Image src="./images/study.svg" alt="Icon" width={36} height={36} />
          </div>
        </section>

        <section className=" mt-24 max-w-[70%] mx-auto text-center ">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-[900] uppercase ">
            Ce oferim?
          </h1>
          <div className="relative flex flex-col gap-6">
            <Oferim />
          </div>
        </section>
        <Faq />
        <ContactHP />
      </main>

      {/* <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main>
      </div> */}
    </div>
  );
}
