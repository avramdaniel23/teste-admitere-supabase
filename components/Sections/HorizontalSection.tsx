"use client";
import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";
import SubjectCard from "../Cards/SubjectCard";

import iconMate from "../../app/images/calculator-svgrepo.png";
import iconFiz from "../../app/images/physics-svgrepo.png";
import iconInfo from "../../app/images/computer-monitor-svgrepo.png";
import iconChim from "../../app/images/chemistry-svgrepo.png";
interface Props {
  categoryName: string;
  subcategories: any[];
}

const HorizontalSection = () => {
  return (
    <section className="bg-white flex justify-center flex-col w-full mx-auto my-auto max-w-[80rem] px-[1rem] pb-[5.5rem] pt-10 md:items-center md:p-10 lg:h-screen lg:items-center lg:w-full lg:px-[1rem] xl:px-0">
      {/* <header className="flex justify-center mb-[1rem] gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="w-fit relative text-[1.5rem] md:text-[2.25rem] font-[900] uppercase">
           {categoryName.toUpperCase()}
          Materii
        </h2>
      </header> */}

      <div className="flex flex-col gap-12 items-center h-fit w-full md:grid md:grid-cols-2 md:h-fit md:w-full lg:w-full lg:h-fit">

        <SubjectCard
          title="Matematica"
          icon={iconMate}
          chapters="Algebra, Geometrie"
          subjectID="1"
          totalQuizzes={83}
          totalSolved={27}
        />

        <SubjectCard
          title="Informatica"
          icon={iconInfo}
          chapters="Algoritmica, Structuri de Date"
          subjectID="3"
          totalQuizzes={86}
          totalSolved={66}
        />

        <SubjectCard
          title="Fizica"
          icon={iconFiz}
          chapters="Mecanica, Electricitate, Termodinamica"
          subjectID="2"
          totalQuizzes={126}
          totalSolved={66}
        />

        <SubjectCard
          title="Chimie"
          icon={iconChim}
          chapters="Organica, Anorganica"
          subjectID="4"
          totalQuizzes={44}
          totalSolved={7}
        />

      </div>
      
    </section>
  );
};

export default HorizontalSection;
