import React from "react";
import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";
const ClassType = ({ type }) => {
  const classes = useSelector((state) => state.classReducer.classes);
  const classList = classes
    .filter((_class) => _class.typeId === type.id)
    .map((elem) => {
      return <ClassItem classitem={elem} key={elem.id} />;
    });
  return (
    <>
      <h5>{type.name}</h5>
      {classList}
    </>
  );
};

export default ClassType;
