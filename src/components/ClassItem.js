import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ClassItem = ({ classitem }) => {
  const user = useSelector((state) => state.authReducer.user);
  return (
    <>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {classitem.name}
        <p>Date: {classitem.date}</p>
        <p> {classitem.price === 0 ? `Free` : `BHD ${classitem.price}`} </p>

        <Link
          to={
            user
              ? `/classes/${classitem.slug}`
              : `/guest/classes/${classitem.slug}`
          }
        >
          <button className="btn btn-outline-secondary">view</button>
        </Link>
      </li>
    </>
  );
};

export default ClassItem;
