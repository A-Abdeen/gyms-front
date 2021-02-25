import React from "react";
import { useSelector } from "react-redux";
import ClassItem from "./ClassItem";
import ClassType from "./ClassType";
import SearchBar from "./SearchBar";
import { useState } from "react";
import DateQuery from "./DateQuery";
import RangeBar from "./RangeBar";
import { CheckBox } from "./CheckBox";
import Loading from "./Loading";
import { BiFilterAlt } from "react-icons/bi";

const ClassList = () => {
  const types = useSelector((state) => state.classReducer.types);
  const classes = useSelector((state) => state.classReducer.classes);
  const [query, setQuery] = useState(null);
  const [date, setDate] = useState(null);
  const [value, setValue] = useState(null);
  const [free, setFree] = useState(false);
  const loading = useSelector((state) => state.classReducer.loading);
  if (loading) return <Loading />;
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
      <div className="container mt-5">
        <h2>Classes</h2>
        <SearchBar setQuery={setQuery} />
        <DateQuery setDate={setDate} date={date} />
        <div className="row">
          <div className="col-2">
            <h5 className="mb-3 mt-2" style={{ textAlign: "left" }}>
              <BiFilterAlt /> Filters:
            </h5>

            <RangeBar setValue={setValue} value={value} />

            <CheckBox setFree={setFree} free={free} />
            <button
              className="btn btn-outline-secondary mt-3"
              onClick={handleClick}
            >
              Reset Filters
            </button>
          </div>
          <div className="col-8">
            <div class="list-group">{typesList}</div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default ClassList;
