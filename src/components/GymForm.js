import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createGym } from "../store/actions/gymActions";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const GymForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const [gym, setGym] = useState({ name: "" });
  if (!user || user.userType !== "admin") {
    return <Redirect to="/" />;
  }
  const handleChange = (event) =>
    setGym({
      ...gym,
      name: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createGym(gym));
    history.replace("/");
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <h2 className="mb-5">Add Gym</h2>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  name="name"
                  onChange={handleChange}
                  value={gym.name}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 float-end"
                // data-bs-dismiss="modal"
              >
                Add
              </button>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default GymForm;
