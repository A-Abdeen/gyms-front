import { useState } from "react";
const DateQuery = ({ setDate, date }) => {
  const [check, setCheck] = useState();
  const handleClick = (event) => {
    if (date === event.target.value) setCheck(false);
    else setCheck();
    setDate(event.target.value);
  };
  return (
    <div className="mb-4">
      <input
        type="radio"
        className="btn-check"
        name="options"
        id="option5"
        autocomplete="off"
        checked={!date}
        onClick={handleClick}
      />
      <label className="btn btn-outline-primary" for="option5">
        Show All
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options"
        id="option1"
        autocomplete="off"
        value={1}
        onClick={handleClick}
      />
      <label className="btn btn-outline-secondary" for="option1">
        Today
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options"
        id="option2"
        autocomplete="off"
        value={2}
        onClick={handleClick}
      />
      <label className="btn btn-outline-secondary" for="option2">
        Next 2 days
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options"
        id="option3"
        autocomplete="off"
        value={3}
        onClick={handleClick}
      />
      <label className="btn btn-outline-secondary" for="option3">
        Next 3 days
      </label>

      <input
        type="radio"
        className="btn-check"
        name="options"
        id="option4"
        autocomplete="off"
        value={7}
        onClick={handleClick}
      />
      <label className="btn btn-outline-secondary" for="option4">
        Next week
      </label>
    </div>
  );
};

export default DateQuery;
