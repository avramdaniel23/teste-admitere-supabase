import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

export default function PopoverNav() {
  return (
    <PopoverGroup className="group flex justify-evenly pt-2 pb-6 ">
      <Popover>
        <PopoverButton className="flex items-center gap-2 font-semibold hover:bg-zinc-300 p-2 rounded-md outline-none">
          Matematica
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col items-center bg-gray-600 gap-2 rounded-lg text-white p-4 mt-2 w-52"
        >
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/algebra"
          >
            Algebra
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/geometrie"
          >
            Geometrie
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/trigonometrie"
          >
            Trigonometrie
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/analiza"
          >
            Analiza Matematica
          </a>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className="flex items-center gap-2 font-semibold hover:bg-zinc-300 p-2 rounded-md outline-none">
          Fizica
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col items-center bg-gray-600 gap-2 rounded-lg text-white p-4 mt-2 w-52"
        >
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/mecanica"
          >
            Mecanica
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/electricitate"
          >
            Electricitate
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/termodinamica"
          >
            Termodinamica
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/optica"
          >
            Optica
          </a>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className="flex items-center gap-2 font-semibold hover:bg-zinc-300 p-2 rounded-md outline-none">
          Informatica
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col items-center bg-gray-600 gap-2 rounded-lg text-white p-4 mt-2 w-52"
        >
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/algoritmi"
          >
            Algoritmi Elementari
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/vectori"
          >
            Vectori
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/matrici"
          >
            Matrici
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/siruri"
          >
            Siruri de Caractere
          </a>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className="flex items-center gap-2 font-semibold hover:bg-zinc-300 p-2 rounded-md outline-none">
          Chimie
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col items-center bg-gray-600 gap-2 rounded-lg text-white p-4 mt-2 w-52"
        >
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/organica"
          >
            Organica
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/anorganica"
          >
            Anorganica
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/generala"
          >
            Generala
          </a>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className="flex items-center gap-2 font-semibold hover:bg-zinc-300 p-2 rounded-md outline-none">
          Biologie
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col items-center bg-gray-600 gap-2 rounded-lg text-white p-4 mt-2 w-52"
        >
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/botanica"
          >
            Botanica
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/zoologie"
          >
            Zoologie
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/anatomie"
          >
            Anatomie
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/genetica"
          >
            Genetica
          </a>
        </PopoverPanel>
      </Popover>

      <Popover>
        <PopoverButton className="flex items-center gap-2 font-semibold hover:bg-zinc-300 p-2 rounded-md outline-none">
          Economie
        </PopoverButton>
        <PopoverPanel
          anchor="bottom"
          className="flex flex-col items-center bg-gray-600 gap-2 rounded-lg text-white p-4 mt-2 w-52"
        >
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/septari"
          >
            Septari
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/pariuri"
          >
            Pariuri Sportive
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/ruleta"
          >
            Ruleta
          </a>
          <a
            className="hover:bg-gray-700 hover:font-semibold p-1 rounded-lg"
            href="/blackjack"
          >
            Blackjack
          </a>
        </PopoverPanel>
      </Popover>
    </PopoverGroup>
  );
}
