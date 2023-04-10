export default function DeleteButton({ title }) {
  function handleClick() {
    // TODO
    console.log("handleClick function called!");
  }
  return (
    <button className="delete-button" onClick={() => handleClick()}>
      {title}
    </button>
  );
}
