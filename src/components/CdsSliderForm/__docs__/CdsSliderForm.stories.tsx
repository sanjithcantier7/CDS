import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SliderForm from "../CdsSliderForm";
import { Button } from "@fluentui/react-components";
import {
  DocumentAdd24Regular,
  Edit24Regular,
  DocumentRegular,
} from "@fluentui/react-icons";

const meta: Meta<typeof SliderForm> = {
  title: "SliderForm",
  component: SliderForm,
};

export default meta;

type Story = StoryObj<typeof SliderForm>;

const formFields = [
  {
    label: "First Name",
    name: "firstName",
    type: "TextField" as const,
    fieldLength: 4,
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "TextField" as const,
    fieldLength: 4,
  },
  {
    label: "Department",
    name: "department",
    type: "AutoComplete" as const,
    fieldLength: 4,
  },
  {
    label: "Job Title",
    name: "jobTitle",
    type: "TextField" as const,
    fieldLength: 4,
  },
  {
    label: "Email Address",
    name: "email",
    type: "TextField" as const,
    fieldLength: 4,
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "TextField" as const,
    fieldLength: 4,
  },
];

const Template = (args: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button appearance="primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Form" : "Open Form"}
      </Button>
      {isOpen && (
        <SliderForm
          {...args}
          localDrawerOpen={isOpen}
          OnCloseHandler={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export const Add: Story = {
  render: Template,
  args: {
    SliderFormTitle: "Add New Employee",
    SliderIcon: <DocumentAdd24Regular />,
    isEditMode: false,
    EditMode: "create",
    SliderFields: formFields,
  },
};

export const Edit: Story = {
  render: Template,
  args: {
    SliderFormTitle: "Edit Employee",
    SliderIcon: <Edit24Regular />,
    isEditMode: true,
    EditMode: "edit",
    SliderFields: formFields,
    loadData: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      department: "2",
      position: "Senior Developer",
      startDate: "2022-01-15",
    },
  },
};
