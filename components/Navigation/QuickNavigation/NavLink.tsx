"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
}

const NavLink: FC<NavLinkProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive ? "border-t-2 lg:border-t-0 lg:text-neon-blue border-neon-blue py-2 w-full font-semibold"
          : "py-2 w-full hover:text-blue-700 hover:font-semibold"
      }>
      <div className="flex flex-col lg:flex-row items-center gap-1 ">
        {React.cloneElement(icon, {
          stroke: isActive ? "#0172F0" : "currentColor",
          style: {
            width: isActive ? "32px" : "24px",
            height: isActive ? "32px" : "24px",
            strokeWidth: isActive ? 1.7 : 1.5,
          },
        })}
        <p className="lg:pt-0.5 lg:text-[14px] ">{label}</p>
      </div>
    </Link>
  );
};

export default NavLink;
