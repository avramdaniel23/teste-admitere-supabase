import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ title }: any) {
  return (
    <div className=" rounded-lg shadow-xl">
      <div className="w-full ">
        {/* <img className="w-full" src="/testimage.jpg" alt="" /> */}
        {/* TITLE */}
        <div className="py-4 flex flex-row-reverse">
          <span className="uppercase bg-gradient-to-r from-[#4062BB] to-[#5200AE] text-white p-3 rounded-l-full px-[2rem] font-bold tracking-wider">
            {title}
          </span>
        </div>
        {/* BODY */}
        <div className="px-4 pb-6">
          <p className="pb-3 font-bold text-m">
            Descopera teste misto de algebra
          </p>
          <div className="text-xs flex flex-col">
            <div className="flex itmes-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4062BB"
                className="size-5 mr-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="flex items-center">300 de teste</span>
            </div>
            <div className="flex itmes-center py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4062BB"
                className="size-5 mr-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="flex items-center">123514 de intrebari</span>
            </div>
            <div className="flex itmes-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#4062BB"
                className="size-5 mr-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="flex items-center">
                Actualizat la: 12.03.2025
              </span>
            </div>
          </div>
        </div>
        {/* BUTON */}
        <div className="px-4 pb-4 w-full">
          <div className="w-full uppercase bg-gradient-to-r from-[#4062BB] to-[#5200AE] text-white py-2 rounded-full text-center tracking-wider">
            Vezi categoria
          </div>
        </div>
      </div>
    </div>
  );
}
