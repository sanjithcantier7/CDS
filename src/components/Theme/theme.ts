export interface Theme {
  titleBar: any;
  checkBox: {
    label: string;
  };
  radioButton: {
    label: string;
    checkedColor: string;
  };
  Button: {
    contained: {
      backgroundColor: string;
      hoveredBackgroundColor: string;
      color: string;
      focusedBorderColor: string;
    };
    outlined: {
      backgroundColor: string;
      hoveredBackgroundColor: string;
      color: string;
      BorderColor: string;
    };
  };
  SnackBar: {
    error: string;
    warning: string;
    info: string;
    success: string;
    font: string;
  };
  Tabs: {
    backgroundColor: string;
    selectedBackgroundColor: string;
    color: string;
    selectedColor: string;
    selectedBorderBottom: string;
    borderBottom: string;
  };
  TabVertical: {
    backgroundColor: string;
    selectedBackgroundColor: string;
    color: string;
    selectedColor: string;
    selectedBorderRight: string;
    borderRight: string;
  };
  TextField: {
    defaultColor: string;
    defaultOutlineColor: string;
    hoveredColor: string;
    hoveredOutlineColor: string;
    focusedColor: string;
    errorOutlineColor: string;
    successOutlineColor: string;
    focusedOutlineColor: string;
  };
  Slider: {
    background: string;
    backgroundOverlay: string;
    thumbColor: string;
    thumbBackground: string;
  };
}

const cantierColorpalette = {
  primary: "#002856",
  secondary: "#F15D22",
  tertiary: "#4376AF",
  pageBackground: "#9C9C9C",
  success: "#459D7C",
  error: "#D60000",
  info: "#002856",
  warning: "#FFCA41",
};

export const lightTheme: Theme = {
  titleBar: {},
  checkBox: {
    label: "#F15D22",
  },
  radioButton: {
    label: "#F15D22",
    checkedColor: "#002856",
  },
  Button: {
    contained: {
      backgroundColor: "#002856",
      hoveredBackgroundColor: "#0D3C72",
      color: "#fff",
      focusedBorderColor: "#F15D22",
    },
    outlined: {
      backgroundColor: "#fff",
      hoveredBackgroundColor: "#E3E3E3",
      color: "#9C9C9C",
      BorderColor: "#002856",
    },
  },
  SnackBar: {
    success: "#459D7C",
    error: "#D60000",
    info: "#002856",
    warning: "#FFCA41",
    font: "Roboto",
  },
  Tabs: {
    backgroundColor: "#F8F8F8",
    selectedBackgroundColor: "#fff",
    color: "#000",
    selectedColor: "#F15D22",
    selectedBorderBottom: "#002856",
    borderBottom: "#D1D1D1",
  },
  TabVertical: {
    backgroundColor: "#ffffff",
    selectedBackgroundColor: "#ffffff",
    color: "#000000",
    selectedColor: "#F15D22",
    selectedBorderRight: "#002856",
    borderRight: "#CCCCCC",
  },
  TextField: {
    defaultColor: "#A1A1A1",
    defaultOutlineColor: "#DDE2E5",
    hoveredColor: "#000",
    hoveredOutlineColor: "#12A1DE",
    focusedColor: "#000",
    focusedOutlineColor: "#F15D22",
    errorOutlineColor: "#D60000",
    successOutlineColor: "#459D7C",
  },
  Slider: {
    background: "#DDE2E5",
    backgroundOverlay: "#002856",
    thumbColor: "#F15D22",
    thumbBackground: "#ffffff",
  },
};

export const darkTheme: Theme = {
  titleBar: {},
  checkBox: {
    label: "#F15D22",
  },
  radioButton: {
    label: "#F15D22",
    checkedColor: "#002856",
  },
  Button: {
    contained: {
      backgroundColor: "#EFEFEF",
      hoveredBackgroundColor: "#E3E3E3",
      color: "#000",
      focusedBorderColor: "#B3B3B3",
    },
    outlined: {
      backgroundColor: "#FFF",
      hoveredBackgroundColor: "#E3E3E3",
      color: "#9C9C9C",
      BorderColor: "#9C9C9C",
    },
  },
  SnackBar: {
    success: "#459D7C",
    error: "#D60000",
    info: "#002856",
    warning: "#FFCA41",
    font: "Roboto",
  },
  Tabs: {
    backgroundColor: "#",
    selectedBackgroundColor: "#",
    color: "#",
    selectedColor: "#",
    selectedBorderBottom: "#",
    borderBottom: "#",
  },
  TabVertical: {
    backgroundColor: "#",
    selectedBackgroundColor: "#",
    color: "#",
    selectedColor: "#",
    selectedBorderRight: "#",
    borderRight: "#",
  },
  TextField: {
    defaultColor: "",
    defaultOutlineColor: "",
    hoveredColor: "",
    hoveredOutlineColor: "",
    focusedColor: "",
    errorOutlineColor: "",
    successOutlineColor: "",
    focusedOutlineColor: "",
  },
  Slider: {
    background: "#DDE2E5",
    backgroundOverlay: "#002856",
    thumbColor: "#F15D22",
    thumbBackground: "#fff",
  },
};
