import React, { useContext } from "react";
import mouse from "../assets/mouse.svg";
import login from "../assets/log-in-2.svg";
import { Link, useLocation, useNavigate } from "react-router";
import CurrentUser from "../context/UserContext";

const Header = () => {
  const location = useLocation();
  const { user, setUser } = useContext(CurrentUser);
  const navigate = useNavigate();
  return (
    <header>
      <nav
        className="flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a className="flex items-center gap-2" aria-label="Go to homepage">
          <img src={mouse} alt="foo-rum logo" aria-hidden="true" />
          <p className="font-extrabold">foo-rum</p>
        </a>
        {Object.keys(user).length ? (
          <p
            className="font-semibold cursor-pointer"
            onClick={() => {
              setUser({});
              navigate("/login");
            }}
          >
            Logout
          </p>
        ) : location.pathname !== "/login" ? (
          <Link to="/login">
            <div
              className="flex items-center gap-2 cursor-pointer"
              aria-label="Login to your account"
            >
              <p className="font-semibold">Login</p>
              <img src={login} alt="Login icon" aria-hidden="true" />
            </div>
          </Link>
        ) : (
          <Link to="/">
            <p className="font-semibold">Back to home</p>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
