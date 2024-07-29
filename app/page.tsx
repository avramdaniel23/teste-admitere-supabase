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
import Link from "next/link";

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
    <div className="flex-1 w-full flex flex-col items-center mb-[50px]">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <Image
          src="/upb.png"
          alt="Logo Politehnica"
          width={75}
          height={75}
          className="mx-8 "
        ></Image>
        <div className="w-full flex justify-end items-end p-3 text-sm mx-8">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 100"
        fill="#1C6EFF"
      >
        <path
          d="M500 80.7C358 68 0 4 0 4V0h1000v84.7c-216 23.3-358 8.6-500-4Z"
          opacity=".4"
        ></path>
        <path
          d="M500 65.7C358 53 0 4 0 4V0h1000v62.7c-216 23.3-358 15.6-500 3Z"
          opacity=".6"
        ></path>
        <path d="M500 50.7C358 38 0 4 0 4V0h1000v40.7C784 64 642 63.3 500 50.7Z"></path>
      </svg>
      <main className="w-full">
        <section className=" flex items-center justify-center max-w-[90%] mx-auto">
          <span className=" w-full lg:w-[90%] md:text-left lg:text-left ">
            <h1 className="flex items-left justify-center md:text-[3rem] text-[2rem] lg:text-[4rem] xl:text-[6rem] font-bold border-2 rounded-full bg-blue-300 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[550px] mt-3">
              Exerseaza{" "}
            </h1>

            <div className="block xl:flex justify-around mt-12 xl:mt-20 ">
              <div className="pt-8 pr-8 text-left ">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950'>
                  Descriere site
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </p>
              </div>
            </div>

            <a href="/dashboard">
              <button className="flex border border-b-4 px-6 py-4 mt-4 items-center justify-center rounded-lg hover:border-b-`blue-400 font-semibold mx-auto bg-blue-300">
                Hai sa Incepem
              </button>
            </a>
            <div className="md:grid md:grid-cols-2 mt-6 relative p-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1600 900"
                className="hidden md:flex w-full h-full z-[-1] md:absolute "
              >
                <rect fill="#FFFFFF" width="1600" height="900" />
                <defs>
                  <linearGradient
                    id="a"
                    x1="0"
                    x2="0"
                    y1="1"
                    y2="0"
                    gradientTransform="rotate(134,0.5,0.5)"
                  >
                    <stop offset="0" stop-color="#38B3FF" />
                    <stop offset="1" stop-color="#C995FF" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                    gradientTransform="rotate(32,0.5,0.5)"
                  >
                    <stop offset="0" stop-color="#716BFF" />
                    <stop offset="1" stop-color="#B7E8FF" />
                  </linearGradient>
                </defs>
                <g fill="#FFF" fill-opacity="0" stroke-miterlimit="10">
                  <g stroke="url(#a)" stroke-width="12.54">
                    <path
                      transform="translate(-8.4 -4.8) rotate(-4.8 1409 581) scale(0.964)"
                      d="M1409 581 1450.35 511 1490 581z"
                    />
                    <circle
                      stroke-width="4.18"
                      transform="translate(-30 12) rotate(-2.4 800 450) scale(0.994)"
                      cx="500"
                      cy="100"
                      r="40"
                    />
                    <path
                      transform="translate(-8.4 18) rotate(-30 401 736) scale(0.994)"
                      d="M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z"
                    />
                  </g>
                  <g stroke="url(#b)" stroke-width="3.8">
                    <path
                      transform="translate(72 7.2) rotate(-1.8 150 345) scale(1.012)"
                      d="M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z"
                    />
                    <rect
                      stroke-width="8.36"
                      transform="translate(18 -36) rotate(-43.2 1089 759)"
                      x="1039"
                      y="709"
                      width="100"
                      height="100"
                    />
                    <path
                      transform="translate(-4.8 -4.8) rotate(-7.2 1400 132) scale(0.94)"
                      d="M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z"
                    />
                  </g>
                </g>
              </svg>

              <div className="pt-8 pr-8 text-left ml-3 ">
                <h2 className="font-bold relative pb-4 uppercase before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950 ml-3 ">
                  Title
                </h2>
                <p className="pl-3 border-r-2 border-b-2 backdrop-blur-sm shadow-md border-l-2 md:border-l-0 pb-3 md:pb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left ml-3">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950 ml-3'>
                  Title
                </h2>
                <p className="pl-3 border-l-2 border-b-2 backdrop-blur-sm shadow-md border-r-2 md:border-r-0 pb-3 md:pb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left ml-3">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950 ml-3 '>
                  Title
                </h2>
                <p className="pl-3 border-r-2 border-b-2 backdrop-blur-sm shadow-md border-l-2 md:border-l-0 pb-3 md:pb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
              <div className="pt-8 pr-8 text-left ml-3">
                <h2 className='font-bold relative pb-4 uppercase before:content-[""] before:w-[25px] before:h-[3px] before:absolute before:top-[-15%] before:left-0 before:bg-orange-950 ml-3 '>
                  Title
                </h2>
                <p className="pl-3 border-l-2 border-b-2 backdrop-blur-sm shadow-md border-r-2 md:border-r-0 pb-3 md:pb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </span>
        </section>

        <section className=" mt-20 max-w-[90%] mx-auto text-center ">
          <div className="flex items-center justify-center">
            <div className="h-1 w-[40%] py-2 px-2 bg-gradient-to-r from-[#0172F0] from-0% to-white to-[85%]"></div>
            <div className="flex items-center justify-center md:text-[1.5rem] lg:text-[2rem] border-2 rounded-full border-blue-400 font-bold text-[1.5rem] md:w-[20%]  md:h-16 p-1">
              Ce oferim?
            </div>
            <div className="h-1 w-[40%] py-2 px-2 bg-gradient-to-r from-white from-15% to-[#0172F0]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 ">
            <div className=" text-left border-2 rounded-lg mb-3 hover:shadow-blue-300 shadow-lg">
              <h2 className=' font-bold ps-[20px] relative pb-4 uppercase before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:top-[16%] before:left-1 before:bg-[#030303] mt-3'>
                Quizzuri
              </h2>
              <p className="ml-3 pb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className=" text-left border-2 rounded-lg mb-3 hover:shadow-blue-300 shadow-lg">
              <h2 className='font-bold ps-[20px] relative pb-4 uppercase before:content-[""] before:w-[10px] before:h-[10px] before:absolute before:top-[16%] before:left-1 before:bg-[#030303] mt-3'>
                Nu stiu sefu
              </h2>
              <p className="ml-3 pb-3">
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
