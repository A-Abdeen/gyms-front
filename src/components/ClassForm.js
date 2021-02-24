import React from "react";
import { useState } from "react";
const ClassForm = () => {
  const [gymclass, setgymClass] = useState({
    name: "",
    numOfSeats: 0,
    bookedSeats: 0,
    price: 0,
    date: "",
    time: "",
    typeId: "",
  });
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
    console.log(gymclass);
    console.log(typeof gymclass.price);
    // console.log(recipe.ingredients)
    // dispatch(createRecipe(recipe));
    // history.push("/recipes");
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
                type
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
                <option value="1">Weights</option>
                <option value="2">Cardio</option>
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
                time
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
