import React from "react";
import { Dropdown, Option, makeStyles } from "@fluentui/react-components";

interface OptionType {
  id: string;
  label: string;
}

interface IProps {
  label?: string;
  options: OptionType[];
  disabled?: boolean;
  multiselect?: boolean;
  size?: "small" | "medium" | "large";
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    padding: "5px",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "100%",
  },
  dropdown: {
    backgroundColor: "#f5f5f5",
    border: "none",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});

// Define width sizes for dropdown
const dropdownSizes = {
  small: "200px",
  medium: "300px",
  large: "400px",
};

const CdsDropDown = ({
  label,
  options,
  disabled,
  multiselect = false,
  size = "medium", // Default size is medium
}: IProps) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.labelContainer}>
        {label && <label className={styles.label}>{label}</label>}
        <Dropdown
          className={styles.dropdown}
          style={{ width: dropdownSizes[size] }} // Apply width dynamically
          disabled={disabled}
          clearable={true}
          multiselect={multiselect}
        >
          {options.map((option) => (
            <Option key={option.id} value={option.id}>
              {option.label}
            </Option>
          ))}
        </Dropdown>
      </div>
    </div>
  );
};

export default CdsDropDown;
