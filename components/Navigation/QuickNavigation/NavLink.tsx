"use client";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  icon: JSX.Element;
  label: string;
  isSidebarEnabled: boolean;
}

const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return isLargeScreen;
};

const NavLink: FC<NavLinkProps> = ({ href, icon, label, isSidebarEnabled }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isLargeScreen = useIsLargeScreen();

  return (
    <Link
      href={href}
      className={
        isActive ? "border-t-2 border-neon-blue py-2 w-full lg:border-t-0" : "py-2 w-full"
      }>
      <div className={`flex flex-col ${isSidebarEnabled ? 'lg:flex-row' : 'lg:flex-col'} items-center gap-1 lg:my-4 ${isActive ? "lg:bg-gray-100 lg:p-2 lg:rounded-lg" : " "}`}>
        {React.cloneElement(icon, {
          stroke: isActive ? "#0172F0" : "currentColor",
          style: {
            width: isActive ? "24px" : "24px",
            height: isActive ? "24px" : "24px",
            strokeWidth: isActive ? 1.7 : 1.5,
          },
        })}
          {isSidebarEnabled && <p className={`lg:pt-0.5 lg:text-[18px]  ${isActive ? "lg:text-neon-blue" : ""}`}>{label}</p>}
          {!isLargeScreen && <p className={`lg:pt-0.5 lg:text-[14px]  ${isActive ? "lg:text-neon-blue" : ""}`}>{label}</p>}
      </div>
    </Link>
  );
};

export default NavLink;
