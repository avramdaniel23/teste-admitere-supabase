import React from "react";

interface Props {
  value: string;
  setValue: Function;
  id: string;
  objects: Array<String>;
  label: string;
}

export const SelectForm = ({ value, setValue, id, objects, label }: Props) => {
  return (
    <div className="p-1 ">
      <label htmlFor="class" className="text-lg font-medium ">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        id={id}
        className="block font-medium w-full rounded-lg shadow-md border-2 p-4 mt-2 text-slate-500 focus:outline-none focus:border-blue-500 focus:text-black text-lg "
      >
        {objects.map((object: any, index) => (
          <option value={object} key={index}>
            {object}
          </option>
        ))}
      </select>
    </div>
  );
};
