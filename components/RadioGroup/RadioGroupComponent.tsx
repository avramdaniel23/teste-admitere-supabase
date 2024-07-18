import { Radio, RadioGroup, Label } from "@headlessui/react";

const RadioGroupComponent = ({ value, onChange, options }: any) => {
  return (
    <RadioGroup value={value} onChange={onChange} aria-label="Options">
      {options.map((option: any) => (
        <Radio
          key={option.value}
          value={option.value}
          className="bg-white flex justify-between shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-4 p-4 rounded-lg transition-all ease-in-out data-[checked]:bg-neon-blue data-[checked]:text-white">
          <Label>{option.name}</Label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className={`size-6 ${
              value === option.value
                ? "visible opacity-100"
                : "invisible opacity-0"
            }`}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupComponent;
