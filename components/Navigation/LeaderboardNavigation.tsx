import {useState} from "react";
import {Tab, TabGroup, TabList} from "@headlessui/react";

interface Item {
    key: string;
    value?: string[]; // The value is a list (array) of numbers
}
export default function LeaderboardNavigation() {
    let [selected , setSelected] = useState<number>(0)
    let [subMenu, setSubmenu] = useState<string>("");
    const data: Item[] = [{key:"General"},{key:"Matematica", value:["Algebra","Analiza"]},{key:"Informatica"},{key:"Fizica",value:["Mecanica","Electricitate","Optica","Termodinamica"]},{key:"Chimie"},{key:"Economie"}];

    return (
        <div className={"w-full relative"}>
            <div className={"flex justify-between items-center  border-b-4 h-16"}>
                <div
                    className="bg-gradient-to-l from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.25)] dark:from-[rgba(0,0,0,0)] dark:to-[rgba(255,255,255,0.25)] absolute top-0 bottom-0 left-0 w-16 md:hidden"></div>
                <div className={"flex w-full justify-around overflow-x-auto no-scrollbar text-nowrap"}>
                    <TabGroup defaultIndex={0} className={"flex"} onChange={(index) => {
                        setSelected(index);
                        setSubmenu("");
                    }}>
                        <TabList>
                        {data.map((value) => (
                                <Tab
                                    className={`relative border rounded-full content-center text-center px-4 py-2 mx-2 transition-all duration-100 data-[selected]:bg-purple-500 data-[selected]:text-white`}>{value.key} </Tab>
                            )
                        )}
                        </TabList>
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
            {data[selected].value &&
                <div className={"flex w-full justify-around overflow-x-auto no-scrollbar text-nowrap mt-2"}>
                    <div
                        className="bg-gradient-to-l from-[rgba(255,255,255,0)] to-[rgba(255,255,255,0.25)] dark:from-[rgba(0,0,0,0)] dark:to-[rgba(255,255,255,0.25)] absolute top-0 bottom-0 left-0 w-16 md:hidden"></div>
                    <TabGroup className={"relative top-0"} onChange={(index) => (
                        setSubmenu(data[selected].value![index - 1])
                    )}>
                        <TabList>
                            <Tab
                                className={`relative border rounded-full content-center text-center px-4 py-2 mx-2 transition-all duration-100 data-[selected]:bg-purple-500 data-[selected]:text-white`}>{data[selected].key} </Tab>

                            {data[selected].value!.map(value => (
                                <Tab
                                    className={`relative border rounded-full content-center text-center px-4 py-2 mx-2 transition-all duration-100 data-[selected]:bg-purple-500 data-[selected]:text-white`}>{`${data[selected].key} - ${value}`} </Tab>

                            ))}
                        </TabList>
                    </TabGroup>
                    <div
                        className="bg-gradient-to-r from-[rgba(255,255,255,0)] to-[rgba(255,255,255,1)] dark:from-[rgba(0,0,0,0)] dark:to-[rgba(255,255,255,0.25)] absolute top-0 bottom-0 right-0 w-16 md:hidden"></div>
                </div>}
            <h1 className={"w-full font-bold text-2xl text-center p-8"}>Leaderboard {data[selected].key} {subMenu && `+ ${subMenu}`}</h1>
        </div>

    );
}