import type { Meta, StoryObj } from "@storybook/react";
import CdsDropDown from "../CdsDropDown"; // Adjust the import path

const meta: Meta<typeof CdsDropDown> = {
  title: "CdsDropDown",
  component: CdsDropDown,
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    options: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof CdsDropDown>;

export const Default: Story = {
  args: {
    label: "Select an option",
    size: "small",
    disabled: false,
    options: [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" },
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Dropdown",
    size: "medium",
    disabled: true,
    options: [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" },
    ],
  },
};

export const MultiSelect: Story = {
  args: {
    label: "MultiSelect Dropdown",
    size:"large",
    disabled: false,
    multiselect: true,
    options: [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" },
      { id: "3", label: "Option 3" },
    ],
  },
};
