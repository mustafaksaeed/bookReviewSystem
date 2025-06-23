import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex-2",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Book review system</h1>
      <div>
        <Link class="btn btn-primary" to="/add-book">
          Signup
        </Link>
        <Link class="btn btn-primary" to="/add-book">
          Login
        </Link>
      </div>
    </div>
  );
}

export default App;
