import { ListWrapper } from "../styles";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { bookClass, cancelClass } from "../store/actions/classActions";
import { useState } from "react";
import { toast } from "react-toastify";
const ClassDetail = () => {
  const { classSlug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useSelector((state) => state.classReducer.classes);
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.classReducer.loading);
  if (loading) return <Loading />;
  if (!user) return <Redirect to="/" />;
  const foundClass = classes.find((_class) => _class.slug == classSlug);
  let checkUser = foundClass.users.some((_user) => _user.id === user.id);
  let floatTime =
    +foundClass.time.split(":")[0] + +foundClass.time.split(":")[1] / 60; //convert string 24H time to float hours
  let checkTime =
    Date.now() + 3 * 3600000 < // current date in gmt + 3 hours in milliseconds
    Date.parse(foundClass.date) + floatTime * 3600000; //date of class in milliseconds + float hours in milliseconds

  const userClasses = classes.filter((_class) =>
    _class.users.some((_user) => _user.id === user.id)
  );

  const handleClick = () => {
    if (
      (!checkUser &&
        userClasses.some((_class) => _class.date === foundClass.date).length >=
          3) ||
      (!checkUser &&
        userClasses.some(
          (_class) =>
            _class.date === foundClass.date && _class.time === foundClass.time
        ))
    )
      bookmsg();
    else if (!checkTime && checkUser) cancelmsg();
    else {
      dispatch(
        checkUser
          ? cancelClass(user.id, foundClass.id)
          : bookClass(user.id, foundClass.id)
      );
      // history.replace("/classes");
    }
  };
  const cancelmsg = () =>
    toast.warn("Cannot cancel, class already started", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const bookmsg = () =>
    toast.warn(
      "Cannot book more than three classes per day or at the same time",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
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
            <button
              className={`btn btn-outline-${checkUser ? "danger" : "success"}`}
              onClick={handleClick}
            >
              {checkUser ? "Cancel Booking" : "Book"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;
