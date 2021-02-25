import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCalendar } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
const ClassItem = ({ classitem }) => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <>
      <a class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{classitem.name}</h5>

          <Link
            to={
              user
                ? `/classes/${classitem.slug}`
                : `/guest/classes/${classitem.slug}`
            }
          >
            <VscOpenPreview size="1.6em" />
          </Link>
        </div>
        <p class="mb-1" style={{ textAlign: "left" }}>
          <BsCalendar /> {classitem.date}
        </p>
        <p class="mt-3" style={{ textAlign: "left", fontSize: "15px" }}>
          <p> {classitem.price === 0 ? `Free` : `BHD ${classitem.price}`} </p>
        </p>
      </a>
    </>
  );
};

export default ClassItem;
