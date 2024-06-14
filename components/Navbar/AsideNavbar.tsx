import { asideNav } from "@/app/data/asideNav";
import Link from "next/link";

export default function AsideNavbar() {
  const asideNavbar = asideNav;
  return (
    <div className="">
      <div className="h-16 block  p-4 ">
        <h1 className="text-[20px] font-[900] uppercase ">Exerseaza mi l</h1>
      </div>
      <div className="py-4 ">
        <ul>
          {asideNavbar.map((link: any, index: any) => {
            return (
              <Link href={link.href} key={index}>
                <li
                  key={index}
                  className="p-2  hover:bg-gray-200 transition-all ease-in-out duration-300 font-bold "
                >
                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
