// pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "96px 16px" }}>
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
