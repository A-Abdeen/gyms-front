import React from "react";
import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";
const ClassType = ({ type, query, date, value, free }) => {
  const today = new Date().toISOString().slice(0, 10);
  let classes = useSelector((state) => state.classReducer.classes);
  if (date) {
    classes =
      date == 1
        ? classes.filter((_class) => _class.date === today)
        : date == 7
        ? classes.filter(
            (_class) =>
              Date.parse(_class.date) >= Date.parse(today) + +date * 86400000 &&
              Date.parse(_class.date) <=
                Date.parse(today) + +date * 2 * 86400000
          )
        : date == 2 || date == 3
        ? classes.filter(
            (_class) =>
              Date.parse(_class.date) <
                Date.parse(today) + (+date + 1) * 86400000 &&
              Date.parse(_class.date) > Date.parse(today)
          )
        : classes;
  }
  if (query)
    classes = classes.filter((_class) =>
      _class.name.toLowerCase().includes(query.toLowerCase())
    );

  if (value)
    classes = classes.filter(
      (_class) =>
        +_class.time.split(":")[0] + +_class.time.split(":")[1] / 60 >=
          +value - 2 &&
        +_class.time.split(":")[0] + +_class.time.split(":")[1] / 60 < +value
    );

  if (free) classes = classes.filter((_class) => +_class.price === 0);

  const classList = classes
    .filter((_class) => _class.typeId === type.id)
    .map((elem) => {
      return <ClassItem classitem={elem} key={elem.id} />;
    });
  return (
    <>
      <h5 style={{ textAlign: "left" }}>{type.name}</h5>
      {classList}
    </>
  );
};

export default ClassType;
