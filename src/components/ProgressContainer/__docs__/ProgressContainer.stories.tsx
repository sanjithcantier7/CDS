import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

export default {
  title: "ProgressContainer",
  component: Example,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["standard", "tabs"],
    },
    icon: { control: "text" },
    label: { control: "text" },
    description: { control: "text" },
    children: { control: false },
  },
} as Meta;
type Story = StoryObj<typeof Example>;

export const Standard: Story = {
  args: {
    variant: "standard",
    label: "Standard Label",
    description: "This is a description for the standard variant.",
    children: <button>Action</button>,
  },
};

export const Tabs: Story = {
  args: {
    variant: "tabs",
    label: "Tabs Label",
    description: "This is a description for the tabs variant.",
    children: <button>Tab Action</button>,
  },
};
