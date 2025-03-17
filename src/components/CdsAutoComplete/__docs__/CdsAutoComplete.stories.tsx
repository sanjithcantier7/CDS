import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CdsAutoComplete from "../CdsAutoComplete";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";

const meta: Meta<typeof CdsAutoComplete> = {
  title: "CdsAutoComplete",
  component: CdsAutoComplete,
  argTypes: {
    label: { control: "text" },
    // disabled: { control: "boolean" },
    size: { control: { type: "radio", options: ["small", "medium", "large"] } },
    options: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof CdsAutoComplete>;

export const Default: Story = {
  args: {
    label: "Select an option",
    size: "medium",
    disabled: false,
    // options: [
    //   { id: "1", label: "Option 1" },
    //   { id: "2", label: "Option 2" },
    //   { id: "3", label: "Option 3" },
    // ],
    options: [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" },
    ],
  },
};


