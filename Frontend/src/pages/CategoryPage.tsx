import { useParams } from "react-router-dom";
import { getByCategory } from "../tools/registry";
import { getCategory } from "../tools/categories";
import ToolCard from "../components/common/ToolCard";
import NotFound from "./NotFoundPage";
import "./HomePage.css";

function CategoryPage() {
  const { id = "" } = useParams();
  const category = getCategory(id);
  if (!category) return <NotFound />;

  const list = getByCategory(category.id);

  return (
    <div className="home">
      <section className="hero">
        <h1>{category.label}</h1>
      </section>

      {list.length === 0 ? (
        <p style={{ textAlign: "center" }}>No tools here yet.</p>
      ) : (
        <div className="tool-grid">
          {list.map((tool) => (
            <ToolCard key={tool.slug} {...tool} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
