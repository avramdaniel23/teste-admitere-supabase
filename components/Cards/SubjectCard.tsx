"use client";
import { useState } from "react";

interface Props {
    title: string;
    className: string;
    categories: JSX.Element;
}

const SubjectCard = ({ title, className, categories}: Props) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={"flex flex-col"}>
        <div className={`py-4 flex justify-center w-full h-fit overflow-hidden rounded-lg shadow-xl bg-gradient-to-r ${className} `} onClick={toggleExpansion}>
            <p className={`w-full uppercase p-6 text-white m-3 text-center shadow-2xl backdrop-blur font-bold tracking-wider ${isExpanded && 'rounded-b-none'}`}>
                {title}
            </p>
        </div>
            <div className={`w-full ${isExpanded ? 'h-full' : 'h-0 max-h-fit overflow-hidden'} transition-all duration-1000 overflow-hidden rounded-lg shadow-xl bg-gradient-to-r ${className} relative -top-2`}>{categories}</div>
        </div>
    );
};

export default SubjectCard;
