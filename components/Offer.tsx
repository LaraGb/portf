import { skillsData } from "@/data";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export default function Offer() {
  return (
    <div className="flex flex-col">
      <h1 className="sticky top-20 mb-20 heading mx-auto">
        Um pouco <span className="text-purple"> sobre mim</span>
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

const content = [
  {
    title: "Desenvolvedora Web",
    description:
      "Especializada em desenvolvimento utilizando Next.js e React para criar experiências web modernas e responsivas. Capacitada para transformar designs criativos em interfaces funcionais e intuitivas.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/p1.jpeg" alt="" className="w-[94%] h-[94%] object-contain" />
      </div>
    ),
  },
  {
    title: "Desenvolvedora Desktop",
    description:
      "Proficiente em Node.js ou/e Python para o desenvolvimento de aplicativos desktop eficientes e robustos. Experiência em criar soluções escaláveis e de alto desempenho para diversas necessidades de negócio.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <img src="/p4.png" alt="" className="w-[94%] h-[94%] object-contain" />
      </div>
    ),
  },
  {
    title: "UI/UX Designer",
    description:
      "Habilidades em design de interfaces de usuário e experiência do usuário, transformando conceitos e ideias em designs visuais atrativos e funcionais. Foco na usabilidade e na criação de experiências impactantes para os usuários.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white">
        <img src="/p7.png" alt="" className="w-[94%] h-[94%] object-contain" />
      </div>
    ),
  },
  {
    title: "Desenvolvedora de Automação",
    description:
      "Especializada em automação de processos utilizando Selenium, Python e PySide para criar scripts eficientes e automatizar tarefas repetitivas. Capacitada para otimizar fluxos de trabalho e aumentar a produtividade.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        <img src="/p6.png" alt="" className="w-[94%] h-[94%] object-contain" />
      </div>
    ),
  },
];
