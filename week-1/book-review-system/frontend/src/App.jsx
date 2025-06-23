import "./App.css";
import React from "react";
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
        <Link class="btn btn-primary" to="/signup">
          Signup
        </Link>
        <Link class="btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default App;
