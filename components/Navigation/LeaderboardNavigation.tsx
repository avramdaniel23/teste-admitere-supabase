import {useState} from "react";
import LeaderboardNavigationItem from "@/components/Navigation/LeaderboardNavigationItem";


type navBounds = {
    start: number
    size: number
}
export default function LeaderboardNavigation() {
    let [navPosition , setNavPosition] = useState<navBounds>({start: 0, size: 3})
    const data = ["Matematica","Informatica","Fizica","Chimie","Economie"];
    const navLeft = () => {
        console.log('left');
        if (navPosition.start>0) {
            const position= {start: navPosition.start-navPosition.size, size: navPosition.size};
            console.log(position);
            setNavPosition(position);
        }
    }
    const navRight = () => {
        console.log('right');
        if (navPosition.start<data.length-2) {
            const position= {start: navPosition.start+navPosition.size, size:navPosition.size};
            console.log(position);
            setNavPosition(position);
        }
    }
    return (
        <div className={"w-full overflow-hidden"}>
            <div className={"flex justify-between items-center  h-20 border-4 "}>
                <div className={`${navPosition.start==0 ? 'w-0 overflow-hidden':'w-fit'}`} onClick={navLeft} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                    </svg>
                </div>
                <div className={"flex w-full justify-around overflow-x-scroll"}>
                    {data.map((value, index) => (
                      <LeaderboardNavigationItem text={value} className={`${index >= navPosition.start && index < navPosition.start + navPosition.size ? 'w-full':'w-full'}`}></LeaderboardNavigationItem>
                    ))}
                </div>
                {/*<div className={`${navPosition.start<data.length-2 ? 'w-fit':'w-0 overflow-hidden'}`} onClick={navRight}>*/}
                {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
                {/*         stroke="currentColor" className="size-12">*/}
                {/*        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
        </div>
          )
}