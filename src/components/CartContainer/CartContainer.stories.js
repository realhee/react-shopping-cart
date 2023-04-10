import React from "react";

import CartContainer from "./CartContainer";

export default {
  component: CartContainer,
  title: "CartContainer",
};

const Template = (args) => <CartContainer {...args} />;
const product = {
  id: 1,
  name: "냉면용기(대)",
  price: 83700,
  imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
};

export const Default = Template.bind({});
Default.args = {
  product: product,
};

// TODO : isChecked, quantity
