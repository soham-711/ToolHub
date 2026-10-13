import type { Category } from "./types";

export const categories: { id: Category; label: string }[] = [
  { id: "calculators", label: "Calculators" },
  { id: "text", label: "Text tools" },
  { id: "date-time", label: "Date & time" },
  { id: "image", label: "Image tools" },
  { id: "pdf", label: "PDF tools" },
  { id: "developer", label: "Developer tools" },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
