"use client";

import Link from "next/link";
import { useEffect } from "react";

// export interface ErrorProps {
//   error: Error;
//   reset: () => void;
// }

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="flex w-full flex-col items-center justify-center bg-gradient-to-l from-[#003865] to-[#006487] p-4 text-center text-[1rem] text-white md:h-[calc(100vh_-_12.75rem)] lg:min-h-[calc(100vh_-_13.6rem)]">
      <header>
        <h1 className="text-[6.25rem] font-bold leading-[1.2]"> 404 </h1>
      </header>
      <p>Pagina pe care o căutați nu exista.</p>
      <footer>
        <Link
          href="/dashboard"
          className="text-neon-blue transition-all duration-300 ease-in-out"
        >
          Click aici pentru a merge la pagina principală.
        </Link>
      </footer>
    </section>
  );
}
