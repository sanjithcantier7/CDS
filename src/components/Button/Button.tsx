import React, { ReactNode } from "react";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  size?: ButtonSize;
  disabled?: boolean;
}

export interface StandardButtonProps extends ButtonBaseProps {
  variant: "standard";
  color?: string;
}

export interface CustomButtonProps extends ButtonBaseProps {
  variant: "custom";
  icon: ReactNode;
  sx?: any;
  tooltip?: string;
}

export type ButtonProps = StandardButtonProps | CustomButtonProps;

const styles = {
  standard: {
    variant: {
      borderRadius: 3,
      backgroundColor: "gray",
      border: "none",
      color: "white",
    },
    sizes: {
      small: { padding: "5px 10px", fontSize: "14px" },
      medium: { padding: "10px 20px", fontSize: "16px" },
      large: { padding: "15px 30px", fontSize: "18px" },
    },
  },
  custom: {
    variant: {
      borderRadius: 6,
      backgroundColor: "#2e7d32",
      color: "#ffffff",
      border: "none",
    },
    sizes: {
      small: { padding: "8px 14px", fontSize: "14px" },
      medium: { padding: "12px 12px", fontSize: "16px" },
      large: { padding: "14px 14px", fontSize: "18px" },
    },
  },
};

const Button = (props: ButtonProps) => {
  const {
    variant = "standard",
    size = "medium",
    disabled = false,
    label,
    style,
    ...restProps
  } = props;

  const variantStyles = styles[variant];
  const sizeStyles = styles[variant].sizes[size];

  if (variant === "custom") {
    const { icon, sx } = props as CustomButtonProps;
    return (
      <button
        style={{
          ...variantStyles.variant,
          ...sizeStyles,
          ...(disabled && { opacity: 0.5, cursor: "not-allowed" }),
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
        disabled={disabled}
        {...restProps}
      >
        {icon && React.isValidElement(icon) ? icon : null}
        {label}
      </button>
    );
  }

  return (
    <button
      style={{
        ...variantStyles.variant,
        ...sizeStyles,
        ...(disabled && { opacity: 0.5, cursor: "not-allowed" }),
        ...style,
      }}
      disabled={disabled}
      {...restProps}
    >
      {label}
    </button>
  );
};

export default Button;
