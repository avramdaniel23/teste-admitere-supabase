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
import QuestionCard from "@/components/Quizz/QuestionCard";
import Logo from "@/components/Logo/Logo";

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
    <div className="flex-1 w-full flex flex-col  items-center mb-[50px]">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full flex justify-end items-center p-3 text-sm mx-8">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <main className="w-full">
        <section className="flex flex-col items-center  py-5  bg-[#FFF1DB] ">
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col">
              <div className="relative border-2    flex items-center border-l-0  rounded-r-full w-fit border-black px-2 lg:px-20 bg-blue-200   shadow-lg ">
                <Logo size={80} />
                <h1 className="text-[2rem] lg:text-[3rem] xl:text-[3rem] font-bold ml-12 mr-12    ">
                  Exerseaza
                </h1>

                {/* <div className="absolute -bottom-5 right-16 shadow-xl bg-white border-2 border-black rounded-lg p-1">
                  peste 2000 de intrebari
                </div> */}
              </div>

              <div className="mt-6  p-5    md:w-[80%] flex flex-col items-center justify-center">
                <p className="text-lg  text-center  ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <button className="mt-5 rounded-lg text-white p-2 px-8 bg-violet-500 hover:bg-violet-700 w-fit">
                  Incepe acum
                </button>
              </div>
            </div>
            <div className=" m-5 p-2 rounded-xl md:mr-12 flex justify-center border border-slate-400 shadow-lg">
              {/* <img
                className="rounded-full object-scale-down shadow-lg border w-full"
                src="https://cdn.dribbble.com/users/2498386/screenshots/14369094/media/dadb16b2ce2998e6bf525de37a7b88a4.png?resize=1600x1200&vertical=center"
              /> */}

              <div>
                <img
                  className="object-scale-down shadow-lg border  rounded-lg"
                  src="https://cdn.dribbble.com/users/2498386/screenshots/14369094/media/dadb16b2ce2998e6bf525de37a7b88a4.png?resize=1600x1200&vertical=center"
                />

                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-purple-200 p-2 rounded-lg">hai</div>
                  <div className="bg-purple-200 p-2 rounded-lg">sa </div>
                  <div className="bg-purple-200 p-2 rounded-lg">te</div>
                  <div className="bg-purple-200 p-2 rounded-lg">exersez</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="currentcolor"
          className="text-[#FFF1DB]"
        >
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
            opacity=".5"
          ></path>
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
            opacity=".5"
          ></path>
          <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
        </svg>

        <section className="flex justify-center max-w-[90%] mx-auto py-8 ">
          <span className=" w-full lg:w-[90%] text-center lg:text-left ">
            <div className="block xl:flex justify-around mt-5 xl:mt-5 ">
              <div className="pt-8 pr-8 text-left hover:text-blue-600 cursor-pointer transition-all duration-300">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950  '>
                  Matematica
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left hover:text-blue-600 cursor-pointer transition-all duration-300">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950  '>
                  Informatica
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left  hover:text-blue-600 cursor-pointer transition-all duration-300">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950  '>
                  Fizica
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left  hover:text-blue-600 cursor-pointer transition-all duration-300">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950  '>
                  Chimie
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </span>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="currentcolor"
          className="text-[#FFF1DB] -scale-100"
        >
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
            opacity=".5"
          ></path>
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
            opacity=".5"
          ></path>
          <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
        </svg>

        <section className="   mx-auto text-center flex flex-col justify-center items-center bg-[#FFF1DB] ">
          <div className="w-full flex justify-end">
            <div className=" border-2 border-r-0  rounded-l-full w-fit border-black px-8 bg-blue-200">
              <h1 className="text-[2rem] lg:text-[4rem] xl:text-[3rem] font-bold   ">
                Ce oferim?
              </h1>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 pb-12 max-w-[70%]  ">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="currentcolor"
          className="text-[#FFF1DB] "
        >
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
            opacity=".5"
          ></path>
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
            opacity=".5"
          ></path>
          <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
        </svg>

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
