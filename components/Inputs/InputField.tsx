import React, { useState } from "react";

    interface InputFieldProps {
        label: string;
        type: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        required?: boolean;
    }

const InputField: React.FC<InputFieldProps> = ({ label, type, value, onChange, required }) => {
    const [isFocused, setIsFocused] = useState(false);
    let placeholder = '';

    switch (label) {
        case "Email":
            placeholder = 'email@gmail.com';
            break;
        case "First Name":
            placeholder = 'Nicu';
            break;
        case "Last Name":
            placeholder = 'Guta';
            break;
        case "Phone":
            placeholder = '0723456789';
            break;
        default:
            placeholder = 'idk'
    }

    return (
        <div className={`flex flex-col gap-[2px]`}>
            <label className="text-slate-800 text-sm font-medium lg:text-base">{label}:</label>
            <input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="focus:outline-none px-2 bg-inherit"
            required={required}
            />
            <div className={`flex flex-row rounded-full w-[100%] h-0.5 bg-slate-300 lg:h-1`}>
            <div className={`${isFocused ? "w-[100%]" : "w-[0%]"} m-auto duration-300 rounded-full h-0.5 bg-blue-400 lg:h-1`}></div>
            </div>
        </div>
    );
    };

    export default InputField;
