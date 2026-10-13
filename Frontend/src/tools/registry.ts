import { lazy } from "react";
import type { Tool } from "./types";
import { meta as percentage } from "./calculators/percentage-calculator/meta";
// import { meta as wordCounter } from "./text/word-counter/meta";

export const tools: Tool[] = [
  {
    ...percentage,
    Component: lazy(() => import("./calculators/percentage-calculator")),
  },
//   {
//     ...wordCounter,
//     Component: lazy(() => import("./text/word-counter")),
//   },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);
export const getByCategory = (c: string) => tools.filter((t) => t.category === c);