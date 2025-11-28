import { Link } from "react-router";

function App() {
  return (
    <>
      <h1>hola mundo</h1>
      <p>
        <Link to="/page">Page</Link>
      </p>
      <p>
        <Link to="/api">Api</Link>
      </p>
    </>
  );
}

export default App;
