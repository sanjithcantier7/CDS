import React, { useState, useMemo, ChangeEventHandler } from "react";
import { Combobox, Option, makeStyles } from "@fluentui/react-components";

interface OptionType {
  id: string;
  label: string;
}

interface IProps {
  label?: string;
  options?: OptionType[];
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
  combobox: {
    backgroundColor: "#f5f5f5",
    border: "none",
    height: "36px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});

const dropdownSizes = {
  small: "200px",
  medium: "300px",
  large: "400px",
};

const CdsAutoComplete: React.FC<IProps> = ({
  label,
  options = [], // Default to an empty array
  disabled = false,
  size = "medium",
  onChange,
}) => {
  const styles = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  // Validate options format (allowing any number of options)
  const isValidOptionsFormat =
    Array.isArray(options) &&
    options.every(
      (opt) =>
        opt && typeof opt.id === "string" && typeof opt.label === "string",
    );

  const filteredOptions = useMemo(() => {
    if (!isValidOptionsFormat) return [];
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [options, searchQuery, isValidOptionsFormat]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (onChange) {
      onChange(event);
    }
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.root}>
      <div className={styles.labelContainer}>
        {label && <label className={styles.label}>{label}</label>}
        {!isValidOptionsFormat ? (
          <span style={{ color: "red", fontWeight: "bold" }}>
            Invalid options format! Options must be an array of objects with
            "id" and "label".
          </span>
        ) : (
          <Combobox
            className={styles.combobox}
            style={{ width: dropdownSizes[size] }}
            clearable
            disabled={disabled}
            onChange={handleChange}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <Option key={option.id} value={option.id}>
                  {option.label}
                </Option>
              ))
            ) : (
              <Option disabled>No options available</Option>
            )}
          </Combobox>
        )}
      </div>
    </div>
  );
};

export default CdsAutoComplete;
