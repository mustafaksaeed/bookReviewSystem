import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "2rem",
      }}
    >
      <h1>Book review system</h1>
      <div>
        <Link className="btn btn-primary me-2" to="/signup">
          Signup
        </Link>
        <Link className="btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default App;
