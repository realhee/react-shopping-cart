import React from "react";

import ExpectedOrderPriceContainer from "./ExpectedOrderPriceContainer";

export default {
  component: ExpectedOrderPriceContainer,
  title: "ExpectedOrderPriceContainer",
  argTypes: {
    totalPrice: {
      control: {
        type: "number",
        min: 0,
        max: 100000000000000000000,
        step: 1000,
      },
    },
    totalCount: { control: { type: "number", min: 0, step: 1 } },
  },
};

const Template = (args) => <ExpectedOrderPriceContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPrice: 21400,
  totalCount: 1,
};
