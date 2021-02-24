import React from "react";
import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";
import ClassType from "./ClassType";
import SearchBar from "./SearchBar";
import { useState } from "react";
import DateQuery from "./DateQuery";
import RangeBar from "./RangeBar";
import { CheckBox } from "./CheckBox";

const ClassList = () => {
  const types = useSelector((state) => state.classReducer.types);
  const classes = useSelector((state) => state.classReducer.classes);
  const [query, setQuery] = useState(null);
  const [date, setDate] = useState(null);
  const [value, setValue] = useState(null);
  const [free, setFree] = useState(false);

  const handleClick = () => {
    setDate(null);
    setQuery(null);
    setValue(null);
    setFree(null);
  };
  const typesList = types.map((type) => {
    return (
      <ClassType
        type={type}
        key={type.id}
        query={query}
        date={date}
        value={value}
        free={free}
      />
    );
  });

  return (
    <div>
      <h1>Class List</h1>
      <div className="container mt-5">
        <button onClick={handleClick}> Reset Filters </button>
        <SearchBar setQuery={setQuery} />
        <DateQuery setDate={setDate} date={date} />
        <RangeBar setValue={setValue} value={value} />
        <CheckBox setFree={setFree} free={free} />
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
