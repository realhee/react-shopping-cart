export default function CartTitle({ title, count }) {
  return (
    <h3 className="cart-title">
      {title}({count}개)
    </h3>
  );
}
