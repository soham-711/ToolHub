import { useState } from "react";
import { useTranslation } from "react-i18next";
import { tools } from "../tools/registry";
import { categories } from "../tools/categories";
import type { Category } from "../tools/types";
import ToolCard from "../components/common/ToolCard";
import "./HomePage.css";

type Filter = "all" | Category;

function HomePage() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Filter>("all");

  const pills: { id: Filter; label: string }[] = [
    { id: "all", label: "All" },
    ...categories,
  ];

  const visible =
    active === "all" ? tools : tools.filter((x) => x.category === active);

  return (
    <div className="home">
      <section className="hero">
        <h1>
          {t("home.title", {
            defaultValue: "Every tool you need, in one place",
          })}
        </h1>
        <p>
          {t("home.subtitle", {
            defaultValue:
              "Free, fast utilities for everyday tasks. No sign-up needed.",
          })}
        </p>
      </section>

      <section id="tools" className="tools-section">
        <div
          className="filter-pills"
          role="tablist"
          aria-label="Tool categories"
        >
          {pills.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active === c.id}
              className={`pill ${active === c.id ? "active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {t(`home.categories.${c.id}`, { defaultValue: c.label })}
            </button>
          ))}
        </div>

        <div id="popular" className="tool-grid">
          {visible.map((tool) => (
            <ToolCard key={tool.slug} {...tool} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
