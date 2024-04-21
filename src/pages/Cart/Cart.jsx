import { useEffect, useState } from "react";
import CartProductList from "../../components/CartProductList/CartProductList";
import ExpectedOrderPriceContainer from "../../components/ExpectedOrderPriceContainer/ExpectedOrderPriceContainer";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Cart() {
  const [carts, setCarts] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      });
  }, []);

  // function getTotalPrice() {
  //   let totalPrice = 0;
  //   totalPrice += carts.map((item, idx) => {
  //     console.log(item);
  //     return item.product.price;
  //   });
  //   console.log(totalPrice);

  //   return totalPrice;
  // }

  return (
    <section className="cart-section">
      <PageTitle titlename="장바구니" />
      <div className="flex">
        <section className="cart-left-section">
          <CartProductList carts={carts} />
        </section>
        <section className="cart-right-section">
          <ExpectedOrderPriceContainer
            totalPrice="21400"
            // totalPrice={() => getTotalPrice()}
            totalCount={carts.length}
          />
        </section>
      </div>
    </section>
  );
}
