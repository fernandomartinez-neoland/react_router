import { createBrowserRouter, RouterProvider } from "react-router";
import { Page } from "../components/Page.component";
import { Api } from "../components/Api.component";
import App from "../App";
import { Nuevo } from "../components/Nuevo.component";
import { Otro } from "../components/Otro.component";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/page", element: <Page /> },
  {
    path: "/api",
    element: <Api />,
    children: [
      { path: "nuevo", element: <Nuevo /> }, // <-- relativo
      { path: "otro", element: <Otro /> }, // <-- relativo
    ],
  },
]);

export default function SignRoute() {
  return <RouterProvider router={router} />;
}
