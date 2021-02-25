import React from "react";
import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";
import Loading from "./Loading";
import { Subheading } from "../styles";

const BookedList = () => {
  const types = useSelector((state) => state.classReducer.types);
  const classes = useSelector((state) => state.classReducer.classes);
  const loading = useSelector((state) => state.classReducer.loading);
  const user = useSelector((state) => state.authReducer.user);

  if (loading) return <Loading />;

  const classList = classes
    .filter((_class) => _class.users.some((_user) => _user.id === user.id))
    .map((elem) => {
      return <ClassItem classitem={elem} key={elem.id} />;
    });

  return (
    <div>
      <div className="container mt-5">
        <h2> My Booked Classes </h2>
        <div className="row">
          <div className="col-8">
            <div class="list-group mb-5">{classList}</div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <Subheading>
        {classList.length === 0 && "You have no upcoming classes."}
      </Subheading>
    </div>
  );
};

export default BookedList;
