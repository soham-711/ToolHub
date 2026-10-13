import type { ComponentType, LazyExoticComponent } from "react";
import type { LucideIcon } from "lucide-react";

export type Category =
  | "calculators"
  | "text"
  | "date-time"
  | "image"
  | "pdf"
  | "developer";

export interface ToolMeta {
  slug: string;
  title: string;
  desc: string;
  category: Category;
  Icon: LucideIcon;
  color: string;
}

export interface Tool extends ToolMeta {
  Component: LazyExoticComponent<ComponentType>;
}
