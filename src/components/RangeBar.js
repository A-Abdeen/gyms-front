const RangeBar = ({ setValue, value }) => {
  return (
    <div>
      <label
        for="customRange3"
        className="form-label d-flex justify-content-start"
      >
        Class Times
      </label>
      <input
        type="range"
        className="form-range"
        min="10"
        max="20"
        step="2"
        id="customRange3"
        defaultValue={25}
        value={!value ? 25 : value}
        onChange={(event) => setValue(event.target.value)}
      />
      <label for="customRange1" className="form-label">
        {!value ? `00:01 - 23:59` : `${value - 2}:00 - ${value}:00`}
      </label>
    </div>
  );
};

export default RangeBar;
