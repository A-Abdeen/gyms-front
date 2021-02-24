import React from "react";
import { Link } from "react-router-dom";
const GymItem = ({ gym }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {gym.name}
      <Link to={`/gyms/${gym.slug}/addclass`}>
        <button className="btn btn-outline-secondary">Add Class</button>
      </Link>
    </li>
  );
};

export default GymItem;
