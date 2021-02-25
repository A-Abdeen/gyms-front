import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
const GuestClassDetail = () => {
  const { classSlug } = useParams();
  const classes = useSelector((state) => state.classReducer.classes);
  const loading = useSelector((state) => state.classReducer.loading);
  const foundClass = classes.find((_class) => _class.slug == classSlug);
  if (loading) return <Loading />;
  return (
    <div className="card mb-3" style={{ "max-width": 540 + "px" }}>
      <div className="row g-0">
        {/* <div className="col-md-4">
          <img src="..." alt="..."/>
        </div> */}
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{foundClass.name}</h5>
            <p className="card-text">
              Seats Available:{" "}
              {+foundClass.numOfSeats - +foundClass.bookedSeats}
            </p>
            <p className="card-text"> Capacity: {+foundClass.numOfSeats}</p>
            <p className="card-text">
              {" "}
              Price: {foundClass.price === 0 ? "Free" : foundClass.price}{" "}
            </p>
            <p className="card-text"> Date: {foundClass.date} </p>
            <p className="card-text">Time: {foundClass.time}</p>
            <p>Register or sign in to book the class</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestClassDetail;
