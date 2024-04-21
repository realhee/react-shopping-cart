// TODO : 재사용성으로 components로 분류했는데 공통 레이아웃 관련파일은 어떻게 분류?
import { ROUTE_PATH } from "../../constants/page";
import HeaderNavButtonContainer from "../HeaderNavButtonContainer/HeaderNavButtonContainer";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import HeaderNavButton from "../HeaderNavButton/HeaderNavButton";

export default function Header() {
  return (
    <nav className="nav flex justify-around">
      <HeaderTitle title="CLEAN CODE SHOP" toPath={ROUTE_PATH.PRODUCT_LIST} />
      <HeaderNavButtonContainer />
    </nav>
  );
}
