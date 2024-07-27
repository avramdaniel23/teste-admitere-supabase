import React, { useState } from "react";

interface DropdownFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const DropdownField: React.FC<DropdownFieldProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex flex-col gap-2 font-medium`}>
      <p className="text-xs text-slate-900 lg:text-sm">{label}:</p>
      <select
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`h-[24px] w-full rounded-md bg-inherit px-2 text-slate-900 focus:outline-none ${isFocused ? "bg-slate-100" : ""}`}
      >
        {options.map((option) => (
          <option className="" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={`flex h-1 w-[100%] flex-row rounded-full bg-slate-200`}>
        <div className="m-auto h-1 rounded-full bg-blue-400 duration-300"></div>
      </div>
    </div>
  );
};

export default DropdownField;
