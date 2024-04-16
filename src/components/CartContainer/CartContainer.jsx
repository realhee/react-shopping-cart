import CartTrashImage from "../CartTrashImage";
import { maskingProductPrice } from "../../utils/product";
import Spin from "../Spin/Spin";

export default function CartContainer({ product, isChecked }) {
  return (
    <>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={isChecked}
          />
          <img
            className="w-144 h-144"
            src={product.imageUrl}
            alt={product.name}
          />
          <span className="cart-name">{product.name}</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <CartTrashImage />
          <Spin value="1" />
          <span className="cart-price">
            {maskingProductPrice(product.price)}원
          </span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </>
  );
}
