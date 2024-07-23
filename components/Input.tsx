import { type ComponentPropsWithoutRef } from 'react'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string
}

export default function Input({
  label,
  className,
  children,
  ...props
}: InputProps) {
  return (
    <div className="relative space-y-2">
      <label htmlFor={label}>
        <p className="pl-1 text-sm font-semibold">{label}</p>
      </label>
      <input
        id={label}
        className={`flex w-full rounded-lg border bg-white px-3 py-2 text-sm outline-0 transition-colors duration-500 ease-out focus-visible:ring-1 ${className}`}
        {...props}
      />
      {children}
    </div>
  )
}
