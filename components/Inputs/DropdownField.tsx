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
    <div className={`flex flex-col gap-2 font-medium`}>
        <p className="text-slate-900 text-xs lg:text-sm">{label}:</p>
        <select
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-slate-900 w-full focus:outline-none px-2 h-[24px] bg-inherit rounded-md ${isFocused ? "bg-slate-100" : ""}`}
        >
        {options.map((option) => (
            <option className="" key={option} value={option}>
            {option}
            </option>
        ))}
        </select>
        <div className={`flex flex-row rounded-full w-[100%] h-1 bg-slate-200`}>
            <div className="m-auto duration-300 rounded-full h-1 bg-blue-400"></div>
        </div>
    </div>
  );
};

export default DropdownField;
