import React from "react";
import { CgGym } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const usersignout = () => {
    dispatch(signout());
    history.push("/");
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <CgGym size="2.0em" />
            Let's Exercise
          </a>
          <form className="d-flex">
            <NavLink to="/">
              <button type="button" className="btn btn-outline-secondary me-3">
                Home
              </button>
            </NavLink>
            {user && user.userType === "admin" ? (
              <NavLink to="/gyms">
                <button
                  type="button"
                  className="btn btn-outline-secondary me-3"
                >
                  Gyms
                </button>
              </NavLink>
            ) : (
              true
            )}

            <NavLink to="/classes">
              <button type="button" className="btn btn-outline-secondary me-3">
                Classes
              </button>
            </NavLink>
            {user ? (
              <>
                <div style={{ paddingTop: "10px" }}>
                  <p
                    style={{
                      marginLeft: "5px",
                      marginRight: "20px",
                    }}
                  >
                    {" "}
                    Hi, {user.username}
                  </p>
                </div>
                <div style={{ marginTop: "7px" }}>
                  {" "}
                  <HiOutlineLogout onClick={usersignout} size="1.5em" />
                </div>
              </>
            ) : (
              <>
                <NavLink to="/signin">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-3"
                  >
                    Sign in
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button type="button" className="btn btn-outline-secondary">
                    Sign up
                  </button>
                </NavLink>
              </>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
