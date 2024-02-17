import "./Navbar.scss";
import argentBankLogo from "../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleUser, faArrowRightFromBracket);

const Navbar = (user) => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {user ? (
          <>
            <NavLink className="main-nav-item" to="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </NavLink>
            <NavLink className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faCircleUser} />
              user
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faCircleUser} />
              Tony
            </NavLink>
            <NavLink className="main-nav-item" to="/">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
