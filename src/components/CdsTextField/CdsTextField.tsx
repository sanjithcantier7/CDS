import React, { ChangeEventHandler } from "react";
import { Input, makeStyles } from "@fluentui/react-components";

interface IProps {
  label?: string;
  placeholder?: string;
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
  label: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#f5f5f5",
    border: "none",
    padding: "8px",
    borderRadius: "4px",
  },
});

const textFieldSizes = {
  small: "200px",
  medium: "300px",
  large: "400px",
};

const CdsTextField: React.FC<IProps> = ({
  label,
  placeholder = "",
  disabled = false,
  size = "medium",
  onChange,
}) => {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      {label && <label className={styles.label}>{label}</label>}
      <Input
        className={styles.input}
        style={{ width: textFieldSizes[size] }}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default CdsTextField;
