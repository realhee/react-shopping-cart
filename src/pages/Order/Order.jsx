import { useState, useEffect } from "react";
import OrderList from "../../components/OrderList";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function Order() {
  const [orders, setOrders] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <section className="order-section">
      <PageTitle titlename="주문 목록" />
      <OrderList orders={orders} />
    </section>
  );
}
