"use client";

import { useState } from "react";
import { Field, Input, Label, Select } from "@headlessui/react";

export default function QuizzesConfigure() {
  const [configuration, setConfiguration] = useState({});
  return (
    <>
      <header className="text-center mb-4">
        <h1>Configureaza Quizz-ul</h1>
      </header>
      <section>
        <div className="py-2">
          <Field className="flex flex-col">
            <Label>Numele quizz-ului</Label>
            <Input name="name" />
          </Field>
        </div>
        <div className="py-2">
          <Field className="flex flex-col">
            <Label>Materie</Label>
            <Select name="materie" aria-label="Materie">
              <option value="matematica">Matematica</option>
              <option value="fizica">Fizica</option>
              <option value="informatica">Informatica</option>
            </Select>
          </Field>
        </div>

        <div className="py-2">
          <label>Capitol</label>
        </div>
        <div className="py-2">
          <label>Dificultate</label>
        </div>
        <div className="py-2">
          <label>Numar de intrebari</label>
        </div>
      </section>
    </>
  );
}
