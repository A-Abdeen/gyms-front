import React from "react";
import { useSelector } from "react-redux";
import GymItem from "./GymItem";
const GymsList = () => {
  const gyms = useSelector((state) => state.gymReducer.gyms);
  const gymsList = gyms.map((gym) => <GymItem gym={gym} />);
  return (
    <div className="container mt-5">
      <div className="row">
        <h2>Gyms</h2>
        <div className="col-4"></div>
        <div className="col-4">
          <ul className="list-group">{gymsList}</ul>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default GymsList;
