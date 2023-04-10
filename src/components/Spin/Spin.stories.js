import React from "react";

import Spin from "./Spin";

export default {
  component: Spin,
  title: "Spin",
  argTypes: { value: { control: { type: "number", min: 1, step: 1 } } },
};

const Template = (args) => <Spin {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "1",
};
