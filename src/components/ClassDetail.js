import { ListWrapper } from "../styles";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { bookClass, cancelClass } from "../store/actions/classActions";
import { useState } from "react";
import { toast } from "react-toastify";
import { GymImg } from "../styles";
import { BsCalendar } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
const ClassDetail = () => {
  const { gymSlug, classSlug } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useSelector((state) => state.classReducer.classes);
  const user = useSelector((state) => state.authReducer.user);
  const gyms = useSelector((state) => state.gymReducer.gyms);
  const loading = useSelector((state) => state.classReducer.loading);
  if (loading) return <Loading />;
  if (!user) return <Redirect to="/" />;
  const foundGym = gyms.find((gym) => gym.slug === gymSlug);
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

  const displayDate = foundClass.date.split("-").reverse().join("-");
  let splitTime = foundClass.time.split(":");
  const displayTime =
    +splitTime[0] > 12
      ? `${splitTime[0] - 12}:${splitTime[1]} PM`
      : +splitTime[0] == 12
      ? foundClass.time + " PM"
      : foundClass.time + " AM";

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
          />
        </div>
        <div className="col-md-8">
          <div
            className="card-body"
            style={{ textAlign: "left", marginLeft: "95px" }}
          >
            <h5 className="card-title">{foundClass.name}</h5>
            <p className="card-text">Location: {foundGym.name}</p>
            <p className="card-text">
              Seats Available:{" "}
              {+foundClass.numOfSeats - +foundClass.bookedSeats}
            </p>
            <p className="card-text"> Capacity: {+foundClass.numOfSeats}</p>
            <p className="card-text">
              Price:{" "}
              {foundClass.price === 0
                ? "Free"
                : "BHD " + foundClass.price.toFixed(2)}
            </p>
            <p className="card-text">
              <BsCalendar size="1.3em" /> {displayDate}
            </p>
            <p className="card-text">
              <BiTime size="1.3em" /> {displayTime}
            </p>
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
