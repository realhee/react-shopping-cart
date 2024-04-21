export default function PageTitle({ titlename }) {
  return (
    <header className="flex-col-center mt-20">
      <h2 className="cart-section__title">{titlename}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
}
