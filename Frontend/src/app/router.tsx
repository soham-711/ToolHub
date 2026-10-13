import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFoundPage";
import ToolPage from "../pages/ToolPage";
import CategoryPage from "../pages/CategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // add real pages here as you build them, e.g.
      // { path: "tools/:slug", element: <ToolPage /> },
      // { path: "category/:id", element: <CategoryPage /> },


      { path: "tools/:slug", element: <ToolPage /> },
{ path: "category/:id", element: <CategoryPage /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
