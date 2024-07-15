import QuizzCard from "@/components/Cards/QuizzCard";
import Link from "next/link";

export default function Quizzes() {
  return (
    <section>
      {/* <Link href="/dashboard/quizzes/configure">
        <div>Configure</div>
      </Link>
      <div>Join</div> */}
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto  lg:gap-y-[1.5rem]`}
      >
        <QuizzCard />
        <QuizzCard />
        <QuizzCard />
        <QuizzCard />
      </div>
    </section>
  );
}
