"use client";
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";

export default function Faq() {
  const [faq, setFaq] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);

  const handleOpen = () => {
    if (faq === true) setFaq(false);
    else if (faq === false) setFaq(true);
  };
  const handleOpen1 = () => {
    if (faq1 === true) setFaq1(false);
    else if (faq1 === false) setFaq1(true);
  };
  const handleOpen2 = () => {
    if (faq2 === true) setFaq2(false);
    else if (faq2 === false) setFaq2(true);
  };

  return (
    <section className=" mt-24 max-w-[95%] lg:max-w-[70%] lg:mx-auto text-center mx-auto ">
      <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-[900] uppercase ">
        faq u
      </h1>
      <div className="grid gap-y-8 w-full mt-8">
        <button
          type="button"
          className="relative text-left w-full "
          onClick={handleOpen}
        >
          <div
            className={`py-4 px-4 bg-gradient-to-r from-[#0172F0] from-0% to-white to-[30%] lg:to-[13.2%] w-full  font-bold  flex items-center rounded-full`}
          >
            <span className=" mr-4 text-[28px] lg:text-[40px] font-[900] text-white w-[15%] md:w-auto ">
              01.
            </span>
            <h1 className="max-w-[60%] ">
              Ce materii sunt disponibile acum pe platformă?
            </h1>
            <div className=" bg-white ml-4 ">
              <span
                className={`absolute right-[30px] lg:right-[50px] w-[13px] rounded-xl h-[2px] bg-[#0172F0] transition-all duration-300 ease-in-out ${
                  faq === true ? "rotate-[122deg]" : "rotate-[55deg]"
                } `}
              />
              <span
                className={`absolute right-[22.9px] lg:right-[42.9px] w-[13px] rounded-xl h-[2px] bg-[#0172F0] transition-all duration-300 ease-in-out ${
                  faq === true ? "-rotate-[122deg]" : "-rotate-[55deg]"
                } `}
              />
            </div>
          </div>
          <div
            className={`relative pb-4 pt-[20px] -z-50 w-[90%] text-[16px]   mx-auto bg-white -mt-[10px]    ${
              faq === true ? "rounded-b-lg flex" : "hidden"
            } `}
          >
            <p className=" px-4 md:px-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </button>
        <button
          type="button"
          className="relative text-left w-full "
          onClick={handleOpen1}
        >
          <div
            className={`py-4 z-[80] px-4 bg-gradient-to-r from-[#0172F0] from-0% to-white to-[30%] lg:to-[13.2%] w-full  font-bold  flex items-center rounded-full`}
          >
            <span className=" mr-4 text-[28px] lg:text-[40px] font-[900] text-white w-[15%] md:w-auto ">
              02.
            </span>
            <h1 className="max-w-[60%] ">Platforma este gratuita?</h1>
            <div className=" bg-white ml-4 ">
              <span
                className={`absolute right-[30px] lg:right-[50px] w-[13px] rounded-xl h-[2px] bg-[#0172F0] transition-all duration-300 ease-in-out ${
                  faq1 === true ? "rotate-[122deg]" : "rotate-[55deg]"
                } `}
              />
              <span
                className={`absolute right-[22.9px] lg:right-[42.9px] w-[13px] rounded-xl h-[2px] bg-[#0172F0] transition-all duration-300 ease-in-out ${
                  faq1 === true ? "-rotate-[122deg]" : "-rotate-[55deg]"
                } `}
              />
            </div>
          </div>
          <div
            className={`relative pb-4 pt-[20px] -z-50 w-[90%] text-[16px]   mx-auto bg-white -mt-[10px]  ${
              faq1 === true ? "rounded-b-lg flex " : "hidden "
            } `}
          >
            <p className=" px-4 md:px-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </button>
        <button
          type="button"
          className="relative text-left w-full "
          onClick={handleOpen2}
        >
          <div
            className={`py-4 px-4 bg-gradient-to-r from-[#0172F0] from-0% to-white to-[30%] lg:to-[13.2%] w-full  font-bold  flex items-center rounded-full`}
          >
            <span className=" mr-4 text-[28px] lg:text-[40px] font-[900] text-white w-[15%] md:w-auto ">
              03.
            </span>
            <h1 className="max-w-[60%] ">
              Pot să văd răspunsurile corecte în istoricul grilelor?
            </h1>
            <div className=" bg-white ml-4 ">
              <span
                className={`absolute right-[30px] lg:right-[50px] w-[13px] rounded-xl h-[2px] bg-[#0172F0] transition-all duration-300 ease-in-out ${
                  faq2 === true ? "rotate-[122deg]" : "rotate-[55deg]"
                } `}
              />
              <span
                className={`absolute right-[22.9px] lg:right-[42.9px] w-[13px] rounded-xl h-[2px] bg-[#0172F0] transition-all duration-300 ease-in-out ${
                  faq2 === true ? "-rotate-[122deg]" : "-rotate-[55deg]"
                } `}
              />
            </div>
          </div>
          <div
            className={`relative pb-4 pt-[20px] -z-50 w-[90%] text-[16px]   mx-auto bg-white -mt-[10px]   ${
              faq2 === true ? "rounded-b-lg flex" : "hidden"
            } `}
          >
            <p className=" px-4 md:px-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </button>
      </div>
    </section>
  );
}
