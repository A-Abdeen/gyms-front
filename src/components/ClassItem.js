import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCalendar } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
const ClassItem = ({ classitem }) => {
  const user = useSelector((state) => state.authReducer.user);
  const gyms = useSelector((state) => state.gymReducer.gyms);
  const displayDate = classitem.date.split("-").reverse().join("-");
  const foundGym = gyms.find((gym) => gym.id === classitem.gymId);
  return (
    <>
      <a class="list-group-item list-group-item-light" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">
            {classitem.name} @ {foundGym.name}{" "}
          </h5>
          <small>
            {classitem.users.some((_user) => _user.id === user.id) &&
              "You're Booked!"}
          </small>

          <Link
            to={
              user
                ? `${foundGym.slug}/classes/${classitem.slug}`
                : `/guest/${foundGym.slug}/classes/${classitem.slug}`
            }
          >
            <VscOpenPreview size="1.6em" />
          </Link>
        </div>
        <p class="mb-1" style={{ textAlign: "left" }}>
          <BsCalendar /> {displayDate}
        </p>
        <p class="mt-3" style={{ textAlign: "left", fontSize: "15px" }}>
          <p> {classitem.price === 0 ? `Free` : `BHD ${classitem.price}`} </p>
        </p>
      </a>
    </>
  );
};

export default ClassItem;
