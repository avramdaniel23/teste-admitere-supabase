"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  showLabel: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, icon, label ,showLabel}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive ? `border-neon-blue py-2 w-fit center` : "py-2 w-fit"
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
          {showLabel && <p className="lg:pt-0.5 lg:text-[14px] ">{label}</p>}
      </div>
    </Link>
  );
};

export default NavLink;
