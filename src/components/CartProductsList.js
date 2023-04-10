// TODO : 상위 Cart 폴더 생성

import CartContainer from "./CartContainer";
import CheckBoxContainer from "./CheckBoxContainer";
import DeleteButton from "./DeleteButton/DeleteButton";

export default function CartProductsList({ carts }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <CheckBoxContainer />
        <DeleteButton>상품삭제</DeleteButton>
      </div>
      <h3 className="cart-title">든든배송 상품({carts.length}개)</h3>
      <hr className="divide-line-gray mt-10" />
      {carts.map((item) => {
        return <CartContainer key={item.id} product={item.product} />;
      })}
    </>
  );
}
