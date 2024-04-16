export default function CheckBoxContainer({ isChecked }) {
  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={isChecked}
      />
      <label className="checkbox-label" for="checkbox">
        선택해제
      </label>
    </div>
  );
}
