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
      className={`${isActive ? "border-neon-blue" : ""} py-2 w-fit transition-all duration-1000`
      }>
      <div className="flex flex-row items-center justify-center">
        {React.cloneElement(icon, {
          stroke: isActive ? "#0172F0" : "currentColor",
          style: {
            width: isActive ? "48px" : "32px",
            height: isActive ? "48px" : "32px",
            strokeWidth: isActive ? 1.7 : 1.5,
          },
        })}
          <p className={`${showLabel ?'text-[16px]': 'text-[0px]' } transition-all duration-1000`}>{label}</p>
      </div>
    </Link>
  );
};

export default NavLink;
