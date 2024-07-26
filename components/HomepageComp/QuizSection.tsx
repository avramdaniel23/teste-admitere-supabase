import Link from "next/link";

type QuizSectionProps = {};

export default function QuizSection() {
  return (
    <section className="mx-auto max-w-7xl bg-blue-100 px-5 py-12 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Explorează Quiz-uri din diverse materii
        </h2>
        <p className="mt-4 md:text-lg">
          Alege sa te pregătești la orice materie de admitere
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-4">
        <QuizCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="blue"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-10"
            >
              <rect width="16" height="20" x="4" y="2" rx="2" />
              <line x1="8" x2="16" y1="6" y2="6" />
              <line x1="16" x2="16" y1="14" y2="18" />
              <path d="M16 10h.01" />
              <path d="M12 10h.01" />
              <path d="M8 10h.01" />
              <path d="M12 14h.01" />
              <path d="M8 14h.01" />
              <path d="M12 18h.01" />
              <path d="M8 18h.01" />
            </svg>
          }
          title="Matematică"
          description="Pregătește-te pentru proba de matematică cu întrebările noastre cuprinzătoare de quiz."
        />
        <QuizCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          }
          title="Informatică"
          description="Pregătește-te pentru proba de informatică cu întrebările noastre cuprinzătoare de quiz."
        />
        <QuizCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="blue"
              className="size-10"
            >
              <circle cx="12" cy="12" r="1" />
              <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
              <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
            </svg>
          }
          title="Fizică"
          description="Pregătește-te pentru proba de fizică cu întrebările noastre cuprinzătoare de quiz."
        />
        <QuizCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
          }
          title="Chimie"
          description="Pregătește-te pentru proba de chimie cu întrebările noastre cuprinzătoare de quiz."
        />
        <div className="col-span-full flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 md:text-base"
          >
            Descoperă
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuizCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group">
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        {icon}

        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-center font-medium">{description}</p>
      </div>
    </div>
  );
}
