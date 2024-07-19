import React, { useState } from "react";

interface DropdownFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const DropdownField: React.FC<DropdownFieldProps> = ({ label, value, onChange, options }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex flex-col gap-[2px] font-medium`}>
        <label className="text-slate-800 text-sm lg:text-base">{label}:</label>
        <select
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`focus:outline-none px-2 bg-inherit rounded-md ${isFocused ? "bg-slate-200" : ""}`}
        >
        {options.map((option) => (
            <option key={option} value={option}>
            {option}
            </option>
        ))}
        </select>
        <div className={`flex flex-row rounded-full w-[100%] h-0.5 bg-slate-300 lg:h-1`}>
            <div className="m-auto duration-300 rounded-full h-0.5 bg-blue-400 lg:h-1"></div>
        </div>
    </div>
  );
};

export default DropdownField;
