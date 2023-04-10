import React from "react";

import HeaderTitle from "./HeaderTitle";
// import { ROUTE_PATH } from "../../constants/page";

export default {
  component: HeaderTitle,
  title: "HeaderTitle",
};

const Template = (args) => <HeaderTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Clean Code Shop",
  // toPath: ROUTE_PATH.PRODUCT_LIST,
};

// TODO : useNavigate() Error
