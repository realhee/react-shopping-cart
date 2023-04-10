export default function Spin({ value }) {
  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={value} />
      <div>
        <button className="number-input-button">▲</button>
        <button className="number-input-button">▼</button>
      </div>
    </div>
  );
}
