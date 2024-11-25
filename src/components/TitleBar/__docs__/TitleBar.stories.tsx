import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "TitleBar",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    version: "MES v1.0",
    profileUserName: "John Doe",
    profileRole: "Admin",
    home: false,
    notification: false,
    settings: false,
    info: false,
    brandlogo: "",
    profilePicture: "",
    brandlogoSx: {},
    profileBorderColor: "#ff0000",
  },
};
