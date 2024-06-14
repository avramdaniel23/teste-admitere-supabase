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
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full flex justify-end items-center p-3 text-sm mx-8">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <main className="w-full">
        <section className="flex justify-between max-w-[90%] mx-auto ">
          <span className=" w-full lg:w-[70%] text-center lg:text-left ">
            <h1 className="text-[3rem] lg:text-[4rem] xl:text-[6rem] font-bold  ">
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
          <Image
            src="/twitter-image.png"
            width={400}
            height={400}
            alt=""
            className="hidden lg:flex"
          />
        </section>

        <section className=" mt-24 max-w-[70%] mx-auto text-center ">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-[900] uppercase ">
            Ce oferim?
          </h1>
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className=" text-left  ">
              <h2 className='font-bold ps-[20px] relative pb-4 uppercase before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:top-[16%] before:left-0 before:bg-[#0172F0] '>
                Title
              </h2>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className=" text-left ">
              <h2 className='font-bold ps-[20px] relative pb-4 uppercase before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:top-[16%] before:left-0 before:bg-[#0172F0] '>
                Title
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className=" text-left ">
              <h2 className='font-bold ps-[20px] relative pb-4 uppercase before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:top-[16%] before:left-0 before:bg-[#0172F0] '>
                Title
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="  text-left ">
              <h2 className='font-bold ps-[20px] relative pb-4 uppercase before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:top-[16%] before:left-0 before:bg-[#0172F0] '>
                Title
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
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
