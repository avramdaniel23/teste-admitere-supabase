import React from 'react';

interface NavLBProps {
  category: string[];
  subCategory: string[][];
}

const NavLB: React.FC<NavLBProps> = ({ category }) => {
  return (
    <div className="absolute flex flex-row gap-2 items-center justify-between w-full h-fit p-3 overflow-scroll">
      {category.map((cat, index) => (
        <div key={index} className="flex flex-row items-center rounded-lg bg-white shadow-md p-1">
          <p className="text-sm text-slate-800 font-normal">{cat}</p>
        </div>
      ))}
    </div>
  );
};

export default NavLB;
