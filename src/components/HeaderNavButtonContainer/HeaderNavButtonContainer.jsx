import HeaderNavButton from "../HeaderNavButton/HeaderNavButton";
import { ROUTE_PATH } from "../../constants/page";

export default function HeaderNavButtonContainer() {
  return (
    <div className="flex gap-15">
      <HeaderNavButton title="장바구니" toPath={ROUTE_PATH.CART} />
      <HeaderNavButton title="주문목록" toPath={ROUTE_PATH.ORDER} />
    </div>
  );
}
