import "./Login.scss";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login } from "../services/exchangeApi";
import { clearMessage } from "../redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleUser);

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.api.messageError);

  const [isLoading, setIsLoading] = useState(false);
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
    if (message !== null) {
      dispatch(clearMessage());
    }
    setIsLoading(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    login(credentials, dispatch, navigate, checked);
  };

  return (
    <Layout>
      <section className="sign-in-content">
        {message === null && isLoading && <Loader />}
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
          <button className="sign-in-button" onClick={handleClick}>
            Sign In
          </button>
          {message && <span>Username or password invalid</span>}
        </form>
      </section>
    </Layout>
  );
};

export default Login;
