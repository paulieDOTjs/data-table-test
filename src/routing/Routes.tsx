import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layouts/Layout";
import { Home } from "../pages/Home/Home";
import { PrimeReact } from "../pages/PrimeReact/PrimeReact";
import { TanStackTable } from "../pages/TanStackTable/TanStackTable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tanstack",
        element: <TanStackTable />,
      },
      {
        path: "prime",
        element: <PrimeReact />,
      },
    ],
  },
]);
