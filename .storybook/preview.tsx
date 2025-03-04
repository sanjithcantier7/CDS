import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "white", // Set default background color
      values: [
        { name: "white", value: "#f4f4f4" },
        { name: "lightgray", value: "#f4f4f4" },
        { name: "dark", value: "#454545" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <FluentProvider
        theme={{
          ...webLightTheme,
          colorCompoundBrandStroke: "#F15D22",
          colorCompoundBrandStrokeHover: "#F15D22",
        }}
      >
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <div style={{}}>{Story()}</div>
      </FluentProvider>
    ),
  ],
};

export default preview;
