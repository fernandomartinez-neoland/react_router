import { createBrowserRouter, RouterProvider } from "react-router";
import { Page } from "../components/Page.component";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page",
    element: <Page />,
  },
]);

export default function SignRoute() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
