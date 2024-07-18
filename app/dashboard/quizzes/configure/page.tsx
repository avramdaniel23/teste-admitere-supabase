"use client";

import { useState } from "react";
import { Field, Input, Label, Switch } from "@headlessui/react";
import { subjects } from "@/libs/selectOptions/generateQuizzOptions";
import {
  dificultateOptions,
  dificultateSimulare,
  numarIntrebariOptions,
} from "@/libs/configureQuizz/config";
import {
  fetchQuestionsData,
  submitQuizz,
} from "@/libs/configureQuizz/dataHelpers";
import RadioGroupComponent from "@/components/RadioGroup/RadioGroupComponent";

interface Configuration {
  name: string;
  materie: string;
  capitol: string;
  dificultate: string;
  numarIntrebari: string;
  privacy: boolean;
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

export default function QuizzesConfigure() {
  const [configuration, setConfiguration] = useState<Configuration>({
    name: "",
    materie: "",
    capitol: "",
    dificultate: "",
    numarIntrebari: "",
    privacy: false,
  });
  const [filteredChapters, setFilteredChapters] = useState<Chapter[]>([]);
  const [selectedCapitol, setSelectedCapitol] = useState<string>("");
  const materii: Subject[] = subjects;

  const handlePrivacyChange = (value: boolean) => {
    setConfiguration((prev) => ({
      ...prev,
      privacy: value,
    }));
  };

  const handleMaterieChange = (value: string) => {
    const selectedSubject = materii.find((materie) => materie.value === value);
    setConfiguration((prev) => ({
      ...prev,
      materie: value,
      capitol: "",
    }));
    setFilteredChapters(selectedSubject ? selectedSubject.chapters : []);
  };

  const handleCapitolChange = (value: string) => {
    setSelectedCapitol(value);
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

  const handleNumarIntrebariChange = (value: string) => {
    if (configuration.numarIntrebari === "15" && value !== "15") {
      setConfiguration((prev) => ({
        ...prev,
        dificultate: "",
      }));
    }

    setConfiguration((prev) => ({
      ...prev,
      numarIntrebari: value,
    }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfiguration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerate = async () => {
    const hasEmptyField = Object.values(configuration).some(
      (value) => value === ""
    );

    if (hasEmptyField) {
      console.error("Toate câmpurile sunt obligatorii!");
      return;
    }

    try {
      const questionIDs = await fetchQuestionsData(configuration);
      console.log("🚀 ~ handleGenerate ~ questionIDs:", questionIDs);
      // await submitQuizz(configuration, questionIDs);
      console.log(configuration);

      console.log("Quiz successfully created");
    } catch (error) {
      console.error("Error generating quiz:", error);
      alert("Error generating quiz. Please try again.");
    }
  };

  const filteredDificultate =
    configuration.numarIntrebari === "15"
      ? [...dificultateOptions, dificultateSimulare]
      : dificultateOptions;

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
          <Switch
            checked={configuration.privacy}
            onChange={handlePrivacyChange}
            className="w-full">
            <span className=" bg-white rounded shadow h-[2rem] w-full flex">
              <span
                className={`flex justify-center items-center h-full w-1/2 rounded transition duration-300 ease-in-out transform ${
                  configuration.privacy
                    ? "bg-neon-blue translate-x-full text-white"
                    : "bg-gray-100"
                }`}>
                {configuration.privacy ? "Public" : "Privat"}
              </span>
            </span>
          </Switch>
        </div>
        <div className="py-2">
          <Field className="flex flex-col">
            <Label className="mb-2 text-[1.6rem]">Materie</Label>
            <RadioGroupComponent
              value={configuration.materie}
              onChange={handleMaterieChange}
              options={subjects}
            />
          </Field>
        </div>

        {filteredChapters.length > 0 ? (
          <div className="py-2">
            <Field className="flex flex-col">
              <Label className="mb-2 text-[1.6rem]">Capitol</Label>
              <RadioGroupComponent
                value={selectedCapitol}
                onChange={handleCapitolChange}
                options={filteredChapters}
              />
            </Field>
          </div>
        ) : null}

        <div className="py-2">
          <Field className="flex flex-col">
            <Label className="mb-2 text-[1.6rem]">Numar de intrebari</Label>
            <RadioGroupComponent
              value={configuration.numarIntrebari}
              onChange={handleNumarIntrebariChange}
              options={numarIntrebariOptions}
            />
          </Field>
        </div>

        <div className="py-2">
          <Field className="flex flex-col">
            <Label className="mb-2 text-[1.6rem]">Dificultate</Label>
            <RadioGroupComponent
              value={configuration.dificultate}
              onChange={handleDificultateChange}
              options={filteredDificultate}
            />
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
