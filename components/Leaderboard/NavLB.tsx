import React from 'react';

interface NavLBProps {
  category: string[];
  activeCategory: string | null;
  onCategoryClick: (category: string) => void;
}

const NavLB: React.FC<NavLBProps> = ({ category, activeCategory, onCategoryClick }) => {
  return (
    <div className="absolute top-0 flex flex-row items-center justify-center gap-2 p-2 overflow-scroll w-full h-fit md:w-[80%] lg:w-[100%]">
      {category.map((cat, index) => (
        <div
          key={index}
          onClick={() => onCategoryClick(cat)}
          className={`flex flex-row items-center rounded-2xl cursor-pointer duration-200 shadow-sm shadow-gray-400 bg-white lg:hover:bg-blue-100 ${activeCategory === cat ? 'bg-blue-400' : ''}`}
        >
          <p className="text-[12px] text-slate-700 p-1 font-medium md:text-base lg:text-xl">{cat}</p>
        </div>
      ))}
    </div>
  );
};

export default NavLB;
