import {useState} from "react";
import {Tab, TabGroup} from "@headlessui/react";


export default function LeaderboardNavigation() {
    let [selected , setSelected] = useState<number>(-1)
    const data = ["General","Matematica","Informatica","Fizica","Chimie","Economie"];

    return (
        <div className={"w-full relative"}>
            <div className={"flex justify-between items-center  border-b-4 h-16"}>
                <div
                    className="bg-gradient-to-l from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.25)] dark:from-[rgba(0,0,0,0)] dark:to-[rgba(255,255,255,0.25)] absolute top-0 bottom-0 left-0 w-16 md:hidden"></div>
                <div className={"flex w-full justify-around overflow-x-auto no-scrollbar text-nowrap"}>
                    <TabGroup className={"flex"} onChange={(index) => {
                        setSelected(index)
                    }}>
                        {data.map((value, index) => (
                                <Tab
                                    className={`relative border rounded-full content-center text-center px-4 py-2 mx-2 transition-all duration-100 hover:bg-purple-500 hover:text-white`}>{value} </Tab>
                            )
                        )}
                    </TabGroup>
                </div>
                <div
                    className="bg-gradient-to-r from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)] dark:from-[rgba(0,0,0,0)] dark:to-[rgba(255,255,255,0.25)] absolute top-0 bottom-0 right-0 w-16 md:hidden"></div>

                {/*<div className={`${navPosition.start<data.length-2 ? 'w-fit':'w-0 overflow-hidden'}`} onClick={navRight}>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
                {/*         stroke="currentColor" className="size-12">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
            <h1 className={"w-full font-bold text-2xl text-center p-8"}>Leaderboard {data[selected]}</h1>
        </div>

    );
}