import React, { useState, useMemo } from "react";
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
  onSelectionChange?: (selectedOptions: string[]) => void;
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

const CdsDropDown: React.FC<IProps> = ({
  label,
  options,
  disabled = false,
  multiselect = false,
  size = "medium",
  onSelectionChange,
}) => {
  const styles = useStyles();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const memoizedOptions = useMemo(
    () =>
      options.map((option) => (
        <Option key={option.id} value={option.id}>
          {option.label}
        </Option>
      )),
    [options],
  );

  const handleSelectionChange = (e: any, data: any) => {
    const newSelectedOptions = data.selectedOptions || [];
    setSelectedOptions(newSelectedOptions);

    if (onSelectionChange) {
      onSelectionChange(newSelectedOptions);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.labelContainer}>
        {label && <label className={styles.label}>{label}</label>}
        <Dropdown
          className={styles.dropdown}
          style={{ width: dropdownSizes[size] }}
          disabled={disabled}
          clearable={true}
          multiselect={multiselect}
          selectedOptions={selectedOptions}
          onOptionSelect={handleSelectionChange}
        >
          {memoizedOptions}
        </Dropdown>
      </div>
    </div>
  );
};

export default CdsDropDown;
