"use client";

import { useEffect, useState } from "react";
import {
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
} from "@headlessui/react";
import { subjects } from "@/libs/selectOptions/generateQuizzOptions";

interface Configuration {
  name: string;
  materie: string;
  capitol: string;
  dificultate: string;
  numarIntrebari: string;
}

interface Chapter {
  value: string;
  name: string;
}

interface Subject {
  value: string;
  name: string;
  chapters: Chapter[];
}
const dificultate = [
  { value: "1", name: "Usor" },
  { value: "2", name: "Mediu" },
  { value: "3", name: "Greu" },
];

export default function QuizzesConfigure() {
  const [configuration, setConfiguration] = useState<Configuration>({
    name: "",
    materie: "",
    capitol: "",
    dificultate: "",
    numarIntrebari: "",
  });
  const [questions, setQuestions] = useState<any[]>([]);
  const [filteredChapters, setFilteredChapters] = useState<Chapter[]>([]);

  // Get subjects from libs
  const materii: Subject[] = subjects;

  // Define the data fetching function
  const fetchData = async () => {
    try {
      const response = await fetch("/api/get/allQuestions", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const questionsData = await response.json();
      return questionsData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = await fetchData();
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching questions data:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleMaterieChange = (value: string) => {
    setConfiguration((prev) => ({
      ...prev,
      materie: value,
    }));

    const selectedSubject = materii.find((materie) => materie.value === value);
    setFilteredChapters(selectedSubject ? selectedSubject.chapters : []);
    setConfiguration((prev) => ({
      ...prev,
      capitol: "",
    }));
  };

  const handleCapitolChange = (value: string) => {
    setConfiguration((prev) => ({
      ...prev,
      capitol: value,
    }));
  };

  const handleDificultateChange = (value: string) => {
    setConfiguration((prev) => ({
      ...prev,
      dificultate: value,
    }));
  };

  const handleNumarIntrebariChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setConfiguration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfiguration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleGenerate = async (e: any) => {
    const hasEmptyField = Object.values(configuration).some(
      (value) => value === ""
    );

    if (hasEmptyField) {
      console.error("Toate câmpurile sunt obligatorii!");
      return;
    }

    try {
      const response = await fetch(
        `/api/get/filteredQuestions?materie=${configuration.materie}&capitol=${configuration.capitol}&dificultate=${configuration.dificultate}&numarIntrebari=${configuration.numarIntrebari}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const questionsData = await response.json();
      console.log(questionsData);
      setQuestions(questionsData); // Optional: set questions in state if you want to display them
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <>
      <section className="mb-10">
        <div className="py-2">
          <Field className="flex flex-col">
            <Label className="mb-2 text-[1.6rem]">Numele quizz-ului</Label>
            <Input
              name="name"
              value={configuration.name}
              onChange={handleNameChange}
              className="border p-2 rounded-lg ps-4 bg-white focus:outline-none"
            />
          </Field>
        </div>
        <div className="py-2">
          <Field className="flex flex-col">
            <Label className="mb-2 text-[1.6rem]">Materie</Label>
            <RadioGroup
              value={configuration.materie}
              onChange={handleMaterieChange}
              aria-label="Materie">
              {materii.map((materie) => (
                <Radio
                  key={materie.value}
                  value={materie.value}
                  className="bg-white flex justify-between shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-4 p-4 rounded-lg transition-all ease-in-out data-[checked]:bg-neon-blue data-[checked]:text-white">
                  <Label>{materie.name}</Label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className={`size-6 ${
                      configuration.materie === materie.value
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Radio>
              ))}
            </RadioGroup>
          </Field>
        </div>
        {configuration.materie.length > 0 ? (
          <div className="py-2">
            <Field className="flex flex-col">
              <Label className="mb-2 text-[1.6rem]">Capitol</Label>
              <RadioGroup
                value={configuration.capitol}
                onChange={handleCapitolChange}
                aria-label="Capitol">
                {filteredChapters.map((capitol) => (
                  <Radio
                    key={capitol.value}
                    value={capitol.value}
                    className="bg-white flex justify-between shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-4 p-4 rounded-lg transition-all ease-in-out data-[checked]:bg-neon-blue data-[checked]:text-white">
                    <Label>{capitol.name}</Label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className={`size-6 ${
                        configuration.capitol === capitol.value
                          ? "visible opacity-100"
                          : "invisible opacity-0"
                      }`}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </Radio>
                ))}
              </RadioGroup>
            </Field>
          </div>
        ) : null}

        <div className="py-2">
          <Field className="flex flex-col">
            <Label className="mb-2 text-[1.6rem]">Numar de intrebari</Label>
            <Input
              name="numarIntrebari"
              value={configuration.numarIntrebari}
              onChange={handleNumarIntrebariChange}
              className="border p-2 rounded-lg ps-4 bg-white focus:outline-none"
            />
          </Field>
        </div>
        <div className="py-2">
          <Field className="flex flex-col">
            <Label className="mb-2 text-[1.6rem]">Dificultate</Label>
            <RadioGroup
              value={configuration.dificultate}
              onChange={handleDificultateChange}
              aria-label="Dificultate">
              {dificultate.map((diff) => (
                <Radio
                  key={diff.value}
                  value={diff.value}
                  className="bg-white flex justify-between shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] my-4 p-4 rounded-lg transition-all ease-in-out data-[checked]:bg-neon-blue data-[checked]:text-white">
                  <Label>{diff.name}</Label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className={`size-6 ${
                      configuration.dificultate === diff.value
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                    }`}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </Radio>
              ))}
            </RadioGroup>
          </Field>
        </div>

        <button
          className="uppercase bg-neon-blue p-4 text-center text-white rounded-lg w-full mb-4"
          onClick={handleGenerate}>
          Genereaza quiz
        </button>
      </section>
    </>
  );
}
