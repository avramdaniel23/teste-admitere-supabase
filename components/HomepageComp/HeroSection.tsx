import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:py-20">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Antrenează-te cu noile Quiz-uri online
          </h1>
          <p className="mt-5 text-xl lg:text-2xl">
            Pregătește-te de admitere la Universitatea Politehnica in cel mai
            ușor mod
          </p>
          <div className="mt-8">
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
        <div>
          <img
            src="https://content.api.news/v3/images/bin/3c1d80ffbcaf508f8d2dd65e99d37e12?width=650"
            alt="Hero Image"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
