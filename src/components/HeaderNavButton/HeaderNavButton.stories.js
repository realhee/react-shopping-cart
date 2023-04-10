import React from "react";

import HeaderNavButton from "./HeaderNavButton";
// import { ROUTE_PATH } from "../../constants/page";

export default {
  component: HeaderNavButton,
  title: "HeaderNavButton",
};

const Template = (args) => <HeaderNavButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "장바구니",
  // toPath: ROUTE_PATH.PRODUCT_LIST,
};

// TODO : useNavigate() Error
