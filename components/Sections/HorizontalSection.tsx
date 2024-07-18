"use client";
import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";

interface Props {
  categoryName: string;
  subcategories: any[];
}

const HorizontalSection = () => {
  return (
    <section className="mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[1rem] md:p-[2.5rem] lg:px-[1rem] xl:px-0">
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="flex justify-center text-[1.5rem] md:text-[2.25rem] font-[900] uppercase pb-8">
          {/* {categoryName.toUpperCase()} */}
          Matematica
        </h2>
      </header>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[2.5rem] lg:auto-rows-auto  lg:gap-y-[2.5rem]`}
      >
        <CategoryCard
          title={"Algebra"}
          categoryId={"1"}
          backgroundColor={"from-indigo-700 to-indigo-700 via-blue-700"}
        ></CategoryCard>
        <CategoryCard
          title={"Geometrie"}
          categoryId={"2"}
          backgroundColor={"from-indigo-700 to-indigo-700 via-blue-700"}
        ></CategoryCard>
        <CategoryCard
          title={"Trigonometrie"}
          categoryId={"3"}
          backgroundColor={"from-indigo-700 to-indigo-700 via-blue-700"}
        ></CategoryCard>
        <CategoryCard
          title={"Analiza Matematica"}
          categoryId={"4"}
          backgroundColor={"from-indigo-700 to-indigo-700 via-blue-700"}
        ></CategoryCard>
      </div>
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="flex justify-center text-[1.5rem] md:text-[2.25rem] font-[900] uppercase pt-12 pb-8">
          {/* {categoryName.toUpperCase()} */}
          Fizica
        </h2>
      </header>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[2.5rem] lg:auto-rows-auto  lg:gap-y-[2.5rem]`}
      >
        <CategoryCard
          backgroundColor={"from-violet-500 via-purple-500 to-violet-500"}
          title={"Mecanica"}
          categoryId={"5"}
        ></CategoryCard>
        <CategoryCard
          title={"Electricitate"}
          categoryId={"6"}
          backgroundColor={"from-violet-500 via-purple-500 to-violet-500"}
        ></CategoryCard>
        <CategoryCard
          title={"Optica"}
          categoryId={"7"}
          backgroundColor={"from-violet-500 via-purple-500 to-violet-500"}
        ></CategoryCard>
        <CategoryCard
          title={"Termodinamica"}
          categoryId={"8"}
          backgroundColor={"from-violet-500 via-purple-500 to-violet-500"}
        ></CategoryCard>
      </div>
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="flex justify-center text-[1.5rem] md:text-[2.25rem] font-[900] uppercase pt-12 pb-8">
          {/* {categoryName.toUpperCase()} */}
          Biologie
        </h2>
      </header>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[2.5rem] lg:auto-rows-auto  lg:gap-y-[2.5rem]`}
      >
        <CategoryCard
          title={"Botanica"}
          categoryId={"9"}
          backgroundColor={"from-emerald-800  via-green-700 to-emerald-800"}
        ></CategoryCard>
        <CategoryCard
          title={"Zoologie"}
          categoryId={"10"}
          backgroundColor={"from-emerald-800  via-green-700 to-emerald-800"}
        ></CategoryCard>
        <CategoryCard
          title={"Anatomie"}
          categoryId={"11"}
          backgroundColor={"from-emerald-800  via-green-700 to-emerald-800"}
        ></CategoryCard>
        <CategoryCard
          title={"Genetica"}
          categoryId={"12"}
          backgroundColor={"from-emerald-800  via-green-700 to-emerald-800"}
        ></CategoryCard>
      </div>
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="flex justify-center text-[1.5rem] md:text-[2.25rem] font-[900] uppercase pt-12 pb-8">
          {/* {categoryName.toUpperCase()} */}
          Chimie
        </h2>
      </header>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[2.5rem] lg:auto-rows-auto  lg:gap-y-[2.5rem]`}
      >
        <CategoryCard
          title={"Organica"}
          categoryId={"13"}
          backgroundColor={"from-orange-600 via-amber-600 to-orange-600 "}
        ></CategoryCard>
        <CategoryCard
          title={"Anorganica"}
          categoryId={"14"}
          backgroundColor={"from-orange-600 via-amber-600 to-orange-600 "}
        ></CategoryCard>
        <CategoryCard
          title={"Generala"}
          categoryId={"15"}
          backgroundColor={"from-orange-600 via-amber-600 to-orange-600 "}
        ></CategoryCard>
      </div>
    </section>
  );
};

export default HorizontalSection;
