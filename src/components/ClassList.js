import React from "react";
import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";
import ClassType from "./ClassType";

const ClassList = () => {
  const types = useSelector((state) => state.classReducer.types);
  const classes = useSelector((state) => state.classReducer.classes);
  for (const type of types) {
    classes
      .filter((_class) => _class.typeId === type.id)
      .map((elem) => {
        return <ClassItem classitem={elem} key={elem.id} />;
      });
  }
  const typesList = types.map((type) => {
    return <ClassType type={type} key={type.id} />;
  });

  const classesList = classes.map((elem) => {
    return <ClassItem classitem={elem} key={elem.id} />;
  });

  return (
    <div>
      <h1>Class List</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <ul className="list-group">{typesList}</ul>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ClassList;
