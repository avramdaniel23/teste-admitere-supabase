"use client"
import LeaderboardComponent from "../LeaderboardComponent";
import { useState } from "react";

export default function LeaderboardSection() {
    const [subject,setSubject] = useState("");
    const [showGeneral,setShowGeneral] = useState(true);
    
    const toggleGeneral = () => {
      setSubject("General");
      setShowGeneral(true);
    }

    const toggleChimie = () => {
      setSubject("Chimie");
      setShowGeneral(false);
    }

    const toggleMate = () => {
      setSubject("Matematica");
      setShowGeneral(false);
    }

    const toggleFizica = () => {
        setSubject("Fizica");
        setShowGeneral(false);
    }

    const toggleInfo = () => {
      setSubject("Informatica");
      setShowGeneral(false);
    }

    const toggleEconomie = () => {
      setSubject("Economie");
      setShowGeneral(false);
    }
  
  return( 
    <div className="lg:mx-auto">
      <div className="p-2 lg:p-4 overflow-x-auto lg:overflow-hidden">
                <div className="flex justify-start space-x-2 md:justify-center lg:justify-center">
                    <button onClick={toggleGeneral} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1">General</button>
                    <button onClick={toggleMate} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 whitespace-nowrap">Matematica</button>
                    <button onClick={toggleFizica} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1">Fizica</button>
                    <button onClick={toggleChimie} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1">Chimie</button>
                    <button onClick={toggleInfo} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1">Informatica</button>
                    <button onClick={toggleEconomie} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1">Economie</button>
                </div>
      </div>
        <div>
          {showGeneral && (
            <LeaderboardComponent subjectName="General"></LeaderboardComponent>
          )}

          {!showGeneral && (
            <LeaderboardComponent subjectName={`${subject}`}></LeaderboardComponent>
          )}
        </div>
    </div>
  )
}
