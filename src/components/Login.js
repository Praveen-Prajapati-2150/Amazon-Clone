import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/Login.css";
import { auth } from "./Firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    // do the login logic....

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage...
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    // do the regiter logic....

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, redirect to homepage!!
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h3>E-mail</h3>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            name=""
            id=""
          />
          <h3>Password</h3>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name=""
            id=""
          />{" "}
          <br />
          <button onClick={login} type="submit">
            Sign in
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login__middle">
        <hr />
        <p>New to Amazon?</p>
        <hr />
      </div>
      <button onClick={register}>Create your Amazon Account</button>
    </div>
  );
};

export default Login;
