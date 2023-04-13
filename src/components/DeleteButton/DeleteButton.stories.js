import React from "react";

import DeleteButton from "./DeleteButton";

export default {
  component: DeleteButton,
  title: "DeleteButton",
  argTypes: {
    active: { control: "boolean" },
    size: { control: "radio", options: ["small", "medium", "large"] },
  },
};

const Template = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "선택삭제",
};

// TODO : click event Actions
