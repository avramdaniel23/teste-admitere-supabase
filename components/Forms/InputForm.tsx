import React from "react";

interface Props {
  type: string;
  id: string;
  value: string;
  setValue: Function;
  label: string;
}

const InputForm = ({ type, id, value, setValue, label }: Props) => {
  return (
    <div className="p-1">
      <label htmlFor={type} className="text-lg font-medium ">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className="block font-medium w-full rounded-lg shadow-md border-2 p-3 text-slate-500 focus:outline-none focus:border-blue-500 focus:text-black mt-2  text-lg"
      />
    </div>
  );
};

export default InputForm;