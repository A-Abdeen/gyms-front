import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { createClass } from "../store/actions/classActions";
const ClassForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { gymSlug } = useParams();
  const user = useSelector((state) => state.authReducer.user);
  const types = useSelector((state) => state.classReducer.types);
  const gyms = useSelector((state) => state.gymReducer.gyms);

  const gym = gyms.find((_gym) => _gym.slug === gymSlug);

  const typesList = types.map((type) => (
    <option value={`${type.id}`}>{type.name}</option>
  ));

  const [gymclass, setgymClass] = useState({
    name: "",
    numOfSeats: 0,
    bookedSeats: 0,
    price: 0,
    date: "",
    time: "",
    gymId: gym.id,
    typeId: "",
  });
  if (!user || user.userType !== "admin") {
    return <Redirect to="/" />;
  }
  const handleChange = (event) =>
    setgymClass({
      ...gymclass,
      [event.target.name]: event.target.value,
    });
  const handleNum = (event) =>
    setgymClass({
      ...gymclass,
      [event.target.name]: parseInt(event.target.value),
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createClass(gymclass));
    history.push("/gyms");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <h1>Add Class</h1>

          <br></br>

          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="name"
                aria-label="name"
                aria-describedby="basic-addon1"
                name="name"
                onChange={handleChange}
                value={gymclass.name}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Number of Seats
              </span>
              <input
                type="number"
                className="form-control"
                aria-label="numOfSeats"
                aria-describedby="basic-addon1"
                name="numOfSeats"
                onChange={handleNum}
                value={gymclass.numOfSeats}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">BHD</span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest BHD)"
                name="price"
                onChange={handleNum}
                value={gymclass.price}
              />
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Class Type
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                name="typeId"
                onChange={handleNum}
                value={gymclass.type}
              >
                <option value="" selected>
                  Select Class Type
                </option>
                {typesList}
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Date
              </span>
              <input
                type="date"
                className="form-control"
                placeholder="date"
                aria-label="date"
                aria-describedby="basic-addon1"
                name="date"
                onChange={handleChange}
                value={gymclass.date}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Time
              </span>
              <input
                type="time"
                className="form-control"
                placeholder="time"
                aria-label="time"
                aria-describedby="basic-addon1"
                name="time"
                onChange={handleChange}
                value={gymclass.time}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4 float-end"
            >
              Add
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default ClassForm;
