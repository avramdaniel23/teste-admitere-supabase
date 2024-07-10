"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isOpen: boolean;
}

const NavLink: FC<NavLinkProps> = ({ href, icon, label, isOpen }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "  py-2  flex items-center  justify-start transition-all"
          : "py-2 flex items-center  justify-start  "
      }
    >
      <div className="flex flex-row items-center gap-1 ">
        {React.cloneElement(icon, {
          stroke: isActive ? "#0172F0" : "currentColor",
          style: {
            width: isActive ? "42px" : "42px",
            height: isActive ? "42px" : "42px",
            strokeWidth: isActive ? 1.7 : 1.5,
          },
        })}
        {isOpen && <p>{label}</p>}
      </div>
    </Link>
  );
};

export default NavLink;
