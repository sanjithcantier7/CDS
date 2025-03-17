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
      default: "white",
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
        <div style={{ padding: '20px', minHeight: '100vh' }}>{Story()}</div>
      </FluentProvider>
    ),
  ],
};

export default preview;