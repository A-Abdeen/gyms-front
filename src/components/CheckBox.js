export const CheckBox = ({ free, setFree }) => {
  return (
    <div class="form-check mt-4">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        onChange={() => setFree(!free)}
        checked={free}
      />
      <label class="form-check-label" for="flexCheckDefault">
        Free Classes Only
      </label>
    </div>
  );
};
