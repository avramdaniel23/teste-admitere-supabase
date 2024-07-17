"use client";
import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";
import Card from "../Cards/card";

interface Props {
  categoryName: string;
  subcategories: any[];
}

const HorizontalSection = () => {
  return (
    <section className="mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[1rem] md:p-[2.5rem] lg:px-[1rem] xl:px-0">
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto lg:gap-y-[1.5rem] dark:bg-zinc-800`}
      >
        <Card
          text="Matematica"
          color="from-indigo-200 to-indigo-100 text-purple-500 border-violet-400 hover:shadow-lg hover:shadow-purple-500"
        />
        <Card
          text="Fizica"
          color="from-blue-200 to-blue-100 
        text-blue-500
        border-sky-400 hover:shadow-lg hover:shadow-sky-400"
        />
        <Card
          text="Chimie"
          color="from-lime-200 to-lime-200 
          text-lime-500
          border-lime-500 hover:shadow-lg hover:shadow-lime-500"
        />
        <Card
          text="Biologie"
          color="from-yellow-200 to-yellow-100 
          text-yellow-500
          border-amber-300 hover:shadow-lg hover:shadow-amber-400"
        />
        <Card
          text="Romana"
          color="from-orange-200 to-orange-100 
          text-orange-500
          border-orange-400 hover:shadow-lg hover:shadow-orange-400"
        />
        <Card
          text="Geografie"
          color="from-red-200 to-red-100 text-red-500
        border-red-600 hover:shadow-lg hover:shadow-red-500"
        />
        <Card
          text="Economie"
          color="from-gray-300 to-gray-100 
        text-gray-500
        border-gray-400 hover:shadow-lg hover:shadow-gray-500"
        />
        <Card
          text="Informatica"
          color="from-pink-200 to-pink-100 
        text-pink-500
        border-red-400 hover:shadow-lg hover:shadow-pink-500"
        />

        <Card
          text="Muzica"
          color="from-pink-200 to-pink-100 
        text-pink-500
        border-red-400"
        />
        <Card
          text="Muzica"
          color="from-pink-200 to-pink-100 
      text-pink-500
      border-red-400"
        />
        <Card
          text="Muzica"
          color="from-pink-200 to-pink-100 
    text-pink-500
    border-red-400"
        />
        <Card
          text="Muzica"
          color="from-pink-200 to-pink-100 
  text-pink-500
  border-red-400"
        />
        <Card
          text="Muzica"
          color="from-pink-200 to-pink-100 
text-pink-500
border-red-400"
        />
        <Card
          text="Muzica"
          color="from-pink-200 to-pink-100 
        text-pink-500
        border-red-400"
        />

        {/* {categoryName.toUpperCase()} */}
        {/* <CategoryCard title={"Algebra"}></CategoryCard>
        <CategoryCard title={"Aparate"}></CategoryCard>
        <CategoryCard title={"trigonometrie"}></CategoryCard>
        <CategoryCard title={"Septari"}></CategoryCard> */}
      </div>
    </section>
  );
};

export default HorizontalSection;
