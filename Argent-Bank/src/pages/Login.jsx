import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";
import { useState } from "react";
import { login } from "../services/exchangeApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

library.add(faCircleUser);

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onClick = () => {
    setChecked(!checked);
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    login(credentials, dispatch, navigate);
    if (checked) {
      localStorage.email = credentials.email;
      localStorage.password = credentials.password;
    } else {
      localStorage.email = " ";
    }
  };

  return (
    <Layout>
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              autoComplete="email"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" onClick={onClick} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <NavLink to="/user" className="sign-in-button">
            Sign In
          </NavLink> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button className="sign-in-button" onClick={handleClick}>
            Sign In
          </button>
          {/* <!--  --> */}
        </form>
      </section>
    </Layout>
  );
};

export default Login;
