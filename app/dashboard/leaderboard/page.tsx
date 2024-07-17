"use client"
import LeaderboardSection from "@/components/Sections/LeaderboardSection";
import { useState } from "react";

export default function Leaderboard() {
    const [subject,setSubject] = useState("");
    const [showGeneral,setShowGeneral] = useState(true);
    
    const toggleGeneral = () => {
      setSubject("General");
      setShowGeneral(true);
  }

    const toggleAlgebra = () => {
        setSubject("Algebra si Analiza");
        setShowGeneral(false);
    }

    const toggleFizica = () => {
        setSubject("Fizica");
        setShowGeneral(false);
    }

    const toggleTrigo = () => {
        setSubject("Trigonometrie");
        setShowGeneral(false);
    }

    const toggleInfo = () => {
      setSubject("Informatica");
      setShowGeneral(false);
    }

    const toggleChimie = () => {
      setSubject("Chimie");
      setShowGeneral(false);
    }

    const toggleEconomie = () => {
      setSubject("Economie");
      setShowGeneral(false);
    }
  
  return( 
    <div className="lg:mx-auto">
      <div className="l p-2 lg:p-4 overflow-x-auto lg:overflow-hidden">
                <div className="flex justify-start space-x-2 md:justify-center lg:justify-center">
                    <button onClick={toggleGeneral} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 my-1">General</button>
                    <button onClick={toggleAlgebra} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 my-1 whitespace-nowrap">Algebra si analiza</button>
                    <button onClick={toggleTrigo} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 my-1">Trigonometrie</button>
                    <button onClick={toggleFizica} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 my-1">Fizica</button>
                    <button onClick={toggleChimie} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 my-1">Chimie</button>
                    <button onClick={toggleInfo} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 my-1">Informatica</button>
                    <button onClick={toggleEconomie} className="px-3 py-1 text-md text-white bg-black rounded-3xl mx-1 my-1">Economie</button>
                </div>
        </div>

        <div>
          {showGeneral && (
            <LeaderboardSection subjectName="General"></LeaderboardSection>
          )}

          {!showGeneral && (
            <LeaderboardSection subjectName={`${subject}`}></LeaderboardSection>
          )}
        </div>
    </div>
  )
}
