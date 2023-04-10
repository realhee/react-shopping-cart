// TODO : 재사용성으로 components로 분류했는데 공통 레이아웃 관련파일은 어떻게 분류?
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/page";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderNavButton from "../HeaderNavButton/HeaderNavButton";

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="nav flex justify-around">
      <HeaderTitle title="Clean Code Shop" toPath={ROUTE_PATH.PRODUCT_LIST} />
      <div className="flex gap-15">
        <HeaderNavButton title="장바구니" toPath={ROUTE_PATH.CART} />
        <HeaderNavButton title="주문목록" toPath={ROUTE_PATH.ORDER} />
      </div>
    </nav>
  );
}
