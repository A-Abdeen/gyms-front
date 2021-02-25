import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { GymImg } from "../styles";
import { BsCalendar } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
const GuestClassDetail = () => {
  const { classSlug } = useParams();
  const classes = useSelector((state) => state.classReducer.classes);
  const loading = useSelector((state) => state.classReducer.loading);
  const foundClass = classes.find((_class) => _class.slug == classSlug);
  if (loading) return <Loading />;
  return (
    <div
      className="card border-secondary mt-3 ms-3"
      style={{ "max-width": 540 + "px" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <GymImg
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80"
            alt="gymphoto"
            style={{ height: "330px" }}
          />
        </div>
        <div className="col-md-8">
          <div
            className="card-body"
            style={{ textAlign: "left", marginLeft: "95px" }}
          >
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
            <p className="card-text">
              {" "}
              <BsCalendar size="1.3em" /> {foundClass.date}{" "}
            </p>
            <p className="card-text">
              <BiTime size="1.3em" /> {foundClass.time}
            </p>
            <p style={{ color: "green" }}>
              Register or sign in to book the class
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestClassDetail;
