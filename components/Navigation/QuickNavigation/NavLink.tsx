"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isSidebarOpen: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, icon, label, isSidebarOpen}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive ? "border-t-2 border-neon-blue py-2 w-full  lg:border-t-0 lg:border-l-2 lg:border-r-2 lg:rounded-[5px] lg:w-full lg:flex lg:flex-row lg:justify-center" : "py-4 w-full lg:hover:bg-slate-200 lg:rounded-lg lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-center"
      }>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-0">
        {React.cloneElement(icon, {
          stroke: isActive ? "#0172F0" : "currentColor",
          style: {
            width: isActive ? "32px" : "24px lg:w-fit",
            height: isActive ? "32px" : "24px",
            strokeWidth: isActive ? 1.7 : 1.5,
          },
        })}
        <p className={`${isSidebarOpen ? "lg:contents" : "lg:hidden"} lg:pt-0.5 lg:text-[14px]`}>{label}</p>
      </div>
    </Link>
  );
};

export default NavLink;
