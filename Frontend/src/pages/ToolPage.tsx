import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { getTool } from "../tools/registry";
import NotFound from "./NotFoundPage"

export default function ToolPage() {
  const { slug = "" } = useParams();
  const tool = getTool(slug);
  if (!tool) return <NotFound />;

  return (
    <div className="tool-page">
      <h1>{tool.title}</h1>
      <p>{tool.desc}</p>
      <Suspense fallback={<p>Loading…</p>}>
        <tool.Component />
      </Suspense>
    </div>
  );
}
