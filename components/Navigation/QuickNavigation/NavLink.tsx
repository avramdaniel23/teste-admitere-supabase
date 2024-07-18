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
      style={
        isSidebarOpen ? {width: '224px', height: '56px'} : {width: '56px', height: '56px'}
      }
      className={
        isActive ? "border-t-2 border-neon-blue py-2 w-full lg:border-none lg:rounded-lg lg:bg-blue-200 duration-500 lg:flex lg:flex-row lg:justify-center" : "py-2 w-full lg:duration-200 lg:hover:bg-slate-200 lg:rounded-lg lg:w-[80%] lg:flex lg:flex-row lg:items-center lg:justify-center"
      }>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-0">
        {React.cloneElement(icon, {
          stroke: isActive ? "currentColor" : "currentColor",
          style: {
            width: isActive ? "36px" : "32px",
            height: isActive ? "36px" : "32px",
            strokeWidth: isActive ? 1.7 : 1.5,
          },
        })}
        <p className={`${isSidebarOpen ? "lg:ml-2 lg:text-[16px] lg:duration-500" : "lg: lg:text-[0px] lg:duration-500"}`}>{label}</p>
      </div>
    </Link>
  );
};

export default NavLink;
