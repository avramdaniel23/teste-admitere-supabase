import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  let placeholder = "";

  switch (label) {
    case "Email":
      placeholder = "email@gmail.com";
      break;
    case "First Name":
      placeholder = "Ion";
      break;
    case "Last Name":
      placeholder = "Popescu";
      break;
    case "Phone":
      placeholder = "0723456789";
      break;
    default:
      placeholder = "idk";
  }

  return (
    <div className={`flex flex-col gap-2`}>
      <label className="text-xs font-medium text-slate-900 lg:text-sm">
        {label}:
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="bg-inherit px-2 focus:outline-none"
        required={required}
      />
      <div
        className={`flex h-0.5 w-[100%] flex-row rounded-full bg-slate-200 lg:h-1`}
      >
        <div
          className={`${isFocused ? "w-[100%]" : "w-[0%]"} m-auto h-1 rounded-full bg-blue-400 duration-300`}
        ></div>
      </div>
    </div>
  );
};

export default InputField;
