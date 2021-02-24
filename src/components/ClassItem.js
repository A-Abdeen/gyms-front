import React from "react";

const ClassItem = ({ classitem }) => {
  return (
    <>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        {classitem.name}
        <p>Date: {classitem.date}</p>
        <p> {classitem.price === 0 ? `Free` : `BHD ${classitem.price}`} </p>
        <button className="btn btn-outline-secondary">Book</button>
        <button className="btn btn-outline-secondary">view</button>
      </li>
    </>
  );
};

export default ClassItem;
