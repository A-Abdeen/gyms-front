import React from "react";
import { Link } from "react-router-dom";

const ClassItem = ({ classitem }) => {
  return (
    <>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {classitem.name}
        <p>Date: {classitem.date}</p>
        <p> {classitem.price === 0 ? `Free` : `BHD ${classitem.price}`} </p>
        <Link to={`/classes/${classitem.slug}`}>
          <button className="btn btn-outline-secondary">view</button>
        </Link>
      </li>
    </>
  );
};

export default ClassItem;
