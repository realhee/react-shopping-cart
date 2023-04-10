import React from "react";

import DeleteButton from "./DeleteButton";

export default {
  component: DeleteButton,
  title: "DeleteButton",
};

const Template = (args) => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "선택삭제",
};
