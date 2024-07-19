"use client";
import { useState, useEffect, FC } from "react";

interface SubjectsProps {
    subjectName: string
}

const students = [
    {
        nume: "Petracovici",
        prenume: "Maximilian",
        place: 1,
        grade: 0,
        score: 0
    },
    {
        nume: "Petracovici",
        prenume: "Maximilian",
        place: 2,
        grade: 0,
        score: 0
    },
    {
        nume: "Petracovici",
        prenume: "Maximilian",
        place: 3,
        grade: 0,
        score: 0
    },
    {
        nume: "Petracovici",
        prenume: "Maximilian",
        place: 4,
        grade: 0,
        score: 0
    },
    {
        nume: "Petracovici",
        prenume: "Maximilian",
        place: 5,
        grade: 0,
        score: 0
    },
    {
        nume: "Petracovici",
        prenume: "Maximilian",
        place: 6,
        grade: 0,
        score: 0
    },
    {
        nume: "Petracovici",
        prenume: "Maximilian",
        place: 7,
        grade: 0,
        score: 0
    },
]

const LeaderboardComponent: FC<SubjectsProps> = ({subjectName}) => {
    const podium = students.slice(0,3);
    const rest = students.slice(3,students.length)

    return (
        <section className="lg:mx-auto">
            <div className="flex flex-col items-center justify-center mx-auto max-w-[80rem] px-[1rem] pt-[2rem]  lg:px-0 lg:pt-[3rem]">
            <div className="mb-[100px] z-10">
                <h3 className="text-3xl uppercase font-bold">{subjectName}</h3>
            </div>
            <div className="flex items-end mt-10">
                <div className="relative bg-gradient-to-t from-stone-400 to-stone-700 h-[130px] w-[120px] border-r-2 p-4 rounded-t-2xl shadow-xl flex flex-col items-center md:w-[180px] lg:w-[160px]">
                    <div className="absolute -top-[110px] flex flex-col items-center z-10">
                        <img className="h-[50px] w-[50px] rounded-lg border-2 border-black" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"></img>
                        <span className="font-bold justify-center lg:text-xl" >{podium[1].nume}</span>
                        <span className="font-bold justify-center lg:text-xl" >{podium[1].prenume}</span>
                    </div>
                    <span className="font-bold text-white justify-center text-2xl">{podium[1].place}nd</span>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                        <span className="text-white font-bold">{podium[1].score} puncte</span>
                    </div>
                </div>
                <div className="relative bg-gradient-to-t from-yellow-400 to-yellow-700 h-[160px] w-[120px] border-r-2 flex flex-col p-4 rounded-t-2xl shadow-xl items-center md:w-[150px] lg:w-[150px]">
                    <div className="absolute -top-[110px] flex flex-col items-center z-10">
                        <img className="h-[50px] w-[50px] rounded-lg border-2 border-black" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"></img>
                        <span className="font-bold justify-center lg:text-xl" >{podium[0].nume}</span>
                        <span className="font-bold justify-center lg:text-xl" >{podium[0].prenume}</span>
                    </div>
                    <span className="font-bold text-white justify-center text-2xl">{podium[0].place}st</span>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                        <span className="text-white font-bold">{podium[0].score} puncte</span>
                    </div>        
                </div>
                <div className="relative bg-gradient-to-t from-amber-600 to-amber-800 h-[100px] w-[120px] border-r-2 p-4 flex flex-col rounded-t-2xl shadow-xl items-center md:w-[150px] lg:w-[150px]">
                    <div className="absolute -top-[110px] flex flex-col items-center z-10">
                        <img className="h-[50px] w-[50px] rounded-lg border-2 border-black" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"></img>
                        <span className="font-bold  justify-center lg:text-xl" >{podium[2].nume}</span>
                        <span className="font-bold justify-center lg:text-xl" >{podium[2].prenume}</span>
                    </div>
                    <span className="font-bold text-white justify-center text-2xl">{podium[2].place}rd</span>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                        <span className="text-white font-bold ">{podium[2].score} puncte</span>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex flex-col mx-auto mt-5 bg-white rounded-xl shadow-xl lg:w-[55rem]">
                {rest.map((student,idx) => (
                    <div key={idx} className="flex justify-between p-4 items-center border-b-2 border-gray">
                    <div className="flex items-center">
                        <p className="text-xl mr-4">{student.place}</p>
                        <img className="h-[50px] w-[50px] rounded-lg mr-4 border-2 border-black" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"></img>
                        <div className="flex flex-col md:flex-row lg:flex-row">
                        <p className="text-xl ml-2">{student.nume}</p>
                        <p className="text-xl ml-2">{student.prenume}</p>
                        </div>
                    </div>
                    <p className="text-xl p-2 hidden md:block lg:block">{student.grade}/10</p>
                    <p className="text-xl px-3 py-1 text-white bg-black rounded-3xl whitespace-nowrap">{student.score} puncte</p>
                </div>
                ))}
            </div>
        </section>
    )
};

export default LeaderboardComponent;