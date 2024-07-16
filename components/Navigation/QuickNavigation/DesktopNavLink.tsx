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
          ? "  py-2  flex items-center  justify-start transition-all duration-200 text-[#E68369] hover:scale-110"
          : "py-2 flex items-center  justify-start transition-all duration-200 hover:scale-110"
      }
    >
      <div
        className={
          "flex flex-row items-center justify-center transition-all duration-300 "
        }
      >
        {React.cloneElement(icon, {
          stroke: "currentColor",
          style: {
            width: "24px",
            height: "24px",
            strokeWidth: isActive ? 1.7 : 1.5,
          },
        })}
        {isOpen && <p className="ml-2">{label}</p>}
      </div>
    </Link>
  );
};

export default NavLink;
