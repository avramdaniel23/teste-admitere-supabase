export default function Card({ text, color }: { text: string; color: string }) {
  return (
    <div className="group mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem] w-full h-full">
      <h2
        className={`relative flex justify-between shadow-md border border-transparent py-2 px-2 my-2 text-[1.5rem] rounded-md md:text-[1.5rem] font-[900] uppercase bg-gradient-to-tr ${color} group-hover:border-current px-5`}
      >
        {text}
        <div className="flex flex-col justify-between items-end gap-3">
          <span className="text-base order-1">0/10</span>
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-purple-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
          </button>
        </div>
      </h2>
    </div>
  );
}
