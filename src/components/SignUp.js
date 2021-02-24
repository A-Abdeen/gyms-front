import React from "react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { UserForm } from "../styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../store/actions/authActions";
import { HiOutlineMail } from "react-icons/hi";
const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [pass, setpass] = useState("password");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    userType: "user",
  });
  const handleChange = (event) =>
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  const showPass = () => {
    pass === "password" ? setpass("text") : setpass("password");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            {" "}
            <UserForm onSubmit={handleSubmit}>
              <h1 className="mb-5">Sign up</h1>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  aria-label="First Name"
                  aria-describedby="basic-addon1"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  aria-describedby="basic-addon1"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.username}
                  name="username"
                />
                <span class="input-group-text" id="basic-addon2">
                  <FiUser size="1.5em" />
                </span>{" "}
              </div>
              <div class="input-group mb-3">
                <input
                  type={pass}
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.password}
                  name="password"
                />
                <span class="input-group-text" id="basic-addon2">
                  {pass === "password" ? (
                    <AiFillEye size="1.5em" onClick={showPass} />
                  ) : (
                    <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                  )}
                </span>{" "}
              </div>
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <span class="input-group-text" id="basic-addon2">
                  <HiOutlineMail size="1.5em" />
                </span>{" "}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 float-end"
              >
                Sign up
              </button>
            </UserForm>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
