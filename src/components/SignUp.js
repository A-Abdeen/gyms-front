import React from "react";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { UserForm, Error } from "../styles";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../store/actions/authActions";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
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
  const onSubmit = (data) => {
    // event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <UserForm onSubmit={handleSubmit(onSubmit)}>
              <h1 className="mb-5">Sign up</h1>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  aria-label="First Name"
                  aria-describedby="basic-addon1"
                  name="firstName"
                  ref={register({
                    required: true,
                  })}
                  value={user.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && <Error> FirstName is required </Error>}
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  aria-describedby="basic-addon1"
                  name="lastName"
                  value={user.lastName}
                  ref={register({
                    required: true,
                  })}
                  onChange={handleChange}
                />
              </div>
              {errors.lastName && <Error> LastName is required </Error>}
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon2"
                  onChange={handleChange}
                  value={user.username}
                  ref={register({
                    required: true,
                  })}
                  name="username"
                />
                <span class="input-group-text" id="basic-addon2">
                  <FiUser size="1.5em" />
                </span>{" "}
              </div>
              {errors.userName && <Error> UserName is required </Error>}
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
                  // ref={register({
                  //   required: true,
                  //   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                  //   minLength: 8,
                  // })}
                />
                <span class="input-group-text" id="basic-addon2">
                  {pass === "password" ? (
                    <AiFillEye size="1.5em" onClick={showPass} />
                  ) : (
                    <AiFillEyeInvisible size="1.5em" onClick={showPass} />
                  )}
                </span>
              </div>
              {/* {errors.password && (
                <p> Please include the following in your password: </p>
              )}
              {errors.password && !user.password.match(/^(?=.*[a-z])/g) && (
                <Error> At least 1 Lower Case Letter </Error>
              )}
              {errors.password && !user.password.match(/^(?=.*[A-Z])/g) && (
                <Error> At least 1 Upper Case Letter </Error>
              )}
              {errors.password && !user.password.match(/^(?=.*\d)/g) && (
                <Error> At least 1 Number </Error>
              )}
              {errors.password && !user.password.match(/^(?=.*[@$!%*?&])/g) && (
                <Error> At least 1 Special Character </Error>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <Error> Passwords must be least 8 characters long </Error>
              )}
              {errors.password && user.password.includes(user.username) && (
                <Error> Password must not contain your username </Error>
              )} */}
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  name="email"
                  ref={register({
                    required: true,
                  })}
                  value={user.email}
                  onChange={handleChange}
                />
                <span class="input-group-text" id="basic-addon2">
                  <HiOutlineMail size="1.5em" />
                </span>
              </div>
              {errors.email && errors.email.type === "required" && (
                <Error> Email is required </Error>
              )}
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
