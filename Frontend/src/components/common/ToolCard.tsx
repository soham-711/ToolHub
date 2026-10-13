import { Link } from "react-router-dom";
import type { ToolMeta } from "../../tools/types";

function ToolCard({ slug, title, desc, Icon, color }: ToolMeta) {
  return (
    <Link to={`/tools/${slug}`} className="tool-card">
      <span className="tool-icon" style={{ background: `${color}1f`, color }}>
        <Icon size={30} aria-hidden="true" />
      </span>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Link>
  );
}

export default ToolCard;
