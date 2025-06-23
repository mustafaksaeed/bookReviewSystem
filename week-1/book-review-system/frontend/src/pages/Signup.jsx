import React from "react";

const Signup = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form style={{ width: "30%" }}>
        <h1 style={{ textAlign: "center" }}>Signup</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>

          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1">Last name</label>

          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <label for="exampleInputEmail1">Email address</label>

          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
