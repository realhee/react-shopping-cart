import React from "react";

import "../src/css/index.css";
import "../src/css/common/index.css";
import "../src/css/page/index.css";

// import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export default {
//   decorators: [
//     (story) => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>,
//   ],
// };

// addDecorator((story) => (
//   <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
// ));
