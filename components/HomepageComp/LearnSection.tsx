"use client";
import Lottie from "lottie-react";
import learnAnimation from "@/utils/animations/learn-animation.json";

export default function () {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 md:py-20">
      <div className="grid items-center md:grid-cols-2 md:gap-8">
        <Lottie
          animationData={learnAnimation}
          loop
          className="-my-20 md:-my-32"
        />
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Îmbunătățește-ți Experiența de Învățare
          </h2>
          <p className="mt-4 md:text-lg">
            Platforma noastră de pregătire prin quizuri este concepută pentru a
            te ajuta să te pregătești eficient pentru admiterea la facultate.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="blue"
                className="mr-3 size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <div>
                <h3 className="text-lg font-medium">Întrebări Cuprinzătoare</h3>
                <p>
                  Accesează o vastă bibliotecă de întrebări ce acoperă toate
                  subiectele cheie.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="blue"
                className="mr-3 size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <div>
                <h3 className="text-lg font-medium">Clasament personalizat</h3>
                <p>
                  Intrece-te cu alți elevi pentru a fi cel mai bine pregătit.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 24 24"
                strokeWidth={2}
                stroke="blue"
                className="mr-3 size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              <div>
                <h3 className="text-lg font-medium">Comunitate amplă</h3>
                <p>
                  Descoperă comunitatea elevilor care se pregătesc de admitere
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
