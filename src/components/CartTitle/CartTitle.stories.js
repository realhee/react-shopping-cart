import React from "react";

import CartTitle from "./CartTitle";

export default {
  component: CartTitle,
  title: "CartTitle",
  argTypes: { count: { type: "number", min: 0, step: 1 } },
};

const Template = (args) => <CartTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "든든배송 상품",
  count: "1",
};
