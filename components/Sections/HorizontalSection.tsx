"use client";
import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";
import SubjectCard from "../Cards/SubjectCard";

interface Props {
  categoryName: string;
  subcategories: any[];
}

const HorizontalSection = () => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[2rem] lg:pt-[3rem]">
      {/* <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="relative text-[1.5rem] md:text-[2.25rem] font-[900] uppercase">
           {categoryName.toUpperCase()}
          Matematica
        </h2>
      </header>
      */}
      <h3 className="text-3xl uppercase font-bold mb-10">Dashboard</h3>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto lg:gap-x-[3rem] lg:gap-y-[2rem] `}
      >
        <SubjectCard title="Algebra & Analiza" categoryId="1" imageUrl="https://theaveragescientist.co.uk/wp-content/uploads/2023/09/math-work-4711302_1920.jpg"></SubjectCard>
        <SubjectCard title="Trigonometrie" categoryId="2" imageUrl="https://codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2021/05/Trigonometry_01.png?x11129"></SubjectCard>
        <SubjectCard title="Chimie anorganica" categoryId="3" imageUrl="https://media.istockphoto.com/id/1349554674/photo/collection-of-medical-flasks-on-a-blue-background-science-glass-flask-blue-chemistry.jpg?s=612x612&w=0&k=20&c=pnYIZKM8atGTEJZxHbJEE_-3cOt5GBTIU_FoDMC387Q="></SubjectCard>
        <SubjectCard title="Chimie organica" categoryId="4" imageUrl="https://t4.ftcdn.net/jpg/01/23/88/73/360_F_123887380_RxycovDtG9D7tVtfelOyapB2ryV9okj6.jpg"></SubjectCard>
        <SubjectCard title="Fizica" categoryId="5" imageUrl="https://www.thoughtco.com/thmb/sNm3j9LtVGB7-aMSAI5uYgWTIEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/newton-s-cradle-103017630-5ac4bf380e23d90036c8113a.jpg"></SubjectCard>
        <SubjectCard title="Informatica" categoryId="6" imageUrl="https://snu.edu.in/site/assets/files/13182/ai-technology-brain-background-digital-transformation-concept.1600x0.webp"></SubjectCard>
        <SubjectCard title="Economie" categoryId="7" imageUrl="https://blog.alliance.edu.in/wp-content/uploads/2023/03/a-career-in-economics-02-03-2023-1.jpg"></SubjectCard>
        {/* <CategoryCard title={"Algebra"}></CategoryCard>
        <CategoryCard title={"Aparate"}></CategoryCard>
        <CategoryCard title={"trigonometrie"}></CategoryCard>
        <CategoryCard title={"Septari"}></CategoryCard> */}

      </div>
    </div>
  );
};

export default HorizontalSection;
