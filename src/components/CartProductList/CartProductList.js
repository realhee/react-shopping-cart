// TODO : 상위 Cart 폴더 생성

import CartContainer from "../CartContainer/CartContainer";
import CheckBoxContainer from "../CheckBoxContainer/CheckBoxContainer";
import DeleteButton from "../DeleteButton/DeleteButton";
import CartTitle from "../CartTitle/CartTitle";

export default function CartProductList({ carts }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <CheckBoxContainer isChecked="true" />
        <DeleteButton title="상품삭제" />
      </div>
      <CartTitle title="든든배송 상품" count={carts.length} />
      <hr className="divide-line-gray mt-10" />
      {carts.map((item) => {
        return <CartContainer key={item.id} product={item.product} />;
      })}
    </>
  );
}

// TODO : CheckBoxContainer 전체선택 토글
// TODO : 상품삭제
// TODO : 든든배송상품 개수 제어
