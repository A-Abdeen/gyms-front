import React from "react";
import { useSelector } from "react-redux";
import GymItem from "./GymItem";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const GymsList = () => {
  const user = useSelector((state) => state.authReducer.user);
  const gyms = useSelector((state) => state.gymReducer.gyms);
  if (!user || user.userType !== "admin") {
    return <Redirect to="/" />;
  }
  const gymsList = gyms.map((gym) => <GymItem gym={gym} key={gym.id} />);
  return (
    <div className="container mt-5">
      <div className="row">
        <h2>Gyms</h2>
        <div className="col-4"></div>
        <div className="col-4">
          <ul className="list-group">{gymsList}</ul>
          <ul className="list-group">
            <Link to={`/gyms/addgym`}>
              <button className="btn btn-outline-secondary">Add Gym</button>
            </Link>
          </ul>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default GymsList;
