import { Link, Outlet } from "react-router";

export function Api() {
  return (
    <>
      <h1>Api</h1>
      <p>
        <Link to="/api/nuevo">Nuevo</Link>
      </p>
      <Outlet />
    </>
  );
}
