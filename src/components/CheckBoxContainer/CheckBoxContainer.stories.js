import React from "react";

import CheckBoxContainer from "./CheckBoxContainer";

export default {
  component: CheckBoxContainer,
  title: "CheckBoxContainer",
  argTypes: { isChecked: { control: "boolean" } },
};

const Template = (args) => <CheckBoxContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: "false",
};
