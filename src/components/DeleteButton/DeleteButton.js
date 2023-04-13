export default function DeleteButton({ label }) {
  function handleClick() {
    // TODO
    console.log("handleClick function called!");
  }
  return (
    <button className="delete-button" onClick={() => handleClick()}>
      {label}
    </button>
  );
}
