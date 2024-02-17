import "./Login.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/Layout";

library.add(faCircleUser);

const Login = () => {
  return (
    <Layout>
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <NavLink to="/user" className="sign-in-button">
            Sign In
          </NavLink>
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
          {/* <!--  --> */}
        </form>
      </section>
    </Layout>
  );
};

export default Login;
