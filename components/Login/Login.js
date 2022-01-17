import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";

import AuthContext from "../../store/auth-context";
import styles from "./Login.module.css";

const AuthForm = () => {

  const router = useRouter();
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isSignIn, setisSignIn] = useState(true);
  const [loading, setLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setisSignIn((prevState) => !prevState);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setLoading(true);
    let url;
    if (isSignIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBf5eXyXxjjxGd4MVevae8mgEYKbApZnxU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBf5eXyXxjjxGd4MVevae8mgEYKbApZnxU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={styles.auth}>
      <h1>{isSignIn ? "Login" : "Register"}</h1>
      <form onSubmit={submitForm}>
        <div className={styles.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.actions}>
          {!loading && (
            <button>{isSignIn ? "Login" : "Create Account"}</button>
          )}
          {loading && <p>Sending request...</p>}
          <button
            type="button"
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isSignIn ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
