import { Link, Navigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Login() {
  const { isAuth, toggleAuth, setToken } = useContext(AppContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  function setdata(e) {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  }

  function submit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        toggleAuth();
        setToken(res.token);
      });
  }

  return (
    <div className="login-page">
      <form onSubmit={submit} className="form" data-testid="login-form">
        <div>
          <label>
            <input
              name="email"
              value={data.email}
              onChange={setdata}
              data-testid="email-input"
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="password"
              value={data.password}
              onChange={setdata}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
