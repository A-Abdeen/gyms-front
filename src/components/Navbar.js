import React from "react";
import { CgGym } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Navtitle } from "../styles";
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
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#495057" }}
      >
        <div className="container-fluid">
          <Navtitle className="navbar-brand" style={{ color: "#f8f9fa" }}>
            <CgGym size="2.0em" />
            Let's Exercise
          </Navtitle>
          <form className="d-flex">
            <NavLink to="/">
              <button type="button" className="btn btn-outline-light me-3">
                Home
              </button>
            </NavLink>
            {user && user.userType === "admin" ? (
              <NavLink to="/gyms">
                <button type="button" className="btn btn-outline-light me-3">
                  Gyms
                </button>
              </NavLink>
            ) : (
              true
            )}

            {user && (
              <NavLink to="/classes">
                <button type="button" className="btn btn-outline-light me-3">
                  Classes
                </button>
              </NavLink>
            )}
            {user ? (
              <>
                <NavLink to="/myclasses">
                  <div style={{ paddingTop: "10px" }}>
                    <p
                      style={{
                        marginLeft: "5px",
                        marginRight: "20px",
                        color: "#f8f9fa",
                      }}
                    >
                      {" "}
                      Hi, {user.username}
                    </p>
                  </div>
                </NavLink>
                <div style={{ marginTop: "7px" }}>
                  {" "}
                  <HiOutlineLogout
                    onClick={usersignout}
                    size="1.5em"
                    color="#f8f9fa"
                  />
                </div>
              </>
            ) : (
              <>
                <NavLink to="/signin">
                  <button type="button" className="btn btn-outline-light me-3">
                    Sign in
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button type="button" className="btn btn-outline-light">
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
