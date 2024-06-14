import CategoryCard from "../Cards/CategoryCard";

export default function HorizontalSection() {
  let numarCategorii = 4;
  let numberOfArticles: string;
  if (numarCategorii === 5) {
    numberOfArticles = "lg:grid-cols-5";
  } else if (numarCategorii === 6) {
    numberOfArticles = "lg:grid-cols-3";
  } else if (numarCategorii === 3) {
    numberOfArticles = "lg:grid-cols-3";
  } else {
    numberOfArticles = "lg:grid-cols-4";
  }

  return (
    <section className="mx-auto max-w-[80rem] px-[1rem] pb-[2.5rem] pt-[1rem] md:p-[2.5rem] lg:px-[1rem] xl:px-0">
      <header className="mb-[1rem] grid gap-y-[0.75rem] lg:mb-[1.5rem]">
        <h2 className="relative text-[1.5rem] md:text-[2.25rem] font-[900] uppercase">
          MATEMATICA
        </h2>
      </header>
      <div
        className={`grid auto-rows-auto grid-cols-1 gap-y-[1.5rem] md:grid-cols-2 md:gap-x-[1.5rem] lg:auto-rows-auto ${numberOfArticles} lg:gap-y-[1.5rem]`}>
        <CategoryCard title={"Algebra"}></CategoryCard>
        <CategoryCard title={"Aparate"}></CategoryCard>
        <CategoryCard title={"trigonometrie"}></CategoryCard>
        <CategoryCard title={"Spetari"}></CategoryCard>
      </div>
    </section>
  );
}
