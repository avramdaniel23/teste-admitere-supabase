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
    <div className="flex-1 w-full flex flex-col items-center">
      <nav className="flex items-center w-full border-b border-b-foreground/10 h-24 mb-0">
        <div className="w-full flex justify-between items-center p-3 text-sm mx-2">
          {isSupabaseConnected && (
            <div className="flex items-center">
              <Link className="font-bold text-xl" href={"/dashboard"}>Dashboard</Link>
            </div>
          )}
          {isSupabaseConnected && (
            <div className="flex self-end">
              <AuthButton />
            </div>
          )}
        </div>
      </nav>
      <main className="w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:24px_24px]">
        <section className="max-w-[90%] mx-auto">
          <span className="lg:w-[70%] text-center">
          <div className="border-b-2 border-gray-400">
            <h1 className=" text-[4rem] md:text-[8rem] lg:text-[12rem] text-purple-500 italic font-serif">
              Exersează!
            </h1>
          </div>
          <img className="w-full" src="https://png.pngtree.com/background/20230422/original/pngtree-aesthetic-science-and-technology-plane-minimalist-background-picture-image_2454243.jpg" />
            <div className="block xl:flex xl:gap-x-4 justify-around mt-12 xl:mt-20 ">
              <div className="p-12 my-4">
                <p className="text-xl text-center font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores natus veritatis voluptates. Reiciendis nam quod ab sequi voluptatem veritatis sed, aut, iusto reprehenderit corporis architecto officiis at amet facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, rerum placeat? Tempora dicta ab veniam tempore, dolores voluptatum quis consequuntur laboriosam ipsa! Beatae aliquid ea unde facilis reiciendis, adipisci a. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro tempore voluptatum molestias quas omnis qui eveniet, minima nobis, aperiam eum ratione? Modi, consequatur. Molestiae vero neque asperiores eius iusto non.</p>
              </div>
            </div>
          </span>
        </section>

        <section className=" mt-24 p-10 pb-16 mx-auto text-center bg-gray-200">
          <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-serif text-purple-500 italic font-[900]">
            Ce Oferim?
          </h1>
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="text-left">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 -mt-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <h2 className='font-bold text-xl  pb-4 uppercase'>
                  Title
                </h2>
              </div>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 -mt-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                </svg>
                <h2 className='font-bold text-xl  pb-4 uppercase'>
                  Title
                </h2>
              </div>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 -mt-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
                <h2 className='font-bold text-xl  pb-4 uppercase'>
                  Title
                </h2>
              </div>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="text-left">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 -mt-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <h2 className='font-bold text-xl  pb-4 uppercase'>
                  Title
                </h2>
              </div>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </section>
        <Faq />
        <div className="bg-purple-500">
        <ContactHP />
        </div>
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
