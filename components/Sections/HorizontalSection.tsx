"use client";
import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";
import SubjectCard from "../Cards/SubjectCard";

import mateSVG from "../../app/images/calculator-svgrepo-com.svg"

interface Props {
  categoryName: string;
  subcategories: any[];
}

const HorizontalSection = () => {
  return (
    <section className="flex justify-center flex-col w-full mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[1rem] md:p-[2.5rem] lg:px-[1rem] xl:px-0">
      <header className="flex justify-center mb-[1rem] gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="w-fit relative text-[1.5rem] md:text-[2.25rem] font-[900] uppercase">
          {/* {categoryName.toUpperCase()} */}
          Materii
        </h2>
      </header>
      <div className="flex flex-col gap-4 items-center w-full md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto lg:gap-y-[1.5rem]">
        {/* <SubjectCard title={"Matematica"} subjectID={"1"} numbOfQuizzes={"63"} numbSolved={"4"} />
        <SubjectCard title={"Chimie"} subjectID={"2"} numbOfQuizzes={"27"} numbSolved={"12"} />
        <SubjectCard title={"Info"} subjectID={"3"} numbOfQuizzes={"72"} numbSolved={"6"} />
        <SubjectCard title={"Fizica"} subjectID={"4"} numbOfQuizzes={"54"} numbSolved={"11"} /> */}
        {/* <CategoryCard title={"Algebra"}></CategoryCard>
        <CategoryCard title={"Aparate"}></CategoryCard>
        <CategoryCard title={"trigonometrie"}></CategoryCard>
        <CategoryCard title={"Septari"}></CategoryCard> */}

        <div className="flex flex-col gap-1 w-full max-w-[20rem] h-36">

          <div className="flex flex-row items-center w-fit p-1 bg-slate-200 rounded-xl"> 
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
            </svg>
            <div className="text-base font-semibold">Matematica</div>
          </div>
          
          <div className="flex flex-col gap-6 bg-slate-200 px-1 rounded-lg">
            <div className="flex flex-row font-thin text-slate-400">
              Algebra, Geometrie
            </div>
            
            <div className="">
              <p className="text-sm font-thin text-slate-800">Progres:</p>      
              <div className="flex flex-row items-center">
                <div className=" mx-auto w-full h-1.5 rounded-2xl bg-slate-300">
                  <div className="w-[50%] h-1.5 bg-blue-400 rounded-2xl"></div>
                </div>
                <p className="font-thin ml-1">50%</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-1 w-full max-w-[20rem] h-36">

          <div className="flex flex-row items-center w-fit p-1 bg-slate-200 rounded-xl"> 
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>

            <div className="text-base font-semibold">Chimie</div>
          </div>
          
          <div className="flex flex-col gap-6 bg-slate-200 px-1 rounded-lg">
            <div className="flex flex-row font-thin text-slate-400">
              Organica, Anorganica
            </div>
            
            <div className="">
              <p className="text-sm font-thin text-slate-800">Progres:</p>      
              <div className="flex flex-row items-center">
                <div className=" mx-auto w-full h-1.5 rounded-2xl bg-slate-300">
                  <div className="w-[15%] h-1.5 bg-blue-400 rounded-2xl"></div>
                </div>
                <p className="font-thin ml-1">15%</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-1 w-full max-w-[20rem] h-36">

          <div className="flex flex-row items-center w-fit p-1 bg-slate-200 rounded-xl"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <div className="text-base font-semibold">Fizica</div>
          </div>
          
          <div className="flex flex-col gap-6 bg-slate-200 px-1 rounded-lg">
            <div className="flex flex-row font-thin text-slate-400">
              Mecanica, Electricitate, Termodinamica
            </div>
            
            <div className="">
              <p className="text-sm font-thin text-slate-800">Progres:</p>      
              <div className="flex flex-row items-center">
                <div className=" mx-auto w-full h-1.5 rounded-2xl bg-slate-300">
                  <div className="w-[68%] h-1.5 bg-blue-400 rounded-2xl"></div>
                </div>
                <p className="font-thin ml-1">68%</p>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-1 w-full max-w-[20rem] h-36">

          <div className="flex flex-row items-center w-fit p-1 bg-slate-200 rounded-xl"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>

            <div className="text-base font-semibold">Informatica</div>
          </div>
          
          <div className="flex flex-col gap-6 bg-slate-200 px-1 rounded-lg">
            <div className="flex flex-row font-thin text-slate-400">
              Algoritmica, Logica, idk
            </div>
            
            <div className="">
              <p className="text-sm font-thin text-slate-800">Progres:</p>      
              <div className="flex flex-row items-center">
                <div className=" mx-auto w-full h-1.5 rounded-2xl bg-slate-300">
                  <div className="w-[23%] h-1.5 bg-blue-400 rounded-2xl"></div>
                </div>
                <p className="font-thin ml-1">23%</p>
              </div>
            </div>
          </div>

        </div>

      </div>

        
      
    </section>
  );
};

export default HorizontalSection;
