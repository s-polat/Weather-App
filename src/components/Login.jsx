import React, { useContext, useState } from "react";
import { DataStore } from "../DataStore";

function Login() {
  const { isLogin, setIsLogin } = useContext(DataStore);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "weatherUser",
      JSON.stringify({ email: email, password: password })
    );
    setIsLogin(true)
  };

  console.log(email, password);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-4 mt-5 ">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <h2>Login</h2>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              autoFocus
              required
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              required
              minLength={7}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
