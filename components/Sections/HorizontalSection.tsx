"use client";
import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";

interface Props {
  categoryName: string;
  subcategories: any[];
}

const HorizontalSection = ({ categoryName, subcategories }: Props) => {
  return (
    <section className="mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[1rem] md:p-[2.5rem] lg:px-[1rem] xl:px-0">
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="relative text-[1.5rem] md:text-[2.25rem] font-[900] uppercase">
          {categoryName.toUpperCase()}
        </h2>
      </header>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto ${numberOfArticles} lg:gap-y-[1.5rem]`}
      >
        <CategoryCard title={"Algebra"}></CategoryCard>
        <CategoryCard title={"Aparate"}></CategoryCard>
        <CategoryCard title={"trigonometrie"}></CategoryCard>
        <CategoryCard title={"Septari"}></CategoryCard>
      </div>
    </section>
  );
};

export default HorizontalSection;
